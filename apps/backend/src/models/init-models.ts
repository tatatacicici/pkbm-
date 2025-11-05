import type { Sequelize } from "sequelize";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { Activities as _Activities } from "./Activities";
import type { ActivitiesAttributes, ActivitiesCreationAttributes } from "./Activities";
import { AdminAttendence as _AdminAttendence } from "./AdminAttendence";
import type { AdminAttendenceAttributes, AdminAttendenceCreationAttributes } from "./AdminAttendence";
import { AdminPanelLogs as _AdminPanelLogs } from "./AdminPanelLogs";
import type { AdminPanelLogsAttributes, AdminPanelLogsCreationAttributes } from "./AdminPanelLogs";
import { AdminReflection as _AdminReflection } from "./AdminReflection";
import type { AdminReflectionAttributes, AdminReflectionCreationAttributes } from "./AdminReflection";
import { Administrations as _Administrations } from "./Administrations";
import type { AdministrationsAttributes, AdministrationsCreationAttributes } from "./Administrations";
import { AdministrationsBiodatas as _AdministrationsBiodatas } from "./AdministrationsBiodatas";
import type { AdministrationsBiodatasAttributes, AdministrationsBiodatasCreationAttributes } from "./AdministrationsBiodatas";
import { AdministrationsFamilials as _AdministrationsFamilials } from "./AdministrationsFamilials";
import type { AdministrationsFamilialsAttributes, AdministrationsFamilialsCreationAttributes } from "./AdministrationsFamilials";
import { AdministrationsFiles as _AdministrationsFiles } from "./AdministrationsFiles";
import type { AdministrationsFilesAttributes, AdministrationsFilesCreationAttributes } from "./AdministrationsFiles";
import { AnalyticVisits as _AnalyticVisits } from "./AnalyticVisits";
import type { AnalyticVisitsAttributes, AnalyticVisitsCreationAttributes } from "./AnalyticVisits";
import { ArticleFavorites as _ArticleFavorites } from "./ArticleFavorites";
import type { ArticleFavoritesAttributes, ArticleFavoritesCreationAttributes } from "./ArticleFavorites";
import { ArticleLikes as _ArticleLikes } from "./ArticleLikes";
import type { ArticleLikesAttributes, ArticleLikesCreationAttributes } from "./ArticleLikes";
import { Articles as _Articles } from "./Articles";
import type { ArticlesAttributes, ArticlesCreationAttributes } from "./Articles";
import { ArticlesCategories as _ArticlesCategories } from "./ArticlesCategories";
import type { ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes } from "./ArticlesCategories";
import { ArticlesFavorites as _ArticlesFavorites } from "./ArticlesFavorites";
import type { ArticlesFavoritesAttributes, ArticlesFavoritesCreationAttributes } from "./ArticlesFavorites";
import { ArticlesTags as _ArticlesTags } from "./ArticlesTags";
import type { ArticlesTagsAttributes, ArticlesTagsCreationAttributes } from "./ArticlesTags";
import { AvailabilitySchedules as _AvailabilitySchedules } from "./AvailabilitySchedules";
import type { AvailabilitySchedulesAttributes, AvailabilitySchedulesCreationAttributes } from "./AvailabilitySchedules";
import { Banner as _Banner } from "./Banner";
import type { BannerAttributes, BannerCreationAttributes } from "./Banner";
import { BootcampTopics as _BootcampTopics } from "./BootcampTopics";
import type { BootcampTopicsAttributes, BootcampTopicsCreationAttributes } from "./BootcampTopics";
import { Certificates as _Certificates } from "./Certificates";
import type { CertificatesAttributes, CertificatesCreationAttributes } from "./Certificates";
import { ChatsConversations as _ChatsConversations } from "./ChatsConversations";
import type { ChatsConversationsAttributes, ChatsConversationsCreationAttributes } from "./ChatsConversations";
import { ChatsConversationsParticipants as _ChatsConversationsParticipants } from "./ChatsConversationsParticipants";
import type { ChatsConversationsParticipantsAttributes, ChatsConversationsParticipantsCreationAttributes } from "./ChatsConversationsParticipants";
import { ChatsMessages as _ChatsMessages } from "./ChatsMessages";
import type { ChatsMessagesAttributes, ChatsMessagesCreationAttributes } from "./ChatsMessages";
import { ChatsRooms as _ChatsRooms } from "./ChatsRooms";
import type { ChatsRoomsAttributes, ChatsRoomsCreationAttributes } from "./ChatsRooms";
import { ChatsRoomsMembers as _ChatsRoomsMembers } from "./ChatsRoomsMembers";
import type { ChatsRoomsMembersAttributes, ChatsRoomsMembersCreationAttributes } from "./ChatsRoomsMembers";
import { ChatsRoomsMessages as _ChatsRoomsMessages } from "./ChatsRoomsMessages";
import type { ChatsRoomsMessagesAttributes, ChatsRoomsMessagesCreationAttributes } from "./ChatsRoomsMessages";
import { Companies as _Companies } from "./Companies";
import type { CompaniesAttributes, CompaniesCreationAttributes } from "./Companies";
import { CompaniesDepartments as _CompaniesDepartments } from "./CompaniesDepartments";
import type { CompaniesDepartmentsAttributes, CompaniesDepartmentsCreationAttributes } from "./CompaniesDepartments";
import { CompaniesEmployees as _CompaniesEmployees } from "./CompaniesEmployees";
import type { CompaniesEmployeesAttributes, CompaniesEmployeesCreationAttributes } from "./CompaniesEmployees";
import { CompaniesEmployeesRoles as _CompaniesEmployeesRoles } from "./CompaniesEmployeesRoles";
import type { CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesCreationAttributes } from "./CompaniesEmployeesRoles";
import { ConsultationRoomMessages as _ConsultationRoomMessages } from "./ConsultationRoomMessages";
import type { ConsultationRoomMessagesAttributes, ConsultationRoomMessagesCreationAttributes } from "./ConsultationRoomMessages";
import { ConsultationRooms as _ConsultationRooms } from "./ConsultationRooms";
import type { ConsultationRoomsAttributes, ConsultationRoomsCreationAttributes } from "./ConsultationRooms";
import { ConsultationTypes as _ConsultationTypes } from "./ConsultationTypes";
import type { ConsultationTypesAttributes, ConsultationTypesCreationAttributes } from "./ConsultationTypes";
import { Cycles as _Cycles } from "./Cycles";
import type { CyclesAttributes, CyclesCreationAttributes } from "./Cycles";
import { Dictionarys as _Dictionarys } from "./Dictionarys";
import type { DictionarysAttributes, DictionarysCreationAttributes } from "./Dictionarys";
import { DiscussionForumComments as _DiscussionForumComments } from "./DiscussionForumComments";
import type { DiscussionForumCommentsAttributes, DiscussionForumCommentsCreationAttributes } from "./DiscussionForumComments";
import { DiscussionForumReplies as _DiscussionForumReplies } from "./DiscussionForumReplies";
import type { DiscussionForumRepliesAttributes, DiscussionForumRepliesCreationAttributes } from "./DiscussionForumReplies";
import { DiscussionForums as _DiscussionForums } from "./DiscussionForums";
import type { DiscussionForumsAttributes, DiscussionForumsCreationAttributes } from "./DiscussionForums";
import { DiscussionLikes as _DiscussionLikes } from "./DiscussionLikes";
import type { DiscussionLikesAttributes, DiscussionLikesCreationAttributes } from "./DiscussionLikes";
import { DiscussionReports as _DiscussionReports } from "./DiscussionReports";
import type { DiscussionReportsAttributes, DiscussionReportsCreationAttributes } from "./DiscussionReports";
import { DonationProofs as _DonationProofs } from "./DonationProofs";
import type { DonationProofsAttributes, DonationProofsCreationAttributes } from "./DonationProofs";
import { ErrorLogs as _ErrorLogs } from "./ErrorLogs";
import type { ErrorLogsAttributes, ErrorLogsCreationAttributes } from "./ErrorLogs";
import { EventParticipants as _EventParticipants } from "./EventParticipants";
import type { EventParticipantsAttributes, EventParticipantsCreationAttributes } from "./EventParticipants";
import { Events as _Events } from "./Events";
import type { EventsAttributes, EventsCreationAttributes } from "./Events";
import { EventsParticipants as _EventsParticipants } from "./EventsParticipants";
import type { EventsParticipantsAttributes, EventsParticipantsCreationAttributes } from "./EventsParticipants";
import { GuidesBooks as _GuidesBooks } from "./GuidesBooks";
import type { GuidesBooksAttributes, GuidesBooksCreationAttributes } from "./GuidesBooks";
import { GuidesDictionaries as _GuidesDictionaries } from "./GuidesDictionaries";
import type { GuidesDictionariesAttributes, GuidesDictionariesCreationAttributes } from "./GuidesDictionaries";
import { GuidesFrequentlyAskedQuestions as _GuidesFrequentlyAskedQuestions } from "./GuidesFrequentlyAskedQuestions";
import type { GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsCreationAttributes } from "./GuidesFrequentlyAskedQuestions";
import { GuidesVideos as _GuidesVideos } from "./GuidesVideos";
import type { GuidesVideosAttributes, GuidesVideosCreationAttributes } from "./GuidesVideos";
import { InboxMessages as _InboxMessages } from "./InboxMessages";
import type { InboxMessagesAttributes, InboxMessagesCreationAttributes } from "./InboxMessages";
import { JobApplications as _JobApplications } from "./JobApplications";
import type { JobApplicationsAttributes, JobApplicationsCreationAttributes } from "./JobApplications";
import { Jobs as _Jobs } from "./Jobs";
import type { JobsAttributes, JobsCreationAttributes } from "./Jobs";
import { LeaderboardHistories as _LeaderboardHistories } from "./LeaderboardHistories";
import type { LeaderboardHistoriesAttributes, LeaderboardHistoriesCreationAttributes } from "./LeaderboardHistories";
import { Meetings as _Meetings } from "./Meetings";
import type { MeetingsAttributes, MeetingsCreationAttributes } from "./Meetings";
import { Notifications as _Notifications } from "./Notifications";
import type { NotificationsAttributes, NotificationsCreationAttributes } from "./Notifications";
import { NotificationsMessages as _NotificationsMessages } from "./NotificationsMessages";
import type { NotificationsMessagesAttributes, NotificationsMessagesCreationAttributes } from "./NotificationsMessages";
import { NotificationsTemplates as _NotificationsTemplates } from "./NotificationsTemplates";
import type { NotificationsTemplatesAttributes, NotificationsTemplatesCreationAttributes } from "./NotificationsTemplates";
import { Otps as _Otps } from "./Otps";
import type { OtpsAttributes, OtpsCreationAttributes } from "./Otps";
import { Partners as _Partners } from "./Partners";
import type { PartnersAttributes, PartnersCreationAttributes } from "./Partners";
import { PartnersProposals as _PartnersProposals } from "./PartnersProposals";
import type { PartnersProposalsAttributes, PartnersProposalsCreationAttributes } from "./PartnersProposals";
import { PaymentTransactions as _PaymentTransactions } from "./PaymentTransactions";
import type { PaymentTransactionsAttributes, PaymentTransactionsCreationAttributes } from "./PaymentTransactions";
import { PaymentTrasactionItems as _PaymentTrasactionItems } from "./PaymentTrasactionItems";
import type { PaymentTrasactionItemsAttributes, PaymentTrasactionItemsCreationAttributes } from "./PaymentTrasactionItems";
import { PositionSkills as _PositionSkills } from "./PositionSkills";
import type { PositionSkillsAttributes, PositionSkillsCreationAttributes } from "./PositionSkills";
import { Positions as _Positions } from "./Positions";
import type { PositionsAttributes, PositionsCreationAttributes } from "./Positions";
import { PositionsSkills as _PositionsSkills } from "./PositionsSkills";
import type { PositionsSkillsAttributes, PositionsSkillsCreationAttributes } from "./PositionsSkills";
import { ProgramPositionSkills as _ProgramPositionSkills } from "./ProgramPositionSkills";
import type { ProgramPositionSkillsAttributes, ProgramPositionSkillsCreationAttributes } from "./ProgramPositionSkills";
import { ProgramPositions as _ProgramPositions } from "./ProgramPositions";
import type { ProgramPositionsAttributes, ProgramPositionsCreationAttributes } from "./ProgramPositions";
import { ProgramsPositionSkills as _ProgramsPositionSkills } from "./ProgramsPositionSkills";
import type { ProgramsPositionSkillsAttributes, ProgramsPositionSkillsCreationAttributes } from "./ProgramsPositionSkills";
import { ProgressQuestionAnswers as _ProgressQuestionAnswers } from "./ProgressQuestionAnswers";
import type { ProgressQuestionAnswersAttributes, ProgressQuestionAnswersCreationAttributes } from "./ProgressQuestionAnswers";
import { Quizzes as _Quizzes } from "./Quizzes";
import type { QuizzesAttributes, QuizzesCreationAttributes } from "./Quizzes";
import { QuizzesAnswers as _QuizzesAnswers } from "./QuizzesAnswers";
import type { QuizzesAnswersAttributes, QuizzesAnswersCreationAttributes } from "./QuizzesAnswers";
import { QuizzesQuestions as _QuizzesQuestions } from "./QuizzesQuestions";
import type { QuizzesQuestionsAttributes, QuizzesQuestionsCreationAttributes } from "./QuizzesQuestions";
import { RecruitmentAgendas as _RecruitmentAgendas } from "./RecruitmentAgendas";
import type { RecruitmentAgendasAttributes, RecruitmentAgendasCreationAttributes } from "./RecruitmentAgendas";
import { RecruitmentDepartments as _RecruitmentDepartments } from "./RecruitmentDepartments";
import type { RecruitmentDepartmentsAttributes, RecruitmentDepartmentsCreationAttributes } from "./RecruitmentDepartments";
import { RecruitmentParticipants as _RecruitmentParticipants } from "./RecruitmentParticipants";
import type { RecruitmentParticipantsAttributes, RecruitmentParticipantsCreationAttributes } from "./RecruitmentParticipants";
import { RecruitmentSchedules as _RecruitmentSchedules } from "./RecruitmentSchedules";
import type { RecruitmentSchedulesAttributes, RecruitmentSchedulesCreationAttributes } from "./RecruitmentSchedules";
import { Referrals as _Referrals } from "./Referrals";
import type { ReferralsAttributes, ReferralsCreationAttributes } from "./Referrals";
import { ReferralsAccesses as _ReferralsAccesses } from "./ReferralsAccesses";
import type { ReferralsAccessesAttributes, ReferralsAccessesCreationAttributes } from "./ReferralsAccesses";
import { ReferralsRegistrations as _ReferralsRegistrations } from "./ReferralsRegistrations";
import type { ReferralsRegistrationsAttributes, ReferralsRegistrationsCreationAttributes } from "./ReferralsRegistrations";
import { ReportActions as _ReportActions } from "./ReportActions";
import type { ReportActionsAttributes, ReportActionsCreationAttributes } from "./ReportActions";
import { ReportDetails as _ReportDetails } from "./ReportDetails";
import type { ReportDetailsAttributes, ReportDetailsCreationAttributes } from "./ReportDetails";
import { Reports as _Reports } from "./Reports";
import type { ReportsAttributes, ReportsCreationAttributes } from "./Reports";
import { Roleplay as _Roleplay } from "./Roleplay";
import type { RoleplayAttributes, RoleplayCreationAttributes } from "./Roleplay";
import { RoleplayPair as _RoleplayPair } from "./RoleplayPair";
import type { RoleplayPairAttributes, RoleplayPairCreationAttributes } from "./RoleplayPair";
import { RoleplayPairs as _RoleplayPairs } from "./RoleplayPairs";
import type { RoleplayPairsAttributes, RoleplayPairsCreationAttributes } from "./RoleplayPairs";
import { Roleplays as _Roleplays } from "./Roleplays";
import type { RoleplaysAttributes, RoleplaysCreationAttributes } from "./Roleplays";
import { RoleplaysSessions as _RoleplaysSessions } from "./RoleplaysSessions";
import type { RoleplaysSessionsAttributes, RoleplaysSessionsCreationAttributes } from "./RoleplaysSessions";
import { RoleplaysTeams as _RoleplaysTeams } from "./RoleplaysTeams";
import type { RoleplaysTeamsAttributes, RoleplaysTeamsCreationAttributes } from "./RoleplaysTeams";
import { RoleplaysTeamsMembers as _RoleplaysTeamsMembers } from "./RoleplaysTeamsMembers";
import type { RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersCreationAttributes } from "./RoleplaysTeamsMembers";
import { RoleplaysTeamsSchedules as _RoleplaysTeamsSchedules } from "./RoleplaysTeamsSchedules";
import type { RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesCreationAttributes } from "./RoleplaysTeamsSchedules";
import { Roles as _Roles } from "./Roles";
import type { RolesAttributes, RolesCreationAttributes } from "./Roles";
import { SavedPositions as _SavedPositions } from "./SavedPositions";
import type { SavedPositionsAttributes, SavedPositionsCreationAttributes } from "./SavedPositions";
import { ServerAttributes as _ServerAttributes } from "./ServerAttributes";
import type { ServerAttributesAttributes, ServerAttributesCreationAttributes } from "./ServerAttributes";
import { ServerLogs as _ServerLogs } from "./ServerLogs";
import type { ServerLogsAttributes, ServerLogsCreationAttributes } from "./ServerLogs";
import { StoragesFiles as _StoragesFiles } from "./StoragesFiles";
import type { StoragesFilesAttributes, StoragesFilesCreationAttributes } from "./StoragesFiles";
import { StoragesFilesHistories as _StoragesFilesHistories } from "./StoragesFilesHistories";
import type { StoragesFilesHistoriesAttributes, StoragesFilesHistoriesCreationAttributes } from "./StoragesFilesHistories";
import { Surveys as _Surveys } from "./Surveys";
import type { SurveysAttributes, SurveysCreationAttributes } from "./Surveys";
import { SurveysQuestions as _SurveysQuestions } from "./SurveysQuestions";
import type { SurveysQuestionsAttributes, SurveysQuestionsCreationAttributes } from "./SurveysQuestions";
import { SurveysQuestionsAnswers as _SurveysQuestionsAnswers } from "./SurveysQuestionsAnswers";
import type { SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersCreationAttributes } from "./SurveysQuestionsAnswers";
import { SurveysResponses as _SurveysResponses } from "./SurveysResponses";
import type { SurveysResponsesAttributes, SurveysResponsesCreationAttributes } from "./SurveysResponses";
import { SurveysResponsesAnswers as _SurveysResponsesAnswers } from "./SurveysResponsesAnswers";
import type { SurveysResponsesAnswersAttributes, SurveysResponsesAnswersCreationAttributes } from "./SurveysResponsesAnswers";
import { Tags as _Tags } from "./Tags";
import type { TagsAttributes, TagsCreationAttributes } from "./Tags";
import { UserRoles as _UserRoles } from "./UserRoles";
import type { UserRolesAttributes, UserRolesCreationAttributes } from "./UserRoles";
import { UserSessions as _UserSessions } from "./UserSessions";
import type { UserSessionsAttributes, UserSessionsCreationAttributes } from "./UserSessions";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";
import { UsersActives as _UsersActives } from "./UsersActives";
import type { UsersActivesAttributes, UsersActivesCreationAttributes } from "./UsersActives";
import { UsersAdministrations as _UsersAdministrations } from "./UsersAdministrations";
import type { UsersAdministrationsAttributes, UsersAdministrationsCreationAttributes } from "./UsersAdministrations";
import { UsersDelete as _UsersDelete } from "./UsersDelete";
import type { UsersDeleteAttributes, UsersDeleteCreationAttributes } from "./UsersDelete";
import { UsersScreenTimes as _UsersScreenTimes } from "./UsersScreenTimes";
import type { UsersScreenTimesAttributes, UsersScreenTimesCreationAttributes } from "./UsersScreenTimes";
import { UsersSearchHistories as _UsersSearchHistories } from "./UsersSearchHistories";
import type { UsersSearchHistoriesAttributes, UsersSearchHistoriesCreationAttributes } from "./UsersSearchHistories";
import { UsersSocialMedia as _UsersSocialMedia } from "./UsersSocialMedia";
import type { UsersSocialMediaAttributes, UsersSocialMediaCreationAttributes } from "./UsersSocialMedia";
import { UsersSocketConnections as _UsersSocketConnections } from "./UsersSocketConnections";
import type { UsersSocketConnectionsAttributes, UsersSocketConnectionsCreationAttributes } from "./UsersSocketConnections";
import { Videos as _Videos } from "./Videos";
import type { VideosAttributes, VideosCreationAttributes } from "./Videos";
import { WatchedVideoProgress as _WatchedVideoProgress } from "./WatchedVideoProgress";
import type { WatchedVideoProgressAttributes, WatchedVideoProgressCreationAttributes } from "./WatchedVideoProgress";

