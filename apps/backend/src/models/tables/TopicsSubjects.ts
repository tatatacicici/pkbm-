import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsSubjectsAttributes {
  id?: string;
  topicId: string;
  subjectId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type TopicsSubjectsCreationAttributes = Optional<TopicsSubjectsAttributes, 'id' | 'deletedAt'>;

export class TopicsSubjects extends Model<TopicsSubjectsAttributes, TopicsSubjectsCreationAttributes> implements TopicsSubjectsAttributes {
  declare id?: string;
  declare topicId: string;
  declare subjectId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof TopicsSubjects {
    TopicsSubjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        topicId: { type: DataTypes.UUID, allowNull: false,
            field: 'topic_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
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
        tableName: 'topics_subjects',
        timestamps: true,
        underscored: true,
      }
    );
    return TopicsSubjects;
  }
}
