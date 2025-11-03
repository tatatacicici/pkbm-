import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TopicsSubjectsAttributes {
  id: string;
  topicId: string;
  subjectId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type TopicsSubjectsPk = "id";
export type TopicsSubjectsId = TopicsSubjects[TopicsSubjectsPk];
export type TopicsSubjectsOptionalAttributes = "deletedAt";
export type TopicsSubjectsCreationAttributes = Optional<TopicsSubjectsAttributes, TopicsSubjectsOptionalAttributes>;

export class TopicsSubjects extends Model<TopicsSubjectsAttributes, TopicsSubjectsCreationAttributes> implements TopicsSubjectsAttributes {
  id!: string;
  topicId!: string;
  subjectId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof TopicsSubjects {
    return TopicsSubjects.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    topicId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'topic_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'topics_subjects',
    schema: 'public',
    timestamps: false
  });
  }
}
