import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillsAttributes {
  id?: number;
  uuid?: string;
  topic: string;
  description: string;
  session: string;
  roleplay: string;
  assessorId: string;
  studentId: string;
  accepted?: boolean;
  score?: number;
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DrillsCreationAttributes = Optional<DrillsAttributes, 'id' | 'uuid' | 'accepted' | 'score' | 'feedback' | 'deletedAt'>;

export class Drills extends Model<DrillsAttributes, DrillsCreationAttributes> implements DrillsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare topic: string;
  declare description: string;
  declare session: string;
  declare roleplay: string;
  declare assessorId: string;
  declare studentId: string;
  declare accepted?: boolean;
  declare score?: number;
  declare feedback?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Drills {
    Drills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        topic: { type: DataTypes.STRING, allowNull: false,
            field: 'topic'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        session: { type: DataTypes.UUID, allowNull: false,
            field: 'session'
        },
        roleplay: { type: DataTypes.UUID, allowNull: false,
            field: 'roleplay'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        accepted: { type: DataTypes.BOOLEAN,
            field: 'accepted'
        },
        score: { type: DataTypes.INTEGER, allowNull: true,
            field: 'score'
        },
        feedback: { type: DataTypes.TEXT, allowNull: true,
            field: 'feedback'
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
        tableName: 'drills',
        timestamps: true,
        underscored: false,
      }
    );
    return Drills;
  }
}
