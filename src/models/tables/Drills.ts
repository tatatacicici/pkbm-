import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillsAttributes {
  id?: any;
  uuid?: any;
  topic?: any;
  description?: any;
  session?: any;
  roleplay?: any;
  assessor_id?: any;
  student_id?: any;
  accepted?: any;
  score?: any;
  feedback?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DrillsCreationAttributes = Optional<DrillsAttributes, 'id'>;

export class Drills extends Model<DrillsAttributes, DrillsCreationAttributes> implements DrillsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare topic?: any;
  declare description?: any;
  declare session?: any;
  declare roleplay?: any;
  declare assessor_id?: any;
  declare student_id?: any;
  declare accepted?: any;
  declare score?: any;
  declare feedback?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Drills {
    Drills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        topic: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        session: { type: DataTypes.UUID, allowNull: false },
        roleplay: { type: DataTypes.UUID, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        accepted: { type: DataTypes.BOOLEAN },
        score: { type: DataTypes.INTEGER, allowNull: true },
        feedback: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
