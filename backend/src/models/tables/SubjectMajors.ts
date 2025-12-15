import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectMajorsAttributes {
  id?: string;
  subjectId: string;
  majorId: string;
  semesterId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubjectMajorsCreationAttributes = Optional<SubjectMajorsAttributes, 'id' | 'deletedAt'>;

export class SubjectMajors extends Model<SubjectMajorsAttributes, SubjectMajorsCreationAttributes> implements SubjectMajorsAttributes {
  declare id?: string;
  declare subjectId: string;
  declare majorId: string;
  declare semesterId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectMajors {
    SubjectMajors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        majorId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_id'
        },
        semesterId: { type: DataTypes.UUID, allowNull: false,
            field: 'semester_id'
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
        tableName: 'subject_majors',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectMajors;
  }
}
