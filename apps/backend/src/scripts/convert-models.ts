import {
  Project,
  SyntaxKind,
  SourceFile,
  InterfaceDeclaration,
  PropertySignature,
  TypeAliasDeclaration,
  ClassDeclaration,
  Node,
  PropertyAssignment,
  ObjectLiteralExpression,
  PropertyDeclaration,
} from 'ts-morph';
import path from 'path';

const snakeToCamel = (s: string): string =>
  s.replace(/_([a-z])/g, (_: string, c: string) => c.toUpperCase());

const camelToSnake = (s: string): string =>
  s.replace(/([A-Z])/g, '_$1').toLowerCase();

const hasUnderscore = (name: string): boolean => name.includes('_');

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');

  const project = new Project({
    // sesuaikan kalau tsconfig kamu beda; ini aman untuk kebanyakan monorepo
    tsConfigFilePath: path.resolve(__dirname, '../../tsconfig.app.json'),
    skipAddingFilesFromTsConfig: false,
  });

  const folder = path.resolve(__dirname, '../models/tables/**/*.ts');
  const files: SourceFile[] = project.addSourceFilesAtPaths(folder);

  for (const file of files) {
    let changed = false;

    // ============================================================
    // 1) Fix interface attributes (xxxAttributes)
    // ============================================================
    file.getInterfaces().forEach((intf: InterfaceDeclaration) => {
      const name = intf.getName();
      if (!name || !name.endsWith('Attributes')) return;

      intf.getProperties().forEach((prop: PropertySignature) => {
        const propName = prop.getName();
        if (hasUnderscore(propName)) {
          const camel = snakeToCamel(propName);

          const typeNode = prop.getTypeNode();
          const typeText = typeNode ? typeNode.getText() : 'any';
          const optional = prop.hasQuestionToken() ? '?' : '';

          prop.replaceWithText(`${camel}${optional}: ${typeText};`);
          changed = true;
        }
      });
    });

    // ============================================================
    // 2) Fix CreationAttributes: replace snake keys → camel keys
    // ============================================================
    file.getTypeAliases().forEach((alias: TypeAliasDeclaration) => {
      const name = alias.getName();
      if (!name || !name.endsWith('CreationAttributes')) return;

      const txt = alias.getText();

      const fixed = txt.replace(
        /'([a-z_]+)'/g,
        (_match: string, key: string) => {
          if (key.includes('_')) return `'${snakeToCamel(key)}'`;
          return `'${key}'`;
        }
      );

      if (fixed !== txt) {
        alias.replaceWithText(fixed);
        changed = true;
      }
    });

    // ============================================================
    // 3) Fix class declared properties
    // ============================================================
    file.getClasses().forEach((cls: ClassDeclaration) => {
      const extendsClause = cls.getExtends();
      const extendsText = extendsClause?.getText() ?? '';
      const extendsModel = extendsText.includes('Model');
      if (!extendsModel) return;

      // remove duplicate createdAt/updatedAt/others
      const props = cls.getProperties();
      const seen = new Map<string, number>();

      props.forEach((p: PropertyDeclaration) => {
        const name = p.getName();
        seen.set(name, (seen.get(name) ?? 0) + 1);
      });

      props.forEach((p: PropertyDeclaration) => {
        const name = p.getName();
        const count = seen.get(name) ?? 0;
        if (count > 1) {
          const isReadonly = p.getText().includes('readonly');
          if (isReadonly) {
            p.remove();
            changed = true;
          }
        }
      });

      // convert snake_case → camelCase pada deklarasi property class
      cls.getProperties().forEach((prop: PropertyDeclaration) => {
        const propName = prop.getName();
        if (hasUnderscore(propName)) {
          const camel = snakeToCamel(propName);
          const typeNode = prop.getTypeNode();
          const typeText = typeNode ? typeNode.getText() : 'any';
          const optional = prop.hasQuestionToken() ? '?' : '';
          const modifiers = prop
            .getModifiers()
            .map((m: any) => m.getText())
            .join(' ');

          const prefix = modifiers.length > 0 ? `${modifiers} ` : '';

          prop.replaceWithText(`${prefix}${camel}${optional}: ${typeText};`);
          changed = true;
        }
      });
    });

    // ============================================================
    // 4) Fix initModel(): convert keys, add field mapping
    // ============================================================
    file.forEachDescendant((node: Node) => {
      if (node.getKind() !== SyntaxKind.CallExpression) return;

      const call = node.asKind(SyntaxKind.CallExpression);
      if (!call) return;

      const expr = call.getExpression();
      if (!expr.getText().endsWith('.init')) return;

      const firstArg = call.getArguments()[0];
      const obj = firstArg?.asKind(SyntaxKind.ObjectLiteralExpression);
      if (!obj) return;

      obj.getProperties().forEach((prop: any) => {
        if (!prop.isKind(SyntaxKind.PropertyAssignment)) return;

        const assignment = prop as PropertyAssignment;
        const nameNode = assignment.getNameNode();
        const rawName = nameNode.getText().replace(/['"`]/g, '');

        // Convert snake → camel di level atas
        if (hasUnderscore(rawName)) {
          const camel = snakeToCamel(rawName);
          nameNode.replaceWithText(camel);
          changed = true;
        }

        const initializer = assignment.getInitializerIfKind(
          SyntaxKind.ObjectLiteralExpression
        ) as ObjectLiteralExpression | undefined;

        if (initializer) {
          const hasField = initializer.getProperty('field');
          if (!hasField) {
            initializer.addPropertyAssignment({
              name: 'field',
              initializer: `'${camelToSnake(rawName)}'`,
            });
            changed = true;
          }
        }
      });
    });

    if (changed) {
      if (dry) {
        console.log('[DRY] Would update:', file.getFilePath());
      } else {
        await file.save();
        console.log('Updated:', file.getFilePath());
      }
    }
  }

  console.log(dry ? 'Dry run done.' : 'All files updated.');
}

main().catch((err) => {
  console.error('Error running convert-models script:', err);
  process.exit(1);
});
