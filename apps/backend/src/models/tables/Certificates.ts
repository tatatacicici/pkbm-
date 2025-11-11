import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CertificatesAttributes {
  id?: string;
  student_id: string;
  subject_id?: string;
  event_id?: string;
  type?: string;
  id_certificate: string;
  file?: string;
  link?: string;
  thumbnail?: string;
  thumbnail_link?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CertificatesCreationAttributes = Optional<CertificatesAttributes, 'id' | 'subject_id' | 'event_id' | 'type' | 'file' | 'link' | 'thumbnail' | 'thumbnail_link' | 'deleted_at'>;

export class Certificates extends Model<CertificatesAttributes, CertificatesCreationAttributes> implements CertificatesAttributes {
  declare id?: string;
  declare student_id: string;
  declare subject_id?: string;
  declare event_id?: string;
  declare type?: string;
  declare id_certificate: string;
  declare file?: string;
  declare link?: string;
  declare thumbnail?: string;
  declare thumbnail_link?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Certificates {
    Certificates.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: true },
        event_id: { type: DataTypes.UUID, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: true },
        id_certificate: { type: DataTypes.STRING, allowNull: false },
        file: { type: DataTypes.STRING, allowNull: true },
        link: { type: DataTypes.STRING, allowNull: true },
        thumbnail: { type: DataTypes.STRING, allowNull: true },
        thumbnail_link: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
