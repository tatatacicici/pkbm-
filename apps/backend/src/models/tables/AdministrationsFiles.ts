import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFilesAttributes {
  id?: string;
  administration_id: string;
  id_card?: string;
  diploma_certificate?: string;
  family_card?: string;
  photo?: string;
  transcript?: string;
  letter_of_recommendation?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  id_card_id?: number;
  diploma_certificate_id?: number;
  family_card_id?: number;
  photo_id?: number;
  transcript_id?: number;
  letter_of_recommendation_id?: number;
  student_card_id?: number;
  student_card?: string;
}

export type AdministrationsFilesCreationAttributes = Optional<AdministrationsFilesAttributes, 'id' | 'id_card' | 'diploma_certificate' | 'family_card' | 'photo' | 'transcript' | 'letter_of_recommendation' | 'deleted_at' | 'id_card_id' | 'diploma_certificate_id' | 'family_card_id' | 'photo_id' | 'transcript_id' | 'letter_of_recommendation_id' | 'student_card_id' | 'student_card'>;

export class AdministrationsFiles extends Model<AdministrationsFilesAttributes, AdministrationsFilesCreationAttributes> implements AdministrationsFilesAttributes {
  declare id?: string;
  declare administration_id: string;
  declare id_card?: string;
  declare diploma_certificate?: string;
  declare family_card?: string;
  declare photo?: string;
  declare transcript?: string;
  declare letter_of_recommendation?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare id_card_id?: number;
  declare diploma_certificate_id?: number;
  declare family_card_id?: number;
  declare photo_id?: number;
  declare transcript_id?: number;
  declare letter_of_recommendation_id?: number;
  declare student_card_id?: number;
  declare student_card?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdministrationsFiles {
    AdministrationsFiles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        administration_id: { type: DataTypes.UUID, allowNull: false },
        id_card: { type: DataTypes.TEXT, allowNull: true },
        diploma_certificate: { type: DataTypes.TEXT, allowNull: true },
        family_card: { type: DataTypes.TEXT, allowNull: true },
        photo: { type: DataTypes.TEXT, allowNull: true },
        transcript: { type: DataTypes.TEXT, allowNull: true },
        letter_of_recommendation: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        id_card_id: { type: DataTypes.INTEGER, allowNull: true },
        diploma_certificate_id: { type: DataTypes.INTEGER, allowNull: true },
        family_card_id: { type: DataTypes.INTEGER, allowNull: true },
        photo_id: { type: DataTypes.INTEGER, allowNull: true },
        transcript_id: { type: DataTypes.INTEGER, allowNull: true },
        letter_of_recommendation_id: { type: DataTypes.INTEGER, allowNull: true },
        student_card_id: { type: DataTypes.INTEGER, allowNull: true },
        student_card: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'administrations_files',
        timestamps: true,
        underscored: true,
      }
    );
    return AdministrationsFiles;
  }
}
