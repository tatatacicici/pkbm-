import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdministrationsFilesAttributes {
  id: string;
  administrationId: string;
  idCard?: string;
  diplomaCertificate?: string;
  familyCard?: string;
  photo?: string;
  transcript?: string;
  letterOfRecommendation?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  idCardId?: number;
  diplomaCertificateId?: number;
  familyCardId?: number;
  photoId?: number;
  transcriptId?: number;
  letterOfRecommendationId?: number;
  studentCardId?: number;
  studentCard?: string;
}

export type AdministrationsFilesPk = "id";
export type AdministrationsFilesId = AdministrationsFiles[AdministrationsFilesPk];
export type AdministrationsFilesOptionalAttributes = "idCard" | "diplomaCertificate" | "familyCard" | "photo" | "transcript" | "letterOfRecommendation" | "deletedAt" | "idCardId" | "diplomaCertificateId" | "familyCardId" | "photoId" | "transcriptId" | "letterOfRecommendationId" | "studentCardId" | "studentCard";
export type AdministrationsFilesCreationAttributes = Optional<AdministrationsFilesAttributes, AdministrationsFilesOptionalAttributes>;

export class AdministrationsFiles extends Model<AdministrationsFilesAttributes, AdministrationsFilesCreationAttributes> implements AdministrationsFilesAttributes {
  id!: string;
  administrationId!: string;
  idCard?: string;
  diplomaCertificate?: string;
  familyCard?: string;
  photo?: string;
  transcript?: string;
  letterOfRecommendation?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  idCardId?: number;
  diplomaCertificateId?: number;
  familyCardId?: number;
  photoId?: number;
  transcriptId?: number;
  letterOfRecommendationId?: number;
  studentCardId?: number;
  studentCard?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdministrationsFiles {
    return AdministrationsFiles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    administrationId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'administration_id'
    },
    idCard: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'id_card'
    },
    diplomaCertificate: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'diploma_certificate'
    },
    familyCard: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'family_card'
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transcript: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    letterOfRecommendation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'letter_of_recommendation'
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
    },
    idCardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_card_id'
    },
    diplomaCertificateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'diploma_certificate_id'
    },
    familyCardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'family_card_id'
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'photo_id'
    },
    transcriptId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'transcript_id'
    },
    letterOfRecommendationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'letter_of_recommendation_id'
    },
    studentCardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'student_card_id'
    },
    studentCard: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'student_card'
    }
  }, {
    sequelize,
    tableName: 'administrations_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "administrations_files_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
