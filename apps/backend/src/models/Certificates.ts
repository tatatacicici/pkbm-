import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CertificatesAttributes {
  id: string;
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

export type CertificatesPk = "id";
export type CertificatesId = Certificates[CertificatesPk];
export type CertificatesOptionalAttributes = "subjectId" | "eventId" | "type" | "file" | "link" | "thumbnail" | "thumbnailLink" | "deletedAt";
export type CertificatesCreationAttributes = Optional<CertificatesAttributes, CertificatesOptionalAttributes>;

export class Certificates extends Model<CertificatesAttributes, CertificatesCreationAttributes> implements CertificatesAttributes {
  id!: string;
  studentId!: string;
  subjectId?: string;
  eventId?: string;
  type?: string;
  idCertificate!: string;
  file?: string;
  link?: string;
  thumbnail?: string;
  thumbnailLink?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Certificates {
    return Certificates.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'subject_id'
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'event_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idCertificate: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'id_certificate'
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnailLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'thumbnail_link'
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
    }
  }, {
    sequelize,
    tableName: 'certificates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "certificates_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
