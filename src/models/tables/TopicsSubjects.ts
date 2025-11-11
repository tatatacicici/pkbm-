import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsSubjectsAttributes {
  id?: any;
  topic_id?: any;
  subject_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type TopicsSubjectsCreationAttributes = Optional<TopicsSubjectsAttributes, 'id'>;

export class TopicsSubjects extends Model<TopicsSubjectsAttributes, TopicsSubjectsCreationAttributes> implements TopicsSubjectsAttributes {
  declare id?: any;
  declare topic_id?: any;
  declare subject_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
