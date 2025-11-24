import { Project, SyntaxKind } from "ts-morph";
import path from "path";

const snakeToCamel = (s: string) =>
  s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

const camelToSnake = (s: string) =>
  s.replace(/([A-Z])/g, "_$1").toLowerCase();

const hasUnderscore = (name: string) => name.includes("_");

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry");

  const project = new Project({
    tsConfigFilePath: path.resolve(__dirname, "../../tsconfig.json"),
    skipAddingFilesFromTsConfig: false,
  });

  const folder = path.resolve(
    __dirname,
    "../models/tables/**/*.ts"
  );
  const files = project.addSourceFilesAtPaths(folder);

  for (const file of files) {
    let changed = false;

    // ============================================================
    // 1) Fix interface attributes (xxxAttributes)
    // ============================================================
    file.getInterfaces().forEach(intf => {
      if (!intf.getName().endsWith("Attributes")) return;

      intf.getProperties().forEach(prop => {
        const name = prop.getName();
        if (hasUnderscore(name)) {
          const camel = snakeToCamel(name);

          const typeText = prop.getTypeNode()?.getText() ?? "any";
          const optional = prop.hasQuestionToken() ? "?" : "";

          prop.replaceWithText(`${camel}${optional}: ${typeText};`);
          changed = true;
        }
      });
    });

    // ============================================================
    // 2) Fix CreationAttributes: replace snake keys → camel keys
    // ============================================================
    file.getTypeAliases().forEach(alias => {
      if (!alias.getName().endsWith("CreationAttributes")) return;

      const txt = alias.getText();

      const fixed = txt.replace(/'([a-z_]+)'/g, (_, key) => {
        if (key.includes("_")) return `'${snakeToCamel(key)}'`;
        return `'${key}'`;
      });

      alias.replaceWithText(fixed);
      changed = true;
    });

    // ============================================================
    // 3) Fix class declared properties
    // ============================================================
    file.getClasses().forEach(cls => {
      const extendsModel = cls.getExtends()?.getText().includes("Model");
      if (!extendsModel) return;

      // remove duplicate createdAt/updatedAt/others
      const props = cls.getProperties();
      const seen = new Map<string, number>();

      props.forEach(p => {
        const name = p.getName();
        seen.set(name, (seen.get(name) ?? 0) + 1);
      });

      props.forEach(p => {
        const name = p.getName();
        if (seen.get(name)! > 1) {
          const isReadonly = p.getText().includes("readonly");
          if (isReadonly) {
            p.remove();
            changed = true;
          }
        }
      });

      // convert camelCase
      cls.getProperties().forEach(prop => {
        const name = prop.getName();
        if (hasUnderscore(name)) {
          const camel = snakeToCamel(name);
          const typeText = prop.getTypeNode()?.getText() ?? "any";
          const optional = prop.hasQuestionToken() ? "?" : "";
          const modifiers = prop.getModifiers().map(m => m.getText()).join(" ");

          prop.replaceWithText(
            `${modifiers} ${camel}${optional}: ${typeText};`
          );
          changed = true;
        }
      });
    });

    // ============================================================
    // 4) Fix initModel(): convert keys, add field mapping
    // ============================================================
    file.forEachDescendant(node => {
      if (node.getKind() !== SyntaxKind.CallExpression) return;

      const call = node.asKind(SyntaxKind.CallExpression);
      if (!call) return;

      if (!call.getExpression().getText().endsWith(".init")) return;

      const obj = call
        .getArguments()[0]
        ?.asKind(SyntaxKind.ObjectLiteralExpression);
      if (!obj) return;

      obj.getProperties().forEach(prop => {
        if (!prop.isKind(SyntaxKind.PropertyAssignment)) return;
        const nameNode = prop.getNameNode();

        const rawName = nameNode.getText().replace(/['"`]/g, "");

        // Convert snake → camel at top level
        if (hasUnderscore(rawName)) {
          const camel = snakeToCamel(rawName);
          nameNode.replaceWithText(camel);
          changed = true;
        }

        // Add field: 'snake_case'
        const initializer = prop
          .getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

        if (initializer) {
          const hasField = initializer.getProperty("field");
          if (!hasField) {
            initializer.addPropertyAssignment({
              name: "field",
              initializer: `'${camelToSnake(rawName)}'`,
            });
            changed = true;
          }
        }
      });
    });

    if (changed) {
      if (dry) {
        console.log("[DRY] Would update:", file.getFilePath());
      } else {
        await file.save();
        console.log("Updated:", file.getFilePath());
      }
    }
  }

  console.log(dry ? "Dry run done." : "All files updated.");
}

main();
