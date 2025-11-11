import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFilesAttributes {
  id?: any;
  administration_id?: any;
  id_card?: any;
  diploma_certificate?: any;
  family_card?: any;
  photo?: any;
  transcript?: any;
  letter_of_recommendation?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  id_card_id?: any;
  diploma_certificate_id?: any;
  family_card_id?: any;
  photo_id?: any;
  transcript_id?: any;
  letter_of_recommendation_id?: any;
  student_card_id?: any;
  student_card?: any;
}

export type AdministrationsFilesCreationAttributes = Optional<AdministrationsFilesAttributes, 'id'>;

export class AdministrationsFiles extends Model<AdministrationsFilesAttributes, AdministrationsFilesCreationAttributes> implements AdministrationsFilesAttributes {
  declare id?: any;
  declare administration_id?: any;
  declare id_card?: any;
  declare diploma_certificate?: any;
  declare family_card?: any;
  declare photo?: any;
  declare transcript?: any;
  declare letter_of_recommendation?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare id_card_id?: any;
  declare diploma_certificate_id?: any;
  declare family_card_id?: any;
  declare photo_id?: any;
  declare transcript_id?: any;
  declare letter_of_recommendation_id?: any;
  declare student_card_id?: any;
  declare student_card?: any;

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
