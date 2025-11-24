import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAttributes {
  id?: string;
  sessionId: string;
  type: string;
  title: string;
  durationSec?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  moduleId?: string;
  maxAttempts?: number;
  description?: string;
}

export type QuizzesCreationAttributes = Optional<QuizzesAttributes, 'id' | 'durationSec' | 'deletedAt' | 'startDate' | 'endDate' | 'moduleId' | 'maxAttempts' | 'description'>;

export class Quizzes extends Model<QuizzesAttributes, QuizzesCreationAttributes> implements QuizzesAttributes {
  declare id?: string;
  declare sessionId: string;
  declare type: string;
  declare title: string;
  declare durationSec?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare startDate?: Date;
  declare endDate?: Date;
  declare moduleId?: string;
  declare maxAttempts?: number;
  declare description?: string;

  public static initModel(sequelize: Sequelize): typeof Quizzes {
    Quizzes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        durationSec: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_sec'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        startDate: { type: DataTypes.DATE, allowNull: true,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: true,
            field: 'end_date'
        },
        moduleId: { type: DataTypes.UUID, allowNull: true,
            field: 'module_id'
        },
        maxAttempts: { type: DataTypes.INTEGER,
            field: 'max_attempts'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        }
      },
      {
        sequelize,
        tableName: 'quizzes',
        timestamps: true,
        underscored: false,
      }
    );
    return Quizzes;
  }
}
