import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysAttributes {
  pk: number;
  id?: string;
  topic: string;
  description?: string;
  caseStudy?: string;
  rules?: string;
  duration: number;
  subjectId: string;
  sessionId: string;
  rubricId: number;
  startAt: Date;
  endAt: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysCreationAttributes = Optional<RoleplaysAttributes, 'id' | 'description' | 'caseStudy' | 'rules' | 'deletedAt'>;

export class Roleplays extends Model<RoleplaysAttributes, RoleplaysCreationAttributes> implements RoleplaysAttributes {
  declare pk: number;
  declare id?: string;
  declare topic: string;
  declare description?: string;
  declare caseStudy?: string;
  declare rules?: string;
  declare duration: number;
  declare subjectId: string;
  declare sessionId: string;
  declare rubricId: number;
  declare startAt: Date;
  declare endAt: Date;
  declare createdBy: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Roleplays {
    Roleplays.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        topic: { type: DataTypes.STRING, allowNull: false,
            field: 'topic'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        caseStudy: { type: DataTypes.TEXT, allowNull: true,
            field: 'case_study'
        },
        rules: { type: DataTypes.TEXT, allowNull: true,
            field: 'rules'
        },
        duration: { type: DataTypes.INTEGER, allowNull: false,
            field: 'duration'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        rubricId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'rubric_id'
        },
        startAt: { type: DataTypes.DATE, allowNull: false,
            field: 'start_at'
        },
        endAt: { type: DataTypes.DATE, allowNull: false,
            field: 'end_at'
        },
        createdBy: { type: DataTypes.UUID, allowNull: false,
            field: 'created_by'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'roleplays',
        timestamps: true,
        underscored: false,
      }
    );
    return Roleplays;
  }
}
