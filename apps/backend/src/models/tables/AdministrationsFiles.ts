import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFilesAttributes {
  id?: string;
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

export type AdministrationsFilesCreationAttributes = Optional<AdministrationsFilesAttributes, 'id' | 'idCard' | 'diplomaCertificate' | 'familyCard' | 'photo' | 'transcript' | 'letterOfRecommendation' | 'deletedAt' | 'idCardId' | 'diplomaCertificateId' | 'familyCardId' | 'photoId' | 'transcriptId' | 'letterOfRecommendationId' | 'studentCardId' | 'studentCard'>;

export class AdministrationsFiles extends Model<AdministrationsFilesAttributes, AdministrationsFilesCreationAttributes> implements AdministrationsFilesAttributes {
  declare id?: string;
  declare administrationId: string;
  declare idCard?: string;
  declare diplomaCertificate?: string;
  declare familyCard?: string;
  declare photo?: string;
  declare transcript?: string;
  declare letterOfRecommendation?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare idCardId?: number;
  declare diplomaCertificateId?: number;
  declare familyCardId?: number;
  declare photoId?: number;
  declare transcriptId?: number;
  declare letterOfRecommendationId?: number;
  declare studentCardId?: number;
  declare studentCard?: string;

  public static initModel(sequelize: Sequelize): typeof AdministrationsFiles {
    AdministrationsFiles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        administrationId: { type: DataTypes.UUID, allowNull: false,
            field: 'administration_id'
        },
        idCard: { type: DataTypes.TEXT, allowNull: true,
            field: 'id_card'
        },
        diplomaCertificate: { type: DataTypes.TEXT, allowNull: true,
            field: 'diploma_certificate'
        },
        familyCard: { type: DataTypes.TEXT, allowNull: true,
            field: 'family_card'
        },
        photo: { type: DataTypes.TEXT, allowNull: true,
            field: 'photo'
        },
        transcript: { type: DataTypes.TEXT, allowNull: true,
            field: 'transcript'
        },
        letterOfRecommendation: { type: DataTypes.TEXT, allowNull: true,
            field: 'letter_of_recommendation'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        idCardId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'id_card_id'
        },
        diplomaCertificateId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'diploma_certificate_id'
        },
        familyCardId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'family_card_id'
        },
        photoId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'photo_id'
        },
        transcriptId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'transcript_id'
        },
        letterOfRecommendationId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'letter_of_recommendation_id'
        },
        studentCardId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'student_card_id'
        },
        studentCard: { type: DataTypes.TEXT, allowNull: true,
            field: 'student_card'
        }
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