export {
  _SequelizeMeta as SequelizeMeta,
  _Activities as Activities,
  _AdminAttendence as AdminAttendence,
  _AdminPanelLogs as AdminPanelLogs,
  _AdminReflection as AdminReflection,
  _Administrations as Administrations,
  _AdministrationsBiodatas as AdministrationsBiodatas,
  _AdministrationsFamilials as AdministrationsFamilials,
  _AdministrationsFiles as AdministrationsFiles,
  _AnalyticVisits as AnalyticVisits,
  _ArticleFavorites as ArticleFavorites,
  _ArticleLikes as ArticleLikes,
  _Articles as Articles,
  _ArticlesCategories as ArticlesCategories,
  _ArticlesFavorites as ArticlesFavorites,
  _ArticlesTags as ArticlesTags,
  _AvailabilitySchedules as AvailabilitySchedules,
  _Banner as Banner,
  _BootcampTopics as BootcampTopics,
  _Certificates as Certificates,
  _ChatsConversations as ChatsConversations,
  _ChatsConversationsParticipants as ChatsConversationsParticipants,
  _ChatsMessages as ChatsMessages,
  _ChatsRooms as ChatsRooms,
  _ChatsRoomsMembers as ChatsRoomsMembers,
  _ChatsRoomsMessages as ChatsRoomsMessages,
  _Companies as Companies,
  _CompaniesDepartments as CompaniesDepartments,
  _CompaniesEmployees as CompaniesEmployees,
  _CompaniesEmployeesRoles as CompaniesEmployeesRoles,
  _ConsultationRoomMessages as ConsultationRoomMessages,
  _ConsultationRooms as ConsultationRooms,
  _ConsultationTypes as ConsultationTypes,
  _Cycles as Cycles,
  _Dictionarys as Dictionarys,
  _DiscussionForumComments as DiscussionForumComments,
  _DiscussionForumReplies as DiscussionForumReplies,
  _DiscussionForums as DiscussionForums,
  _DiscussionLikes as DiscussionLikes,
  _DiscussionReports as DiscussionReports,
  _DonationProofs as DonationProofs,
  _ErrorLogs as ErrorLogs,
  _EventParticipants as EventParticipants,
  _Events as Events,
  _EventsParticipants as EventsParticipants,
  _GuidesBooks as GuidesBooks,
  _GuidesDictionaries as GuidesDictionaries,
  _GuidesFrequentlyAskedQuestions as GuidesFrequentlyAskedQuestions,
  _GuidesVideos as GuidesVideos,
  _InboxMessages as InboxMessages,
  _JobApplications as JobApplications,
  _Jobs as Jobs,
  _LeaderboardHistories as LeaderboardHistories,
  _Meetings as Meetings,
  _Notifications as Notifications,
  _NotificationsMessages as NotificationsMessages,
  _NotificationsTemplates as NotificationsTemplates,
  _Otps as Otps,
  _Partners as Partners,
  _PartnersProposals as PartnersProposals,
  _PaymentTransactions as PaymentTransactions,
  _PaymentTrasactionItems as PaymentTrasactionItems,
  _PositionSkills as PositionSkills,
  _Positions as Positions,
  _PositionsSkills as PositionsSkills,
  _ProgramPositionSkills as ProgramPositionSkills,
  _ProgramPositions as ProgramPositions,
  _ProgramsPositionSkills as ProgramsPositionSkills,
  _ProgressQuestionAnswers as ProgressQuestionAnswers,
  _Quizzes as Quizzes,
  _QuizzesAnswers as QuizzesAnswers,
  _QuizzesQuestions as QuizzesQuestions,
  _RecruitmentAgendas as RecruitmentAgendas,
  _RecruitmentDepartments as RecruitmentDepartments,
  _RecruitmentParticipants as RecruitmentParticipants,
  _RecruitmentSchedules as RecruitmentSchedules,
  _Referrals as Referrals,
  _ReferralsAccesses as ReferralsAccesses,
  _ReferralsRegistrations as ReferralsRegistrations,
  _ReportActions as ReportActions,
  _ReportDetails as ReportDetails,
  _Reports as Reports,
  _Roleplay as Roleplay,
  _RoleplayPair as RoleplayPair,
  _RoleplayPairs as RoleplayPairs,
  _Roleplays as Roleplays,
  _RoleplaysSessions as RoleplaysSessions,
  _RoleplaysTeams as RoleplaysTeams,
  _RoleplaysTeamsMembers as RoleplaysTeamsMembers,
  _RoleplaysTeamsSchedules as RoleplaysTeamsSchedules,
  _Roles as Roles,
  _SavedPositions as SavedPositions,
  _ServerAttributes as ServerAttributes,
  _ServerLogs as ServerLogs,
  _StoragesFiles as StoragesFiles,
  _StoragesFilesHistories as StoragesFilesHistories,
  _Surveys as Surveys,
  _SurveysQuestions as SurveysQuestions,
  _SurveysQuestionsAnswers as SurveysQuestionsAnswers,
  _SurveysResponses as SurveysResponses,
  _SurveysResponsesAnswers as SurveysResponsesAnswers,
  _Tags as Tags,
  _UserRoles as UserRoles,
  _UserSessions as UserSessions,
  _Users as Users,
  _UsersActives as UsersActives,
  _UsersAdministrations as UsersAdministrations,
  _UsersDelete as UsersDelete,
  _UsersScreenTimes as UsersScreenTimes,
  _UsersSearchHistories as UsersSearchHistories,
  _UsersSocialMedia as UsersSocialMedia,
  _UsersSocketConnections as UsersSocketConnections,
  _Videos as Videos,
  _WatchedVideoProgress as WatchedVideoProgress,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  ActivitiesAttributes,
  ActivitiesCreationAttributes,
  AdminAttendenceAttributes,
  AdminAttendenceCreationAttributes,
  AdminPanelLogsAttributes,
  AdminPanelLogsCreationAttributes,
  AdminReflectionAttributes,
  AdminReflectionCreationAttributes,
  AdministrationsAttributes,
  AdministrationsCreationAttributes,
  AdministrationsBiodatasAttributes,
  AdministrationsBiodatasCreationAttributes,
  AdministrationsFamilialsAttributes,
  AdministrationsFamilialsCreationAttributes,
  AdministrationsFilesAttributes,
  AdministrationsFilesCreationAttributes,
  AnalyticVisitsAttributes,
  AnalyticVisitsCreationAttributes,
  ArticleFavoritesAttributes,
  ArticleFavoritesCreationAttributes,
  ArticleLikesAttributes,
  ArticleLikesCreationAttributes,
  ArticlesAttributes,
  ArticlesCreationAttributes,
  ArticlesCategoriesAttributes,
  ArticlesCategoriesCreationAttributes,
  ArticlesFavoritesAttributes,
  ArticlesFavoritesCreationAttributes,
  ArticlesTagsAttributes,
  ArticlesTagsCreationAttributes,
  AssessmentCompetencyTestsAttributes,
  AssessmentCompetencyTestsCreationAttributes,
  AssessmentCompetencyTestsSchedulesAttributes,
  AssessmentCompetencyTestsSchedulesCreationAttributes,
  AssessmentsAttributes,
  AssessmentsCreationAttributes,
  AssessmentsAssessorsAttributes,
  AssessmentsAssessorsCreationAttributes,
  AssessmentsAssessorsAvailabilitiesAttributes,
  AssessmentsAssessorsAvailabilitiesCreationAttributes,
  AssessmentsSessionsAttributes,
  AssessmentsSessionsCreationAttributes,
  AssessmentsSessionsPartnersAttributes,
  AssessmentsSessionsPartnersCreationAttributes,
  AssessmentsSessionsRubricsResultsAttributes,
  AssessmentsSessionsRubricsResultsCreationAttributes,
  AssessmentsSessionsSubmissionsAttributes,
  AssessmentsSessionsSubmissionsCreationAttributes,
  AssessmentsSubjectsProgressesAttributes,
  AssessmentsSubjectsProgressesCreationAttributes,
  AssessmentsSubjectsProgressesAnswersAttributes,
  AssessmentsSubjectsProgressesAnswersCreationAttributes,
  AssignmentDocumentsAttributes,
  AssignmentDocumentsCreationAttributes,
  AssignmentFilesAttributes,
  AssignmentFilesCreationAttributes,
  AssignmentsAttributes,
  AssignmentsCreationAttributes,
  AssignmentsAdminAttributes,
  AssignmentsAdminCreationAttributes,
  AvailabilitySchedulesAttributes,
  AvailabilitySchedulesCreationAttributes,
  BannerAttributes,
  BannerCreationAttributes,
  BootcampTopicsAttributes,
  BootcampTopicsCreationAttributes,
  CertificatesAttributes,
  CertificatesCreationAttributes,
  ChatsConversationsAttributes,
  ChatsConversationsCreationAttributes,
  ChatsConversationsParticipantsAttributes,
  ChatsConversationsParticipantsCreationAttributes,
  ChatsMessagesAttributes,
  ChatsMessagesCreationAttributes,
  ChatsRoomsAttributes,
  ChatsRoomsCreationAttributes,
  ChatsRoomsMembersAttributes,
  ChatsRoomsMembersCreationAttributes,
  ChatsRoomsMessagesAttributes,
  ChatsRoomsMessagesCreationAttributes,
  CollegeAcademicCohortsAttributes,
  CollegeAcademicCohortsCreationAttributes,
  CollegeClassEnrollmentsAttributes,
  CollegeClassEnrollmentsCreationAttributes,
  CollegeClassesAttributes,
  CollegeClassesCreationAttributes,
  CollegeProgramOfferingsAttributes,
  CollegeProgramOfferingsCreationAttributes,
  CollegeStudentRegistrationsAttributes,
  CollegeStudentRegistrationsCreationAttributes,
  CompaniesAttributes,
  CompaniesCreationAttributes,
  CompaniesDepartmentsAttributes,
  CompaniesDepartmentsCreationAttributes,
  CompaniesEmployeesAttributes,
  CompaniesEmployeesCreationAttributes,
  CompaniesEmployeesRolesAttributes,
  CompaniesEmployeesRolesCreationAttributes,
  ConsultationRoomMessagesAttributes,
  ConsultationRoomMessagesCreationAttributes,
  ConsultationRoomsAttributes,
  ConsultationRoomsCreationAttributes,
  ConsultationTypesAttributes,
  ConsultationTypesCreationAttributes,
  CreditConvertionRequestsAttributes,
  CreditConvertionRequestsCreationAttributes,
  CreditConvertionRequestsSubjectsAttributes,
  CreditConvertionRequestsSubjectsCreationAttributes,
  CyclesAttributes,
  CyclesCreationAttributes,
  DictionarysAttributes,
  DictionarysCreationAttributes,
  DiscussionForumCommentsAttributes,
  DiscussionForumCommentsCreationAttributes,
  DiscussionForumRepliesAttributes,
  DiscussionForumRepliesCreationAttributes,
  DiscussionForumsAttributes,
  DiscussionForumsCreationAttributes,
  DiscussionLikesAttributes,
  DiscussionLikesCreationAttributes,
  DiscussionReportsAttributes,
  DiscussionReportsCreationAttributes,
  DonationProofsAttributes,
  DonationProofsCreationAttributes,
  DrillSimulationAssessmentsMeetingsAttributes,
  DrillSimulationAssessmentsMeetingsCreationAttributes,
  DrillSimulationAssessmentsSchedulesAttributes,
  DrillSimulationAssessmentsSchedulesCreationAttributes,
  DrillsAttributes,
  DrillsCreationAttributes,
  ErrorLogsAttributes,
  ErrorLogsCreationAttributes,
  EventParticipantsAttributes,
  EventParticipantsCreationAttributes,
  EventsAttributes,
  EventsCreationAttributes,
  EventsParticipantsAttributes,
  EventsParticipantsCreationAttributes,
  FacultiesAttributes,
  FacultiesCreationAttributes,
  GradingRubricsAttributes,
  GradingRubricsCreationAttributes,
  GradingRubricsCriteriaAttributes,
  GradingRubricsCriteriaCreationAttributes,
  GradingRubricsCriteriaDetailsAttributes,
  GradingRubricsCriteriaDetailsCreationAttributes,
  GuidesBooksAttributes,
  GuidesBooksCreationAttributes,
  GuidesDictionariesAttributes,
  GuidesDictionariesCreationAttributes,
  GuidesFrequentlyAskedQuestionsAttributes,
  GuidesFrequentlyAskedQuestionsCreationAttributes,
  GuidesVideosAttributes,
  GuidesVideosCreationAttributes,
  InboxMessagesAttributes,
  InboxMessagesCreationAttributes,
  InternshipStudentMentorsAttributes,
  InternshipStudentMentorsCreationAttributes,
  JobApplicationsAttributes,
  JobApplicationsCreationAttributes,
  JobsAttributes,
  JobsCreationAttributes,
  LeaderboardHistoriesAttributes,
  LeaderboardHistoriesCreationAttributes,
  MajorsAttributes,
  MajorsCreationAttributes,
  MeetingsAttributes,
  MeetingsCreationAttributes,
  MentorsAttributes,
  MentorsCreationAttributes,
  ModulesAttributes,
  ModulesCreationAttributes,
  ModulesAdminAttributes,
  ModulesAdminCreationAttributes,
  ModulesArticlesAttributes,
  ModulesArticlesCreationAttributes,
  ModulesDocumentsAttributes,
  ModulesDocumentsCreationAttributes,
  ModulesJournalsAttributes,
  ModulesJournalsCreationAttributes,
  ModulesVideosAttributes,
  ModulesVideosCreationAttributes,
  NotificationsAttributes,
  NotificationsCreationAttributes,
  NotificationsMessagesAttributes,
  NotificationsMessagesCreationAttributes,
  NotificationsTemplatesAttributes,
  NotificationsTemplatesCreationAttributes,
  OtpsAttributes,
  OtpsCreationAttributes,
  PartnersAttributes,
  PartnersCreationAttributes,
  PartnersProposalsAttributes,
  PartnersProposalsCreationAttributes,
  PaymentTransactionsAttributes,
  PaymentTransactionsCreationAttributes,
  PaymentTrasactionItemsAttributes,
  PaymentTrasactionItemsCreationAttributes,
  PositionSkillsAttributes,
  PositionSkillsCreationAttributes,
  PositionsAttributes,
  PositionsCreationAttributes,
  PositionsSkillsAttributes,
  PositionsSkillsCreationAttributes,
  ProgramPositionSkillsAttributes,
  ProgramPositionSkillsCreationAttributes,
  ProgramPositionsAttributes,
  ProgramPositionsCreationAttributes,
  ProgramsPositionSkillsAttributes,
  ProgramsPositionSkillsCreationAttributes,
  ProgressQuestionAnswersAttributes,
  ProgressQuestionAnswersCreationAttributes,
  QuizzesAttributes,
  QuizzesCreationAttributes,
  QuizzesAnswersAttributes,
  QuizzesAnswersCreationAttributes,
  QuizzesQuestionsAttributes,
  QuizzesQuestionsCreationAttributes,
  RecruitmentAgendasAttributes,
  RecruitmentAgendasCreationAttributes,
  RecruitmentDepartmentsAttributes,
  RecruitmentDepartmentsCreationAttributes,
  RecruitmentParticipantsAttributes,
  RecruitmentParticipantsCreationAttributes,
  RecruitmentSchedulesAttributes,
  RecruitmentSchedulesCreationAttributes,
  ReferralsAttributes,
  ReferralsCreationAttributes,
  ReferralsAccessesAttributes,
  ReferralsAccessesCreationAttributes,
  ReferralsRegistrationsAttributes,
  ReferralsRegistrationsCreationAttributes,
  ReportActionsAttributes,
  ReportActionsCreationAttributes,
  ReportDetailsAttributes,
  ReportDetailsCreationAttributes,
  ReportsAttributes,
  ReportsCreationAttributes,
  RoleplayAttributes,
  RoleplayCreationAttributes,
  RoleplayPairAttributes,
  RoleplayPairCreationAttributes,
  RoleplayPairsAttributes,
  RoleplayPairsCreationAttributes,
  RoleplaysAttributes,
  RoleplaysCreationAttributes,
  RoleplaysSessionsAttributes,
  RoleplaysSessionsCreationAttributes,
  RoleplaysTeamsAttributes,
  RoleplaysTeamsCreationAttributes,
  RoleplaysTeamsMembersAttributes,
  RoleplaysTeamsMembersCreationAttributes,
  RoleplaysTeamsSchedulesAttributes,
  RoleplaysTeamsSchedulesCreationAttributes,
  RolesAttributes,
  RolesCreationAttributes,
  SavedPositionsAttributes,
  SavedPositionsCreationAttributes,
  SemestersAttributes,
  SemestersCreationAttributes,
  ServerAttributesAttributes,
  ServerAttributesCreationAttributes,
  ServerLogsAttributes,
  ServerLogsCreationAttributes,
  SessionsAttributes,
  SessionsCreationAttributes,
  SessionsMentoringsAttributes,
  SessionsMentoringsCreationAttributes,
  SessionsReflectionsAttributes,
  SessionsReflectionsCreationAttributes,
  SessionsReflectionsCommentsAttributes,
  SessionsReflectionsCommentsCreationAttributes,
  SessionsReflectionsCommentsRepliesAttributes,
  SessionsReflectionsCommentsRepliesCreationAttributes,
  SessionsReflectionsLikesAttributes,
  SessionsReflectionsLikesCreationAttributes,
  SessionsTeacherAssessmentAttributes,
  SessionsTeacherAssessmentCreationAttributes,
  SessionsTeacherAssessmentQuestionsAttributes,
  SessionsTeacherAssessmentQuestionsCreationAttributes,
  SessionsTeacherAssessmentQuestionsAnswersAttributes,
  SessionsTeacherAssessmentQuestionsAnswersCreationAttributes,
  SessionsTeacherAssessmentSessionsQuestionsAttributes,
  SessionsTeacherAssessmentSessionsQuestionsCreationAttributes,
  SessionsTeacherAssessmentStudentsAnswersAttributes,
  SessionsTeacherAssessmentStudentsAnswersCreationAttributes,
  SimulationGroupStudentsAttributes,
  SimulationGroupStudentsCreationAttributes,
  SimulationGroupsAttributes,
  SimulationGroupsCreationAttributes,
  SimulationsAttributes,
  SimulationsCreationAttributes,
  StoragesFilesAttributes,
  StoragesFilesCreationAttributes,
  StoragesFilesHistoriesAttributes,
  StoragesFilesHistoriesCreationAttributes,
  StudentEventsAttributes,
  StudentEventsCreationAttributes,
  StudentMajorsAttributes,
  StudentMajorsCreationAttributes,
  StudentProfilesAttributes,
  StudentProfilesCreationAttributes,
  StudentSessionProgressAttributes,
  StudentSessionProgressCreationAttributes,
  StudentSessionsAttributes,
  StudentSessionsCreationAttributes,
  StudentSubjectsAttributes,
  StudentSubjectsCreationAttributes,
  SubjectMajorsAttributes,
  SubjectMajorsCreationAttributes,
  SubjectSessionsAttributes,
  SubjectSessionsCreationAttributes,
  SubjectsAttributes,
  SubjectsCreationAttributes,
  SubjectsOutcomesAttributes,
  SubjectsOutcomesCreationAttributes,
  SubjectsSessionsActivitiesAttributes,
  SubjectsSessionsActivitiesCreationAttributes,
  SubjectsSessionsAssessmentsAttributes,
  SubjectsSessionsAssessmentsCreationAttributes,
  SubjectsSessionsContentOrdersAttributes,
  SubjectsSessionsContentOrdersCreationAttributes,
  SubmissionDocumentsAttributes,
  SubmissionDocumentsCreationAttributes,
  SubmissionsAttributes,
  SubmissionsCreationAttributes,
  SurveysAttributes,
  SurveysCreationAttributes,
  SurveysQuestionsAttributes,
  SurveysQuestionsCreationAttributes,
  SurveysQuestionsAnswersAttributes,
  SurveysQuestionsAnswersCreationAttributes,
  SurveysResponsesAttributes,
  SurveysResponsesCreationAttributes,
  SurveysResponsesAnswersAttributes,
  SurveysResponsesAnswersCreationAttributes,
  TagsAttributes,
  TagsCreationAttributes,
  TeachersRegistrationsAttributes,
  TeachersRegistrationsCreationAttributes,
  TopicsAttributes,
  TopicsCreationAttributes,
  TopicsSubjectsAttributes,
  TopicsSubjectsCreationAttributes,
  UserRolesAttributes,
  UserRolesCreationAttributes,
  UserSessionsAttributes,
  UserSessionsCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
  UsersActivesAttributes,
  UsersActivesCreationAttributes,
  UsersAdministrationsAttributes,
  UsersAdministrationsCreationAttributes,
  UsersDeleteAttributes,
  UsersDeleteCreationAttributes,
  UsersScreenTimesAttributes,
  UsersScreenTimesCreationAttributes,
  UsersSearchHistoriesAttributes,
  UsersSearchHistoriesCreationAttributes,
  UsersSocialMediaAttributes,
  UsersSocialMediaCreationAttributes,
  UsersSocketConnectionsAttributes,
  UsersSocketConnectionsCreationAttributes,
  VideosAttributes,
  VideosCreationAttributes,
  WatchedVideoProgressAttributes,
  WatchedVideoProgressCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const Activities = _Activities.initModel(sequelize);
  const AdminAttendence = _AdminAttendence.initModel(sequelize);
  const AdminPanelLogs = _AdminPanelLogs.initModel(sequelize);
  const AdminReflection = _AdminReflection.initModel(sequelize);
  const Administrations = _Administrations.initModel(sequelize);
  const AdministrationsBiodatas = _AdministrationsBiodatas.initModel(sequelize);
  const AdministrationsFamilials = _AdministrationsFamilials.initModel(sequelize);
  const AdministrationsFiles = _AdministrationsFiles.initModel(sequelize);
  const AnalyticVisits = _AnalyticVisits.initModel(sequelize);
  const ArticleFavorites = _ArticleFavorites.initModel(sequelize);
  const ArticleLikes = _ArticleLikes.initModel(sequelize);
  const Articles = _Articles.initModel(sequelize);
  const ArticlesCategories = _ArticlesCategories.initModel(sequelize);
  const ArticlesFavorites = _ArticlesFavorites.initModel(sequelize);
  const ArticlesTags = _ArticlesTags.initModel(sequelize);
  const AvailabilitySchedules = _AvailabilitySchedules.initModel(sequelize);
  const Banner = _Banner.initModel(sequelize);
  const BootcampTopics = _BootcampTopics.initModel(sequelize);
  const Certificates = _Certificates.initModel(sequelize);
  const ChatsConversations = _ChatsConversations.initModel(sequelize);
  const ChatsConversationsParticipants = _ChatsConversationsParticipants.initModel(sequelize);
  const ChatsMessages = _ChatsMessages.initModel(sequelize);
  const ChatsRooms = _ChatsRooms.initModel(sequelize);
  const ChatsRoomsMembers = _ChatsRoomsMembers.initModel(sequelize);
  const ChatsRoomsMessages = _ChatsRoomsMessages.initModel(sequelize);
  const Companies = _Companies.initModel(sequelize);
  const CompaniesDepartments = _CompaniesDepartments.initModel(sequelize);
  const CompaniesEmployees = _CompaniesEmployees.initModel(sequelize);
  const CompaniesEmployeesRoles = _CompaniesEmployeesRoles.initModel(sequelize);
  const ConsultationRoomMessages = _ConsultationRoomMessages.initModel(sequelize);
  const ConsultationRooms = _ConsultationRooms.initModel(sequelize);
  const ConsultationTypes = _ConsultationTypes.initModel(sequelize);
  const Cycles = _Cycles.initModel(sequelize);
  const Dictionarys = _Dictionarys.initModel(sequelize);
  const DiscussionForumComments = _DiscussionForumComments.initModel(sequelize);
  const DiscussionForumReplies = _DiscussionForumReplies.initModel(sequelize);
  const DiscussionForums = _DiscussionForums.initModel(sequelize);
  const DiscussionLikes = _DiscussionLikes.initModel(sequelize);
  const DiscussionReports = _DiscussionReports.initModel(sequelize);
  const DonationProofs = _DonationProofs.initModel(sequelize);
  const ErrorLogs = _ErrorLogs.initModel(sequelize);
  const EventParticipants = _EventParticipants.initModel(sequelize);
  const Events = _Events.initModel(sequelize);
  const EventsParticipants = _EventsParticipants.initModel(sequelize);
  const GuidesBooks = _GuidesBooks.initModel(sequelize);
  const GuidesDictionaries = _GuidesDictionaries.initModel(sequelize);
  const GuidesFrequentlyAskedQuestions = _GuidesFrequentlyAskedQuestions.initModel(sequelize);
  const GuidesVideos = _GuidesVideos.initModel(sequelize);
  const InboxMessages = _InboxMessages.initModel(sequelize);
  const JobApplications = _JobApplications.initModel(sequelize);
  const Jobs = _Jobs.initModel(sequelize);
  const LeaderboardHistories = _LeaderboardHistories.initModel(sequelize);
  const Meetings = _Meetings.initModel(sequelize);
  const Notifications = _Notifications.initModel(sequelize);
  const NotificationsMessages = _NotificationsMessages.initModel(sequelize);
  const NotificationsTemplates = _NotificationsTemplates.initModel(sequelize);
  const Otps = _Otps.initModel(sequelize);
  const Partners = _Partners.initModel(sequelize);
  const PartnersProposals = _PartnersProposals.initModel(sequelize);
  const PaymentTransactions = _PaymentTransactions.initModel(sequelize);
  const PaymentTrasactionItems = _PaymentTrasactionItems.initModel(sequelize);
  const PositionSkills = _PositionSkills.initModel(sequelize);
  const Positions = _Positions.initModel(sequelize);
  const PositionsSkills = _PositionsSkills.initModel(sequelize);
  const ProgramPositionSkills = _ProgramPositionSkills.initModel(sequelize);
  const ProgramPositions = _ProgramPositions.initModel(sequelize);
  const ProgramsPositionSkills = _ProgramsPositionSkills.initModel(sequelize);
  const ProgressQuestionAnswers = _ProgressQuestionAnswers.initModel(sequelize);
  const Quizzes = _Quizzes.initModel(sequelize);
  const QuizzesAnswers = _QuizzesAnswers.initModel(sequelize);
  const QuizzesQuestions = _QuizzesQuestions.initModel(sequelize);
  const RecruitmentAgendas = _RecruitmentAgendas.initModel(sequelize);
  const RecruitmentDepartments = _RecruitmentDepartments.initModel(sequelize);
  const RecruitmentParticipants = _RecruitmentParticipants.initModel(sequelize);
  const RecruitmentSchedules = _RecruitmentSchedules.initModel(sequelize);
  const Referrals = _Referrals.initModel(sequelize);
  const ReferralsAccesses = _ReferralsAccesses.initModel(sequelize);
  const ReferralsRegistrations = _ReferralsRegistrations.initModel(sequelize);
  const ReportActions = _ReportActions.initModel(sequelize);
  const ReportDetails = _ReportDetails.initModel(sequelize);
  const Reports = _Reports.initModel(sequelize);
  const Roleplay = _Roleplay.initModel(sequelize);
  const RoleplayPair = _RoleplayPair.initModel(sequelize);
  const RoleplayPairs = _RoleplayPairs.initModel(sequelize);
  const Roleplays = _Roleplays.initModel(sequelize);
  const RoleplaysSessions = _RoleplaysSessions.initModel(sequelize);
  const RoleplaysTeams = _RoleplaysTeams.initModel(sequelize);
  const RoleplaysTeamsMembers = _RoleplaysTeamsMembers.initModel(sequelize);
  const RoleplaysTeamsSchedules = _RoleplaysTeamsSchedules.initModel(sequelize);
  const Roles = _Roles.initModel(sequelize);
  const SavedPositions = _SavedPositions.initModel(sequelize);
  const ServerAttributes = _ServerAttributes.initModel(sequelize);
  const ServerLogs = _ServerLogs.initModel(sequelize);
  const StoragesFiles = _StoragesFiles.initModel(sequelize);
  const StoragesFilesHistories = _StoragesFilesHistories.initModel(sequelize);
  const Surveys = _Surveys.initModel(sequelize);
  const SurveysQuestions = _SurveysQuestions.initModel(sequelize);
  const SurveysQuestionsAnswers = _SurveysQuestionsAnswers.initModel(sequelize);
  const SurveysResponses = _SurveysResponses.initModel(sequelize);
  const SurveysResponsesAnswers = _SurveysResponsesAnswers.initModel(sequelize);
  const Tags = _Tags.initModel(sequelize);
  const UserRoles = _UserRoles.initModel(sequelize);
  const UserSessions = _UserSessions.initModel(sequelize);
  const Users = _Users.initModel(sequelize);
  const UsersActives = _UsersActives.initModel(sequelize);
  const UsersAdministrations = _UsersAdministrations.initModel(sequelize);
  const UsersDelete = _UsersDelete.initModel(sequelize);
  const UsersScreenTimes = _UsersScreenTimes.initModel(sequelize);
  const UsersSearchHistories = _UsersSearchHistories.initModel(sequelize);
  const UsersSocialMedia = _UsersSocialMedia.initModel(sequelize);
  const UsersSocketConnections = _UsersSocketConnections.initModel(sequelize);
  const Videos = _Videos.initModel(sequelize);
  const WatchedVideoProgress = _WatchedVideoProgress.initModel(sequelize);


  return {
    SequelizeMeta: SequelizeMeta,
    Activities: Activities,
    AdminAttendence: AdminAttendence,
    AdminPanelLogs: AdminPanelLogs,
    AdminReflection: AdminReflection,
    Administrations: Administrations,
    AdministrationsBiodatas: AdministrationsBiodatas,
    AdministrationsFamilials: AdministrationsFamilials,
    AdministrationsFiles: AdministrationsFiles,
    AnalyticVisits: AnalyticVisits,
    ArticleFavorites: ArticleFavorites,
    ArticleLikes: ArticleLikes,
    Articles: Articles,
    ArticlesCategories: ArticlesCategories,
    ArticlesFavorites: ArticlesFavorites,
    ArticlesTags: ArticlesTags,
    AssessmentCompetencyTests: AssessmentCompetencyTests,
    AssessmentCompetencyTestsSchedules: AssessmentCompetencyTestsSchedules,
    Assessments: Assessments,
    AssessmentsAssessors: AssessmentsAssessors,
    AssessmentsAssessorsAvailabilities: AssessmentsAssessorsAvailabilities,
    AssessmentsSessions: AssessmentsSessions,
    AssessmentsSessionsPartners: AssessmentsSessionsPartners,
    AssessmentsSessionsRubricsResults: AssessmentsSessionsRubricsResults,
    AssessmentsSessionsSubmissions: AssessmentsSessionsSubmissions,
    AssessmentsSubjectsProgresses: AssessmentsSubjectsProgresses,
    AssessmentsSubjectsProgressesAnswers: AssessmentsSubjectsProgressesAnswers,
    AssignmentDocuments: AssignmentDocuments,
    AssignmentFiles: AssignmentFiles,
    Assignments: Assignments,
    AssignmentsAdmin: AssignmentsAdmin,
    AvailabilitySchedules: AvailabilitySchedules,
    Banner: Banner,
    BootcampTopics: BootcampTopics,
    Certificates: Certificates,
    ChatsConversations: ChatsConversations,
    ChatsConversationsParticipants: ChatsConversationsParticipants,
    ChatsMessages: ChatsMessages,
    ChatsRooms: ChatsRooms,
    ChatsRoomsMembers: ChatsRoomsMembers,
    ChatsRoomsMessages: ChatsRoomsMessages,
    CollegeAcademicCohorts: CollegeAcademicCohorts,
    CollegeClassEnrollments: CollegeClassEnrollments,
    CollegeClasses: CollegeClasses,
    CollegeProgramOfferings: CollegeProgramOfferings,
    CollegeStudentRegistrations: CollegeStudentRegistrations,
    Companies: Companies,
    CompaniesDepartments: CompaniesDepartments,
    CompaniesEmployees: CompaniesEmployees,
    CompaniesEmployeesRoles: CompaniesEmployeesRoles,
    ConsultationRoomMessages: ConsultationRoomMessages,
    ConsultationRooms: ConsultationRooms,
    ConsultationTypes: ConsultationTypes,
    CreditConvertionRequests: CreditConvertionRequests,
    CreditConvertionRequestsSubjects: CreditConvertionRequestsSubjects,
    Cycles: Cycles,
    Dictionarys: Dictionarys,
    DiscussionForumComments: DiscussionForumComments,
    DiscussionForumReplies: DiscussionForumReplies,
    DiscussionForums: DiscussionForums,
    DiscussionLikes: DiscussionLikes,
    DiscussionReports: DiscussionReports,
    DonationProofs: DonationProofs,
    DrillSimulationAssessmentsMeetings: DrillSimulationAssessmentsMeetings,
    DrillSimulationAssessmentsSchedules: DrillSimulationAssessmentsSchedules,
    Drills: Drills,
    ErrorLogs: ErrorLogs,
    EventParticipants: EventParticipants,
    Events: Events,
    EventsParticipants: EventsParticipants,
    Faculties: Faculties,
    GradingRubrics: GradingRubrics,
    GradingRubricsCriteria: GradingRubricsCriteria,
    GradingRubricsCriteriaDetails: GradingRubricsCriteriaDetails,
    GuidesBooks: GuidesBooks,
    GuidesDictionaries: GuidesDictionaries,
    GuidesFrequentlyAskedQuestions: GuidesFrequentlyAskedQuestions,
    GuidesVideos: GuidesVideos,
    InboxMessages: InboxMessages,
    InternshipStudentMentors: InternshipStudentMentors,
    JobApplications: JobApplications,
    Jobs: Jobs,
    LeaderboardHistories: LeaderboardHistories,
    Majors: Majors,
    Meetings: Meetings,
    Mentors: Mentors,
    Modules: Modules,
    ModulesAdmin: ModulesAdmin,
    ModulesArticles: ModulesArticles,
    ModulesDocuments: ModulesDocuments,
    ModulesJournals: ModulesJournals,
    ModulesVideos: ModulesVideos,
    Notifications: Notifications,
    NotificationsMessages: NotificationsMessages,
    NotificationsTemplates: NotificationsTemplates,
    Otps: Otps,
    Partners: Partners,
    PartnersProposals: PartnersProposals,
    PaymentTransactions: PaymentTransactions,
    PaymentTrasactionItems: PaymentTrasactionItems,
    PositionSkills: PositionSkills,
    Positions: Positions,
    PositionsSkills: PositionsSkills,
    ProgramPositionSkills: ProgramPositionSkills,
    ProgramPositions: ProgramPositions,
    ProgramsPositionSkills: ProgramsPositionSkills,
    ProgressQuestionAnswers: ProgressQuestionAnswers,
    Quizzes: Quizzes,
    QuizzesAnswers: QuizzesAnswers,
    QuizzesQuestions: QuizzesQuestions,
    RecruitmentAgendas: RecruitmentAgendas,
    RecruitmentDepartments: RecruitmentDepartments,
    RecruitmentParticipants: RecruitmentParticipants,
    RecruitmentSchedules: RecruitmentSchedules,
    Referrals: Referrals,
    ReferralsAccesses: ReferralsAccesses,
    ReferralsRegistrations: ReferralsRegistrations,
    ReportActions: ReportActions,
    ReportDetails: ReportDetails,
    Reports: Reports,
    Roleplay: Roleplay,
    RoleplayPair: RoleplayPair,
    RoleplayPairs: RoleplayPairs,
    Roleplays: Roleplays,
    RoleplaysSessions: RoleplaysSessions,
    RoleplaysTeams: RoleplaysTeams,
    RoleplaysTeamsMembers: RoleplaysTeamsMembers,
    RoleplaysTeamsSchedules: RoleplaysTeamsSchedules,
    Roles: Roles,
    SavedPositions: SavedPositions,
    Semesters: Semesters,
    ServerAttributes: ServerAttributes,
    ServerLogs: ServerLogs,
    Sessions: Sessions,
    SessionsMentorings: SessionsMentorings,
    SessionsReflections: SessionsReflections,
    SessionsReflectionsComments: SessionsReflectionsComments,
    SessionsReflectionsCommentsReplies: SessionsReflectionsCommentsReplies,
    SessionsReflectionsLikes: SessionsReflectionsLikes,
    SessionsTeacherAssessment: SessionsTeacherAssessment,
    SessionsTeacherAssessmentQuestions: SessionsTeacherAssessmentQuestions,
    SessionsTeacherAssessmentQuestionsAnswers: SessionsTeacherAssessmentQuestionsAnswers,
    SessionsTeacherAssessmentSessionsQuestions: SessionsTeacherAssessmentSessionsQuestions,
    SessionsTeacherAssessmentStudentsAnswers: SessionsTeacherAssessmentStudentsAnswers,
    SimulationGroupStudents: SimulationGroupStudents,
    SimulationGroups: SimulationGroups,
    Simulations: Simulations,
    StoragesFiles: StoragesFiles,
    StoragesFilesHistories: StoragesFilesHistories,
    StudentEvents: StudentEvents,
    StudentMajors: StudentMajors,
    StudentProfiles: StudentProfiles,
    StudentSessionProgress: StudentSessionProgress,
    StudentSessions: StudentSessions,
    StudentSubjects: StudentSubjects,
    SubjectMajors: SubjectMajors,
    SubjectSessions: SubjectSessions,
    Subjects: Subjects,
    SubjectsOutcomes: SubjectsOutcomes,
    SubjectsSessionsActivities: SubjectsSessionsActivities,
    SubjectsSessionsAssessments: SubjectsSessionsAssessments,
    SubjectsSessionsContentOrders: SubjectsSessionsContentOrders,
    SubmissionDocuments: SubmissionDocuments,
    Submissions: Submissions,
    Surveys: Surveys,
    SurveysQuestions: SurveysQuestions,
    SurveysQuestionsAnswers: SurveysQuestionsAnswers,
    SurveysResponses: SurveysResponses,
    SurveysResponsesAnswers: SurveysResponsesAnswers,
    Tags: Tags,
    TeachersRegistrations: TeachersRegistrations,
    Topics: Topics,
    TopicsSubjects: TopicsSubjects,
    UserRoles: UserRoles,
    UserSessions: UserSessions,
    Users: Users,
    UsersActives: UsersActives,
    UsersAdministrations: UsersAdministrations,
    UsersDelete: UsersDelete,
    UsersScreenTimes: UsersScreenTimes,
    UsersSearchHistories: UsersSearchHistories,
    UsersSocialMedia: UsersSocialMedia,
    UsersSocketConnections: UsersSocketConnections,
    Videos: Videos,
    WatchedVideoProgress: WatchedVideoProgress,
  };
}
