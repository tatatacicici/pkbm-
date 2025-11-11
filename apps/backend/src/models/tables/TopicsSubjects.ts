import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsSubjectsAttributes {
  id?: string;
  topic_id: string;
  subject_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type TopicsSubjectsCreationAttributes = Optional<TopicsSubjectsAttributes, 'id' | 'deleted_at'>;

export class TopicsSubjects extends Model<TopicsSubjectsAttributes, TopicsSubjectsCreationAttributes> implements TopicsSubjectsAttributes {
  declare id?: string;
  declare topic_id: string;
  declare subject_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof TopicsSubjects {
    TopicsSubjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        topic_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
