import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSessionsPartnersAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessmentSessionId: number;
  studentId?: string;
  partnerId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsPartnersPk = "pk";
export type AssessmentsSessionsPartnersId = AssessmentsSessionsPartners[AssessmentsSessionsPartnersPk];
export type AssessmentsSessionsPartnersOptionalAttributes = "pk" | "id" | "studentId" | "partnerId" | "deletedAt";
export type AssessmentsSessionsPartnersCreationAttributes = Optional<AssessmentsSessionsPartnersAttributes, AssessmentsSessionsPartnersOptionalAttributes>;

export class AssessmentsSessionsPartners extends Model<AssessmentsSessionsPartnersAttributes, AssessmentsSessionsPartnersCreationAttributes> implements AssessmentsSessionsPartnersAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  assessmentSessionId!: number;
  studentId?: string;
  partnerId?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSessionsPartners {
    return AssessmentsSessionsPartners.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "assessments_sessions_partners_id_key99"
    },
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_id'
    },
    assessmentSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_session_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'student_id'
    },
    partnerId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'partner_id'
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
    tableName: 'assessments_sessions_partners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_sessions_partners_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key10",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key100",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key101",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key102",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key103",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key104",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key105",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key106",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key107",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key108",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key109",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key11",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key110",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key111",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key112",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key113",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key114",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key115",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key116",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key117",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key118",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key119",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key12",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key120",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key121",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key122",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key123",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key124",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key125",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key126",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key127",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key128",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key129",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key13",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key130",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key131",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key132",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key133",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key134",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key135",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key136",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key137",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key138",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key139",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key14",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key140",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key141",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key142",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key143",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key144",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key145",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key146",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key147",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key148",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key149",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key15",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key150",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key151",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key152",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key153",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key154",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key155",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key156",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key157",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key158",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key159",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key16",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key160",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key161",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key162",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key163",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key164",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key165",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key166",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key167",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key168",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key169",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key17",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key170",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key171",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key172",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key173",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key174",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key175",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key176",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key177",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key178",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key179",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key18",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key180",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key181",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key182",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key183",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key184",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key185",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key186",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key187",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key188",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key189",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key19",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key190",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key191",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key192",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key193",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key194",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key195",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key196",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key197",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key198",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key199",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key20",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key200",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key201",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key202",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key21",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key22",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key23",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key24",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key25",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key26",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key27",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key28",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key29",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key3",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key30",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key31",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key32",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key33",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key34",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key35",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key36",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key37",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key38",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key39",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key40",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key41",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key42",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key43",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key44",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key45",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key46",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key47",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key48",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key49",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key50",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key51",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key52",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key53",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key54",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key55",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key56",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key57",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key58",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key59",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key60",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key61",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key62",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key63",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key64",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key65",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key66",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key67",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key68",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key69",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key7",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key70",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key71",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key72",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key73",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key74",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key75",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key76",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key77",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key78",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key79",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key80",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key81",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key82",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key83",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key84",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key85",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key86",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key87",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key88",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key89",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key90",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key91",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key92",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key93",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key94",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key95",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key96",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key97",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key98",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_id_key99",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assessments_sessions_partners_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
