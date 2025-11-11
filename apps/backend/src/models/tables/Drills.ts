import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillsAttributes {
  id?: number;
  uuid?: string;
  topic: string;
  description: string;
  session: string;
  roleplay: string;
  assessor_id: string;
  student_id: string;
  accepted?: boolean;
  score?: number;
  feedback?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DrillsCreationAttributes = Optional<DrillsAttributes, 'id' | 'uuid' | 'accepted' | 'score' | 'feedback' | 'deleted_at'>;

export class Drills extends Model<DrillsAttributes, DrillsCreationAttributes> implements DrillsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare topic: string;
  declare description: string;
  declare session: string;
  declare roleplay: string;
  declare assessor_id: string;
  declare student_id: string;
  declare accepted?: boolean;
  declare score?: number;
  declare feedback?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
