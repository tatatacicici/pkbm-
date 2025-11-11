import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayPairsAttributes {
  id?: any;
  uuid?: any;
  user_invitor?: any;
  user_invitee?: any;
  accepted?: any;
  roleplay_id?: any;
  video_link?: any;
  invitor_input?: any;
  invitee_input?: any;
  score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplayPairsCreationAttributes = Optional<RoleplayPairsAttributes, 'id'>;

export class RoleplayPairs extends Model<RoleplayPairsAttributes, RoleplayPairsCreationAttributes> implements RoleplayPairsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare user_invitor?: any;
  declare user_invitee?: any;
  declare accepted?: any;
  declare roleplay_id?: any;
  declare video_link?: any;
  declare invitor_input?: any;
  declare invitee_input?: any;
  declare score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplayPairs {
    RoleplayPairs.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        user_invitor: { type: DataTypes.UUID, allowNull: false },
        user_invitee: { type: DataTypes.UUID, allowNull: false },
        accepted: { type: DataTypes.BOOLEAN },
        roleplay_id: { type: DataTypes.UUID, allowNull: false },
        video_link: { type: DataTypes.STRING, allowNull: true },
        invitor_input: { type: DataTypes.TEXT, allowNull: true },
        invitee_input: { type: DataTypes.TEXT, allowNull: true },
        score: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplay_pairs',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplayPairs;
  }
}
