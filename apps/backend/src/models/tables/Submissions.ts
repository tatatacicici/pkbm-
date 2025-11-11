import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionsAttributes {
  pk: number;
  id?: string;
  user_id: string;
  assignment_id: number;
  status: string;
  is_graded: boolean;
  score: number;
  document_path: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SubmissionsCreationAttributes = Optional<SubmissionsAttributes, 'id' | 'deleted_at'>;

export class Submissions extends Model<SubmissionsAttributes, SubmissionsCreationAttributes> implements SubmissionsAttributes {
  declare pk: number;
  declare id?: string;
  declare user_id: string;
  declare assignment_id: number;
  declare status: string;
  declare is_graded: boolean;
  declare score: number;
  declare document_path: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Submissions {
    Submissions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.STRING, allowNull: false },
        assignment_id: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        is_graded: { type: DataTypes.BOOLEAN, allowNull: false },
        score: { type: DataTypes.INTEGER, allowNull: false },
        document_path: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'submissions',
        timestamps: true,
        underscored: false,
      }
    );
    return Submissions;
  }
}
