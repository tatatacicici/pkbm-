import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CertificatesAttributes {
  id?: any;
  student_id?: any;
  subject_id?: any;
  event_id?: any;
  type?: any;
  id_certificate?: any;
  file?: any;
  link?: any;
  thumbnail?: any;
  thumbnail_link?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CertificatesCreationAttributes = Optional<CertificatesAttributes, 'id'>;

export class Certificates extends Model<CertificatesAttributes, CertificatesCreationAttributes> implements CertificatesAttributes {
  declare id?: any;
  declare student_id?: any;
  declare subject_id?: any;
  declare event_id?: any;
  declare type?: any;
  declare id_certificate?: any;
  declare file?: any;
  declare link?: any;
  declare thumbnail?: any;
  declare thumbnail_link?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
