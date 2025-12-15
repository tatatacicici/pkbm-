import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CertificatesAttributes {
  id?: string;
  studentId: string;
  subjectId?: string;
  eventId?: string;
  type?: string;
  idCertificate: string;
  file?: string;
  link?: string;
  thumbnail?: string;
  thumbnailLink?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CertificatesCreationAttributes = Optional<CertificatesAttributes, 'id' | 'subjectId' | 'eventId' | 'type' | 'file' | 'link' | 'thumbnail' | 'thumbnailLink' | 'deletedAt'>;

export class Certificates extends Model<CertificatesAttributes, CertificatesCreationAttributes> implements CertificatesAttributes {
  declare id?: string;
  declare studentId: string;
  declare subjectId?: string;
  declare eventId?: string;
  declare type?: string;
  declare idCertificate: string;
  declare file?: string;
  declare link?: string;
  declare thumbnail?: string;
  declare thumbnailLink?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Certificates {
    Certificates.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: true,
            field: 'subject_id'
        },
        eventId: { type: DataTypes.UUID, allowNull: true,
            field: 'event_id'
        },
        type: { type: DataTypes.STRING, allowNull: true,
            field: 'type'
        },
        idCertificate: { type: DataTypes.STRING, allowNull: false,
            field: 'id_certificate'
        },
        file: { type: DataTypes.STRING, allowNull: true,
            field: 'file'
        },
        link: { type: DataTypes.STRING, allowNull: true,
            field: 'link'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: true,
            field: 'thumbnail'
        },
        thumbnailLink: { type: DataTypes.STRING, allowNull: true,
            field: 'thumbnail_link'
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
        tableName: 'certificates',
        timestamps: true,
        underscored: false,
      }
    );
    return Certificates;
  }
}
