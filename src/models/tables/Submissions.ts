import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionsAttributes {
  pk?: any;
  id?: any;
  user_id?: any;
  assignment_id?: any;
  status?: any;
  is_graded?: any;
  score?: any;
  document_path?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SubmissionsCreationAttributes = Optional<SubmissionsAttributes, 'id'>;

export class Submissions extends Model<SubmissionsAttributes, SubmissionsCreationAttributes> implements SubmissionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare user_id?: any;
  declare assignment_id?: any;
  declare status?: any;
  declare is_graded?: any;
  declare score?: any;
  declare document_path?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
