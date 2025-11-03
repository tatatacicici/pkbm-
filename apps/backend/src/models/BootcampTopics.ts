import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BootcampTopicsAttributes {
  id: string;
  title: string;
  description?: string;
  durationWeeks?: number;
  difficultyLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  status: "ACTIVE" | "INACTIVE" | "DRAFT";
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type BootcampTopicsPk = "id";
export type BootcampTopicsId = BootcampTopics[BootcampTopicsPk];
export type BootcampTopicsOptionalAttributes = "description" | "durationWeeks" | "difficultyLevel" | "status" | "createdAt" | "updatedAt" | "deletedAt";
export type BootcampTopicsCreationAttributes = Optional<BootcampTopicsAttributes, BootcampTopicsOptionalAttributes>;

export class BootcampTopics extends Model<BootcampTopicsAttributes, BootcampTopicsCreationAttributes> implements BootcampTopicsAttributes {
  id!: string;
  title!: string;
  description?: string;
  durationWeeks?: number;
  difficultyLevel!: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  status!: "ACTIVE" | "INACTIVE" | "DRAFT";
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof BootcampTopics {
    return BootcampTopics.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    durationWeeks: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_weeks'
    },
    difficultyLevel: {
      type: DataTypes.ENUM("BEGINNER","INTERMEDIATE","ADVANCED"),
      allowNull: false,
      defaultValue: "BEGINNER",
      field: 'difficulty_level'
    },
    status: {
      type: DataTypes.ENUM("ACTIVE","INACTIVE","DRAFT"),
      allowNull: false,
      defaultValue: "DRAFT"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'bootcamp_topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bootcamp_topics_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
