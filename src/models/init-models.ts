import { Sequelize } from 'sequelize';
import { Activities } from './tables/Activities';
import { AdminAttendence } from './tables/AdminAttendence';
import { AdminPanelLogs } from './tables/AdminPanelLogs';
import { AdminReflection } from './tables/AdminReflection';
import { Administrations } from './tables/Administrations';
import { AdministrationsBiodatas } from './tables/AdministrationsBiodatas';
import { AdministrationsFamilials } from './tables/AdministrationsFamilials';
import { AdministrationsFiles } from './tables/AdministrationsFiles';
import { AnalyticVisits } from './tables/AnalyticVisits';
import { ArticleFavorites } from './tables/ArticleFavorites';
import { ArticleLikes } from './tables/ArticleLikes';
import { Articles } from './tables/Articles';
import { ArticlesCategories } from './tables/ArticlesCategories';
import { ArticlesFavorites } from './tables/ArticlesFavorites';
import { ArticlesTags } from './tables/ArticlesTags';
import { AssessmentCompetencyTests } from './tables/AssessmentCompetencyTests';
import { AssessmentCompetencyTestsSchedules } from './tables/AssessmentCompetencyTestsSchedules';
import { Assessments } from './tables/Assessments';
import { AssessmentsAssessors } from './tables/AssessmentsAssessors';
import { AssessmentsAssessorsAvailabilities } from './tables/AssessmentsAssessorsAvailabilities';
import { AssessmentsSessions } from './tables/AssessmentsSessions';
import { AssessmentsSessionsPartners } from './tables/AssessmentsSessionsPartners';
import { AssessmentsSessionsRubricsResults } from './tables/AssessmentsSessionsRubricsResults';
import { AssessmentsSessionsSubmissions } from './tables/AssessmentsSessionsSubmissions';
import { AssessmentsSubjectsProgresses } from './tables/AssessmentsSubjectsProgresses';
import { AssessmentsSubjectsProgressesAnswers } from './tables/AssessmentsSubjectsProgressesAnswers';
import { AssignmentDocuments } from './tables/AssignmentDocuments';
import { AssignmentFiles } from './tables/AssignmentFiles';
import { Assignments } from './tables/Assignments';
import { AssignmentsAdmin } from './tables/AssignmentsAdmin';
import { AvailabilitySchedules } from './tables/AvailabilitySchedules';
import { Banner } from './tables/Banner';
import { BootcampTopics } from './tables/BootcampTopics';
import { Certificates } from './tables/Certificates';
import { ChatsConversations } from './tables/ChatsConversations';
import { ChatsConversationsParticipants } from './tables/ChatsConversationsParticipants';
import { ChatsMessages } from './tables/ChatsMessages';
import { ChatsRooms } from './tables/ChatsRooms';
import { ChatsRoomsMembers } from './tables/ChatsRoomsMembers';
import { ChatsRoomsMessages } from './tables/ChatsRoomsMessages';
import { CollegeAcademicCohorts } from './tables/CollegeAcademicCohorts';
import { CollegeClassEnrollments } from './tables/CollegeClassEnrollments';
import { CollegeClasses } from './tables/CollegeClasses';
import { CollegeProgramOfferings } from './tables/CollegeProgramOfferings';
import { CollegeStudentRegistrations } from './tables/CollegeStudentRegistrations';
import { Companies } from './tables/Companies';
import { CompaniesDepartments } from './tables/CompaniesDepartments';
import { CompaniesEmployees } from './tables/CompaniesEmployees';
import { CompaniesEmployeesRoles } from './tables/CompaniesEmployeesRoles';
import { ConsultationRoomMessages } from './tables/ConsultationRoomMessages';
import { ConsultationRooms } from './tables/ConsultationRooms';
import { ConsultationTypes } from './tables/ConsultationTypes';
import { CreditConvertionRequests } from './tables/CreditConvertionRequests';
import { CreditConvertionRequestsSubjects } from './tables/CreditConvertionRequestsSubjects';
import { Cycles } from './tables/Cycles';
import { Dictionarys } from './tables/Dictionarys';
import { DiscussionForumComments } from './tables/DiscussionForumComments';
import { DiscussionForumReplies } from './tables/DiscussionForumReplies';
import { DiscussionForums } from './tables/DiscussionForums';
import { DiscussionLikes } from './tables/DiscussionLikes';
import { DiscussionReports } from './tables/DiscussionReports';
import { DonationProofs } from './tables/DonationProofs';
import { DrillSimulationAssessmentsMeetings } from './tables/DrillSimulationAssessmentsMeetings';
import { DrillSimulationAssessmentsSchedules } from './tables/DrillSimulationAssessmentsSchedules';
import { Drills } from './tables/Drills';
import { ErrorLogs } from './tables/ErrorLogs';
import { EventParticipants } from './tables/EventParticipants';
import { Events } from './tables/Events';
import { EventsParticipants } from './tables/EventsParticipants';
import { Faculties } from './tables/Faculties';
import { GradingRubrics } from './tables/GradingRubrics';
import { GradingRubricsCriteria } from './tables/GradingRubricsCriteria';
import { GradingRubricsCriteriaDetails } from './tables/GradingRubricsCriteriaDetails';
import { GuidesBooks } from './tables/GuidesBooks';
import { GuidesDictionaries } from './tables/GuidesDictionaries';
import { GuidesFrequentlyAskedQuestions } from './tables/GuidesFrequentlyAskedQuestions';
import { GuidesVideos } from './tables/GuidesVideos';
import { InboxMessages } from './tables/InboxMessages';
import { InternshipStudentMentors } from './tables/InternshipStudentMentors';
import { JobApplications } from './tables/JobApplications';
import { Jobs } from './tables/Jobs';
import { LeaderboardHistories } from './tables/LeaderboardHistories';
import { Majors } from './tables/Majors';
import { Meetings } from './tables/Meetings';
import { Mentors } from './tables/Mentors';
import { Modules } from './tables/Modules';
import { ModulesAdmin } from './tables/ModulesAdmin';
import { ModulesArticles } from './tables/ModulesArticles';
import { ModulesDocuments } from './tables/ModulesDocuments';
import { ModulesJournals } from './tables/ModulesJournals';
import { ModulesVideos } from './tables/ModulesVideos';
import { Notifications } from './tables/Notifications';
import { NotificationsMessages } from './tables/NotificationsMessages';
import { NotificationsTemplates } from './tables/NotificationsTemplates';
import { Otps } from './tables/Otps';
import { Partners } from './tables/Partners';
import { PartnersProposals } from './tables/PartnersProposals';
import { PaymentTransactions } from './tables/PaymentTransactions';
import { PaymentTrasactionItems } from './tables/PaymentTrasactionItems';
import { PositionSkills } from './tables/PositionSkills';
import { Positions } from './tables/Positions';
import { PositionsSkills } from './tables/PositionsSkills';
import { ProgramPositionSkills } from './tables/ProgramPositionSkills';
import { ProgramPositions } from './tables/ProgramPositions';
import { ProgramsPositionSkills } from './tables/ProgramsPositionSkills';
import { ProgressQuestionAnswers } from './tables/ProgressQuestionAnswers';
import { Quizzes } from './tables/Quizzes';
import { QuizzesAnswers } from './tables/QuizzesAnswers';
import { QuizzesQuestions } from './tables/QuizzesQuestions';
import { RecruitmentAgendas } from './tables/RecruitmentAgendas';
import { RecruitmentDepartments } from './tables/RecruitmentDepartments';
import { RecruitmentParticipants } from './tables/RecruitmentParticipants';
import { RecruitmentSchedules } from './tables/RecruitmentSchedules';
import { Referrals } from './tables/Referrals';
import { ReferralsAccesses } from './tables/ReferralsAccesses';
import { ReferralsRegistrations } from './tables/ReferralsRegistrations';
import { ReportActions } from './tables/ReportActions';
import { ReportDetails } from './tables/ReportDetails';
import { Reports } from './tables/Reports';
import { Roleplay } from './tables/Roleplay';
import { RoleplayPair } from './tables/RoleplayPair';
import { RoleplayPairs } from './tables/RoleplayPairs';
import { Roleplays } from './tables/Roleplays';
import { RoleplaysSessions } from './tables/RoleplaysSessions';
import { RoleplaysTeams } from './tables/RoleplaysTeams';
import { RoleplaysTeamsMembers } from './tables/RoleplaysTeamsMembers';
import { RoleplaysTeamsSchedules } from './tables/RoleplaysTeamsSchedules';
import { Roles } from './tables/Roles';
import { SavedPositions } from './tables/SavedPositions';
import { Semesters } from './tables/Semesters';
import { ServerAttributes } from './tables/ServerAttributes';
import { ServerLogs } from './tables/ServerLogs';
import { Sessions } from './tables/Sessions';
import { SessionsMentorings } from './tables/SessionsMentorings';
import { SessionsReflections } from './tables/SessionsReflections';
import { SessionsReflectionsComments } from './tables/SessionsReflectionsComments';
import { SessionsReflectionsCommentsReplies } from './tables/SessionsReflectionsCommentsReplies';
import { SessionsReflectionsLikes } from './tables/SessionsReflectionsLikes';
import { SessionsTeacherAssessment } from './tables/SessionsTeacherAssessment';
import { SessionsTeacherAssessmentQuestions } from './tables/SessionsTeacherAssessmentQuestions';
import { SessionsTeacherAssessmentQuestionsAnswers } from './tables/SessionsTeacherAssessmentQuestionsAnswers';
import { SessionsTeacherAssessmentSessionsQuestions } from './tables/SessionsTeacherAssessmentSessionsQuestions';
import { SessionsTeacherAssessmentStudentsAnswers } from './tables/SessionsTeacherAssessmentStudentsAnswers';
import { SimulationGroupStudents } from './tables/SimulationGroupStudents';
import { SimulationGroups } from './tables/SimulationGroups';
import { Simulations } from './tables/Simulations';
import { StoragesFiles } from './tables/StoragesFiles';
import { StoragesFilesHistories } from './tables/StoragesFilesHistories';
import { StudentEvents } from './tables/StudentEvents';
import { StudentMajors } from './tables/StudentMajors';
import { StudentProfiles } from './tables/StudentProfiles';
import { StudentSessionProgress } from './tables/StudentSessionProgress';
import { StudentSessions } from './tables/StudentSessions';
import { StudentSubjects } from './tables/StudentSubjects';
import { SubjectMajors } from './tables/SubjectMajors';
import { SubjectSessions } from './tables/SubjectSessions';
import { Subjects } from './tables/Subjects';
import { SubjectsOutcomes } from './tables/SubjectsOutcomes';
import { SubjectsSessionsActivities } from './tables/SubjectsSessionsActivities';
import { SubjectsSessionsAssessments } from './tables/SubjectsSessionsAssessments';
import { SubjectsSessionsContentOrders } from './tables/SubjectsSessionsContentOrders';
import { SubmissionDocuments } from './tables/SubmissionDocuments';
import { Submissions } from './tables/Submissions';
import { Surveys } from './tables/Surveys';
import { SurveysQuestions } from './tables/SurveysQuestions';
import { SurveysQuestionsAnswers } from './tables/SurveysQuestionsAnswers';
import { SurveysResponses } from './tables/SurveysResponses';
import { SurveysResponsesAnswers } from './tables/SurveysResponsesAnswers';
import { Tags } from './tables/Tags';
import { TeachersRegistrations } from './tables/TeachersRegistrations';
import { Topics } from './tables/Topics';
import { TopicsSubjects } from './tables/TopicsSubjects';
import { UserRoles } from './tables/UserRoles';
import { UserSessions } from './tables/UserSessions';
import { Users } from './tables/Users';
import { UsersActives } from './tables/UsersActives';
import { UsersAdministrations } from './tables/UsersAdministrations';
import { UsersDelete } from './tables/UsersDelete';
import { UsersScreenTimes } from './tables/UsersScreenTimes';
import { UsersSearchHistories } from './tables/UsersSearchHistories';
import { UsersSocialMedia } from './tables/UsersSocialMedia';
import { UsersSocketConnections } from './tables/UsersSocketConnections';
import { Videos } from './tables/Videos';
import { WatchedVideoProgress } from './tables/WatchedVideoProgress';

export interface Models {
  Activities: typeof Activities;
  AdminAttendence: typeof AdminAttendence;
  AdminPanelLogs: typeof AdminPanelLogs;
  AdminReflection: typeof AdminReflection;
  Administrations: typeof Administrations;
  AdministrationsBiodatas: typeof AdministrationsBiodatas;
  AdministrationsFamilials: typeof AdministrationsFamilials;
  AdministrationsFiles: typeof AdministrationsFiles;
  AnalyticVisits: typeof AnalyticVisits;
  ArticleFavorites: typeof ArticleFavorites;
  ArticleLikes: typeof ArticleLikes;
  Articles: typeof Articles;
  ArticlesCategories: typeof ArticlesCategories;
  ArticlesFavorites: typeof ArticlesFavorites;
  ArticlesTags: typeof ArticlesTags;
  AssessmentCompetencyTests: typeof AssessmentCompetencyTests;
  AssessmentCompetencyTestsSchedules: typeof AssessmentCompetencyTestsSchedules;
  Assessments: typeof Assessments;
  AssessmentsAssessors: typeof AssessmentsAssessors;
  AssessmentsAssessorsAvailabilities: typeof AssessmentsAssessorsAvailabilities;
  AssessmentsSessions: typeof AssessmentsSessions;
  AssessmentsSessionsPartners: typeof AssessmentsSessionsPartners;
  AssessmentsSessionsRubricsResults: typeof AssessmentsSessionsRubricsResults;
  AssessmentsSessionsSubmissions: typeof AssessmentsSessionsSubmissions;
  AssessmentsSubjectsProgresses: typeof AssessmentsSubjectsProgresses;
  AssessmentsSubjectsProgressesAnswers: typeof AssessmentsSubjectsProgressesAnswers;
  AssignmentDocuments: typeof AssignmentDocuments;
  AssignmentFiles: typeof AssignmentFiles;
  Assignments: typeof Assignments;
  AssignmentsAdmin: typeof AssignmentsAdmin;
  AvailabilitySchedules: typeof AvailabilitySchedules;
  Banner: typeof Banner;
  BootcampTopics: typeof BootcampTopics;
  Certificates: typeof Certificates;
  ChatsConversations: typeof ChatsConversations;
  ChatsConversationsParticipants: typeof ChatsConversationsParticipants;
  ChatsMessages: typeof ChatsMessages;
  ChatsRooms: typeof ChatsRooms;
  ChatsRoomsMembers: typeof ChatsRoomsMembers;
  ChatsRoomsMessages: typeof ChatsRoomsMessages;
  CollegeAcademicCohorts: typeof CollegeAcademicCohorts;
  CollegeClassEnrollments: typeof CollegeClassEnrollments;
  CollegeClasses: typeof CollegeClasses;
  CollegeProgramOfferings: typeof CollegeProgramOfferings;
  CollegeStudentRegistrations: typeof CollegeStudentRegistrations;
  Companies: typeof Companies;
  CompaniesDepartments: typeof CompaniesDepartments;
  CompaniesEmployees: typeof CompaniesEmployees;
  CompaniesEmployeesRoles: typeof CompaniesEmployeesRoles;
  ConsultationRoomMessages: typeof ConsultationRoomMessages;
  ConsultationRooms: typeof ConsultationRooms;
  ConsultationTypes: typeof ConsultationTypes;
  CreditConvertionRequests: typeof CreditConvertionRequests;
  CreditConvertionRequestsSubjects: typeof CreditConvertionRequestsSubjects;
  Cycles: typeof Cycles;
  Dictionarys: typeof Dictionarys;
  DiscussionForumComments: typeof DiscussionForumComments;
  DiscussionForumReplies: typeof DiscussionForumReplies;
  DiscussionForums: typeof DiscussionForums;
  DiscussionLikes: typeof DiscussionLikes;
  DiscussionReports: typeof DiscussionReports;
  DonationProofs: typeof DonationProofs;
  DrillSimulationAssessmentsMeetings: typeof DrillSimulationAssessmentsMeetings;
  DrillSimulationAssessmentsSchedules: typeof DrillSimulationAssessmentsSchedules;
  Drills: typeof Drills;
  ErrorLogs: typeof ErrorLogs;
  EventParticipants: typeof EventParticipants;
  Events: typeof Events;
  EventsParticipants: typeof EventsParticipants;
  Faculties: typeof Faculties;
  GradingRubrics: typeof GradingRubrics;
  GradingRubricsCriteria: typeof GradingRubricsCriteria;
  GradingRubricsCriteriaDetails: typeof GradingRubricsCriteriaDetails;
  GuidesBooks: typeof GuidesBooks;
  GuidesDictionaries: typeof GuidesDictionaries;
  GuidesFrequentlyAskedQuestions: typeof GuidesFrequentlyAskedQuestions;
  GuidesVideos: typeof GuidesVideos;
  InboxMessages: typeof InboxMessages;
  InternshipStudentMentors: typeof InternshipStudentMentors;
  JobApplications: typeof JobApplications;
  Jobs: typeof Jobs;
  LeaderboardHistories: typeof LeaderboardHistories;
  Majors: typeof Majors;
  Meetings: typeof Meetings;
  Mentors: typeof Mentors;
  Modules: typeof Modules;
  ModulesAdmin: typeof ModulesAdmin;
  ModulesArticles: typeof ModulesArticles;
  ModulesDocuments: typeof ModulesDocuments;
  ModulesJournals: typeof ModulesJournals;
  ModulesVideos: typeof ModulesVideos;
  Notifications: typeof Notifications;
  NotificationsMessages: typeof NotificationsMessages;
  NotificationsTemplates: typeof NotificationsTemplates;
  Otps: typeof Otps;
  Partners: typeof Partners;
  PartnersProposals: typeof PartnersProposals;
  PaymentTransactions: typeof PaymentTransactions;
  PaymentTrasactionItems: typeof PaymentTrasactionItems;
  PositionSkills: typeof PositionSkills;
  Positions: typeof Positions;
  PositionsSkills: typeof PositionsSkills;
  ProgramPositionSkills: typeof ProgramPositionSkills;
  ProgramPositions: typeof ProgramPositions;
  ProgramsPositionSkills: typeof ProgramsPositionSkills;
  ProgressQuestionAnswers: typeof ProgressQuestionAnswers;
  Quizzes: typeof Quizzes;
  QuizzesAnswers: typeof QuizzesAnswers;
  QuizzesQuestions: typeof QuizzesQuestions;
  RecruitmentAgendas: typeof RecruitmentAgendas;
  RecruitmentDepartments: typeof RecruitmentDepartments;
  RecruitmentParticipants: typeof RecruitmentParticipants;
  RecruitmentSchedules: typeof RecruitmentSchedules;
  Referrals: typeof Referrals;
  ReferralsAccesses: typeof ReferralsAccesses;
  ReferralsRegistrations: typeof ReferralsRegistrations;
  ReportActions: typeof ReportActions;
  ReportDetails: typeof ReportDetails;
  Reports: typeof Reports;
  Roleplay: typeof Roleplay;
  RoleplayPair: typeof RoleplayPair;
  RoleplayPairs: typeof RoleplayPairs;
  Roleplays: typeof Roleplays;
  RoleplaysSessions: typeof RoleplaysSessions;
  RoleplaysTeams: typeof RoleplaysTeams;
  RoleplaysTeamsMembers: typeof RoleplaysTeamsMembers;
  RoleplaysTeamsSchedules: typeof RoleplaysTeamsSchedules;
  Roles: typeof Roles;
  SavedPositions: typeof SavedPositions;
  Semesters: typeof Semesters;
  ServerAttributes: typeof ServerAttributes;
  ServerLogs: typeof ServerLogs;
  Sessions: typeof Sessions;
  SessionsMentorings: typeof SessionsMentorings;
  SessionsReflections: typeof SessionsReflections;
  SessionsReflectionsComments: typeof SessionsReflectionsComments;
  SessionsReflectionsCommentsReplies: typeof SessionsReflectionsCommentsReplies;
  SessionsReflectionsLikes: typeof SessionsReflectionsLikes;
  SessionsTeacherAssessment: typeof SessionsTeacherAssessment;
  SessionsTeacherAssessmentQuestions: typeof SessionsTeacherAssessmentQuestions;
  SessionsTeacherAssessmentQuestionsAnswers: typeof SessionsTeacherAssessmentQuestionsAnswers;
  SessionsTeacherAssessmentSessionsQuestions: typeof SessionsTeacherAssessmentSessionsQuestions;
  SessionsTeacherAssessmentStudentsAnswers: typeof SessionsTeacherAssessmentStudentsAnswers;
  SimulationGroupStudents: typeof SimulationGroupStudents;
  SimulationGroups: typeof SimulationGroups;
  Simulations: typeof Simulations;
  StoragesFiles: typeof StoragesFiles;
  StoragesFilesHistories: typeof StoragesFilesHistories;
  StudentEvents: typeof StudentEvents;
  StudentMajors: typeof StudentMajors;
  StudentProfiles: typeof StudentProfiles;
  StudentSessionProgress: typeof StudentSessionProgress;
  StudentSessions: typeof StudentSessions;
  StudentSubjects: typeof StudentSubjects;
  SubjectMajors: typeof SubjectMajors;
  SubjectSessions: typeof SubjectSessions;
  Subjects: typeof Subjects;
  SubjectsOutcomes: typeof SubjectsOutcomes;
  SubjectsSessionsActivities: typeof SubjectsSessionsActivities;
  SubjectsSessionsAssessments: typeof SubjectsSessionsAssessments;
  SubjectsSessionsContentOrders: typeof SubjectsSessionsContentOrders;
  SubmissionDocuments: typeof SubmissionDocuments;
  Submissions: typeof Submissions;
  Surveys: typeof Surveys;
  SurveysQuestions: typeof SurveysQuestions;
  SurveysQuestionsAnswers: typeof SurveysQuestionsAnswers;
  SurveysResponses: typeof SurveysResponses;
  SurveysResponsesAnswers: typeof SurveysResponsesAnswers;
  Tags: typeof Tags;
  TeachersRegistrations: typeof TeachersRegistrations;
  Topics: typeof Topics;
  TopicsSubjects: typeof TopicsSubjects;
  UserRoles: typeof UserRoles;
  UserSessions: typeof UserSessions;
  Users: typeof Users;
  UsersActives: typeof UsersActives;
  UsersAdministrations: typeof UsersAdministrations;
  UsersDelete: typeof UsersDelete;
  UsersScreenTimes: typeof UsersScreenTimes;
  UsersSearchHistories: typeof UsersSearchHistories;
  UsersSocialMedia: typeof UsersSocialMedia;
  UsersSocketConnections: typeof UsersSocketConnections;
  Videos: typeof Videos;
  WatchedVideoProgress: typeof WatchedVideoProgress;
}

export function initModels(sequelize: Sequelize): Models {
  // Initialize all models
  Activities.initModel(sequelize);
  AdminAttendence.initModel(sequelize);
  AdminPanelLogs.initModel(sequelize);
  AdminReflection.initModel(sequelize);
  Administrations.initModel(sequelize);
  AdministrationsBiodatas.initModel(sequelize);
  AdministrationsFamilials.initModel(sequelize);
  AdministrationsFiles.initModel(sequelize);
  AnalyticVisits.initModel(sequelize);
  ArticleFavorites.initModel(sequelize);
  ArticleLikes.initModel(sequelize);
  Articles.initModel(sequelize);
  ArticlesCategories.initModel(sequelize);
  ArticlesFavorites.initModel(sequelize);
  ArticlesTags.initModel(sequelize);
  AssessmentCompetencyTests.initModel(sequelize);
  AssessmentCompetencyTestsSchedules.initModel(sequelize);
  Assessments.initModel(sequelize);
  AssessmentsAssessors.initModel(sequelize);
  AssessmentsAssessorsAvailabilities.initModel(sequelize);
  AssessmentsSessions.initModel(sequelize);
  AssessmentsSessionsPartners.initModel(sequelize);
  AssessmentsSessionsRubricsResults.initModel(sequelize);
  AssessmentsSessionsSubmissions.initModel(sequelize);
  AssessmentsSubjectsProgresses.initModel(sequelize);
  AssessmentsSubjectsProgressesAnswers.initModel(sequelize);
  AssignmentDocuments.initModel(sequelize);
  AssignmentFiles.initModel(sequelize);
  Assignments.initModel(sequelize);
  AssignmentsAdmin.initModel(sequelize);
  AvailabilitySchedules.initModel(sequelize);
  Banner.initModel(sequelize);
  BootcampTopics.initModel(sequelize);
  Certificates.initModel(sequelize);
  ChatsConversations.initModel(sequelize);
  ChatsConversationsParticipants.initModel(sequelize);
  ChatsMessages.initModel(sequelize);
  ChatsRooms.initModel(sequelize);
  ChatsRoomsMembers.initModel(sequelize);
  ChatsRoomsMessages.initModel(sequelize);
  CollegeAcademicCohorts.initModel(sequelize);
  CollegeClassEnrollments.initModel(sequelize);
  CollegeClasses.initModel(sequelize);
  CollegeProgramOfferings.initModel(sequelize);
  CollegeStudentRegistrations.initModel(sequelize);
  Companies.initModel(sequelize);
  CompaniesDepartments.initModel(sequelize);
  CompaniesEmployees.initModel(sequelize);
  CompaniesEmployeesRoles.initModel(sequelize);
  ConsultationRoomMessages.initModel(sequelize);
  ConsultationRooms.initModel(sequelize);
  ConsultationTypes.initModel(sequelize);
  CreditConvertionRequests.initModel(sequelize);
  CreditConvertionRequestsSubjects.initModel(sequelize);
  Cycles.initModel(sequelize);
  Dictionarys.initModel(sequelize);
  DiscussionForumComments.initModel(sequelize);
  DiscussionForumReplies.initModel(sequelize);
  DiscussionForums.initModel(sequelize);
  DiscussionLikes.initModel(sequelize);
  DiscussionReports.initModel(sequelize);
  DonationProofs.initModel(sequelize);
  DrillSimulationAssessmentsMeetings.initModel(sequelize);
  DrillSimulationAssessmentsSchedules.initModel(sequelize);
  Drills.initModel(sequelize);
  ErrorLogs.initModel(sequelize);
  EventParticipants.initModel(sequelize);
  Events.initModel(sequelize);
  EventsParticipants.initModel(sequelize);
  Faculties.initModel(sequelize);
  GradingRubrics.initModel(sequelize);
  GradingRubricsCriteria.initModel(sequelize);
  GradingRubricsCriteriaDetails.initModel(sequelize);
  GuidesBooks.initModel(sequelize);
  GuidesDictionaries.initModel(sequelize);
  GuidesFrequentlyAskedQuestions.initModel(sequelize);
  GuidesVideos.initModel(sequelize);
  InboxMessages.initModel(sequelize);
  InternshipStudentMentors.initModel(sequelize);
  JobApplications.initModel(sequelize);
  Jobs.initModel(sequelize);
  LeaderboardHistories.initModel(sequelize);
  Majors.initModel(sequelize);
  Meetings.initModel(sequelize);
  Mentors.initModel(sequelize);
  Modules.initModel(sequelize);
  ModulesAdmin.initModel(sequelize);
  ModulesArticles.initModel(sequelize);
  ModulesDocuments.initModel(sequelize);
  ModulesJournals.initModel(sequelize);
  ModulesVideos.initModel(sequelize);
  Notifications.initModel(sequelize);
  NotificationsMessages.initModel(sequelize);
  NotificationsTemplates.initModel(sequelize);
  Otps.initModel(sequelize);
  Partners.initModel(sequelize);
  PartnersProposals.initModel(sequelize);
  PaymentTransactions.initModel(sequelize);
  PaymentTrasactionItems.initModel(sequelize);
  PositionSkills.initModel(sequelize);
  Positions.initModel(sequelize);
  PositionsSkills.initModel(sequelize);
  ProgramPositionSkills.initModel(sequelize);
  ProgramPositions.initModel(sequelize);
  ProgramsPositionSkills.initModel(sequelize);
  ProgressQuestionAnswers.initModel(sequelize);
  Quizzes.initModel(sequelize);
  QuizzesAnswers.initModel(sequelize);
  QuizzesQuestions.initModel(sequelize);
  RecruitmentAgendas.initModel(sequelize);
  RecruitmentDepartments.initModel(sequelize);
  RecruitmentParticipants.initModel(sequelize);
  RecruitmentSchedules.initModel(sequelize);
  Referrals.initModel(sequelize);
  ReferralsAccesses.initModel(sequelize);
  ReferralsRegistrations.initModel(sequelize);
  ReportActions.initModel(sequelize);
  ReportDetails.initModel(sequelize);
  Reports.initModel(sequelize);
  Roleplay.initModel(sequelize);
  RoleplayPair.initModel(sequelize);
  RoleplayPairs.initModel(sequelize);
  Roleplays.initModel(sequelize);
  RoleplaysSessions.initModel(sequelize);
  RoleplaysTeams.initModel(sequelize);
  RoleplaysTeamsMembers.initModel(sequelize);
  RoleplaysTeamsSchedules.initModel(sequelize);
  Roles.initModel(sequelize);
  SavedPositions.initModel(sequelize);
  Semesters.initModel(sequelize);
  ServerAttributes.initModel(sequelize);
  ServerLogs.initModel(sequelize);
  Sessions.initModel(sequelize);
  SessionsMentorings.initModel(sequelize);
  SessionsReflections.initModel(sequelize);
  SessionsReflectionsComments.initModel(sequelize);
  SessionsReflectionsCommentsReplies.initModel(sequelize);
  SessionsReflectionsLikes.initModel(sequelize);
  SessionsTeacherAssessment.initModel(sequelize);
  SessionsTeacherAssessmentQuestions.initModel(sequelize);
  SessionsTeacherAssessmentQuestionsAnswers.initModel(sequelize);
  SessionsTeacherAssessmentSessionsQuestions.initModel(sequelize);
  SessionsTeacherAssessmentStudentsAnswers.initModel(sequelize);
  SimulationGroupStudents.initModel(sequelize);
  SimulationGroups.initModel(sequelize);
  Simulations.initModel(sequelize);
  StoragesFiles.initModel(sequelize);
  StoragesFilesHistories.initModel(sequelize);
  StudentEvents.initModel(sequelize);
  StudentMajors.initModel(sequelize);
  StudentProfiles.initModel(sequelize);
  StudentSessionProgress.initModel(sequelize);
  StudentSessions.initModel(sequelize);
  StudentSubjects.initModel(sequelize);
  SubjectMajors.initModel(sequelize);
  SubjectSessions.initModel(sequelize);
  Subjects.initModel(sequelize);
  SubjectsOutcomes.initModel(sequelize);
  SubjectsSessionsActivities.initModel(sequelize);
  SubjectsSessionsAssessments.initModel(sequelize);
  SubjectsSessionsContentOrders.initModel(sequelize);
  SubmissionDocuments.initModel(sequelize);
  Submissions.initModel(sequelize);
  Surveys.initModel(sequelize);
  SurveysQuestions.initModel(sequelize);
  SurveysQuestionsAnswers.initModel(sequelize);
  SurveysResponses.initModel(sequelize);
  SurveysResponsesAnswers.initModel(sequelize);
  Tags.initModel(sequelize);
  TeachersRegistrations.initModel(sequelize);
  Topics.initModel(sequelize);
  TopicsSubjects.initModel(sequelize);
  UserRoles.initModel(sequelize);
  UserSessions.initModel(sequelize);
  Users.initModel(sequelize);
  UsersActives.initModel(sequelize);
  UsersAdministrations.initModel(sequelize);
  UsersDelete.initModel(sequelize);
  UsersScreenTimes.initModel(sequelize);
  UsersSearchHistories.initModel(sequelize);
  UsersSocialMedia.initModel(sequelize);
  UsersSocketConnections.initModel(sequelize);
  Videos.initModel(sequelize);
  WatchedVideoProgress.initModel(sequelize);

  // Define associations
    // Activities belongsTo ProgramPositions
    Activities.belongsTo(ProgramPositions, { foreignKey: 'position_id', as: 'position' });
    ProgramPositions.hasMany(Activities, { foreignKey: 'position_id', as: 'activities' });
  
    // Activities belongsTo Users
    Activities.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(Activities, { foreignKey: 'user_id', as: 'activities' });
  
    // AdminAttendence belongsTo Sessions
    AdminAttendence.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(AdminAttendence, { foreignKey: 'session_id', as: 'adminAttendence' });
  
    // AdminAttendence belongsTo Users
    AdminAttendence.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(AdminAttendence, { foreignKey: 'user_id', as: 'adminAttendence' });
  
    // AdminReflection belongsTo Sessions
    AdminReflection.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(AdminReflection, { foreignKey: 'session_id', as: 'adminReflection' });
  
    // AdminReflection belongsTo Users
    AdminReflection.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(AdminReflection, { foreignKey: 'user_id', as: 'adminReflection' });
  
    // AdministrationsBiodatas belongsTo Administrations
    AdministrationsBiodatas.belongsTo(Administrations, { foreignKey: 'administration_id', as: 'administration' });
    Administrations.hasMany(AdministrationsBiodatas, { foreignKey: 'administration_id', as: 'administrationsBiodatas' });
  
    // AdministrationsFamilials belongsTo Administrations
    AdministrationsFamilials.belongsTo(Administrations, { foreignKey: 'administration_id', as: 'administration' });
    Administrations.hasMany(AdministrationsFamilials, { foreignKey: 'administration_id', as: 'administrationsFamilials' });
  
    // AdministrationsFiles belongsTo Administrations
    AdministrationsFiles.belongsTo(Administrations, { foreignKey: 'administration_id', as: 'administration' });
    Administrations.hasMany(AdministrationsFiles, { foreignKey: 'administration_id', as: 'administrationsFiles' });
  
    // Administrations belongsTo Users
    Administrations.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(Administrations, { foreignKey: 'user_id', as: 'administrations' });
  
    // Articles belongsTo Users
    Articles.belongsTo(Users, { foreignKey: 'author_id', as: 'author' });
    Users.hasMany(Articles, { foreignKey: 'author_id', as: 'articles' });
  
    // Articles belongsTo ArticlesCategories
    Articles.belongsTo(ArticlesCategories, { foreignKey: 'category_id', as: 'category' });
    ArticlesCategories.hasMany(Articles, { foreignKey: 'category_id', as: 'articles' });
  
    // ArticlesFavorites belongsTo Articles
    ArticlesFavorites.belongsTo(Articles, { foreignKey: 'article_id', as: 'article' });
    Articles.hasMany(ArticlesFavorites, { foreignKey: 'article_id', as: 'articlesFavorites' });
  
    // ArticlesFavorites belongsTo Users
    ArticlesFavorites.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ArticlesFavorites, { foreignKey: 'user_id', as: 'articlesFavorites' });
  
    // ArticlesTags belongsTo Articles
    ArticlesTags.belongsTo(Articles, { foreignKey: 'articles_id', as: 'articles' });
    Articles.hasMany(ArticlesTags, { foreignKey: 'articles_id', as: 'articlesTags' });
  
    // ArticlesTags belongsTo Tags
    ArticlesTags.belongsTo(Tags, { foreignKey: 'tags_id', as: 'tags' });
    Tags.hasMany(ArticlesTags, { foreignKey: 'tags_id', as: 'articlesTags' });
  
    // AssessmentsAssessors belongsTo Assessments
    AssessmentsAssessors.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
    Assessments.hasMany(AssessmentsAssessors, { foreignKey: 'assessment_id', as: 'assessmentsAssessors' });
  
    // AssessmentsAssessors belongsTo Users
    AssessmentsAssessors.belongsTo(Users, { foreignKey: 'assessor_id', as: 'assessor' });
    Users.hasMany(AssessmentsAssessors, { foreignKey: 'assessor_id', as: 'assessmentsAssessors' });
  
    // AssessmentsAssessorsAvailabilities belongsTo Assessments
    AssessmentsAssessorsAvailabilities.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
    Assessments.hasMany(AssessmentsAssessorsAvailabilities, { foreignKey: 'assessment_id', as: 'assessmentsAssessorsAvailabilities' });
  
    // AssessmentsAssessorsAvailabilities belongsTo Users
    AssessmentsAssessorsAvailabilities.belongsTo(Users, { foreignKey: 'assessor_id', as: 'assessor' });
    Users.hasMany(AssessmentsAssessorsAvailabilities, { foreignKey: 'assessor_id', as: 'assessmentsAssessorsAvailabilities' });
  
    // Assessments belongsTo Users
    Assessments.belongsTo(Users, { foreignKey: 'created_by', as: 'createdBy' });
    Users.hasMany(Assessments, { foreignKey: 'created_by', as: 'assessments' });
  
    // Assessments belongsTo Majors
    Assessments.belongsTo(Majors, { foreignKey: 'major_id', as: 'major' });
    Majors.hasMany(Assessments, { foreignKey: 'major_id', as: 'assessments' });
  
    // Assessments belongsTo GradingRubrics
    Assessments.belongsTo(GradingRubrics, { foreignKey: 'rubric_id', as: 'rubric' });
    GradingRubrics.hasMany(Assessments, { foreignKey: 'rubric_id', as: 'assessments' });
  
    // AssessmentsSessions belongsTo Assessments
    AssessmentsSessions.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
    Assessments.hasMany(AssessmentsSessions, { foreignKey: 'assessment_id', as: 'assessmentsSessions' });
  
    // AssessmentsSessions belongsTo Users
    AssessmentsSessions.belongsTo(Users, { foreignKey: 'booked_by', as: 'bookedBy' });
    Users.hasMany(AssessmentsSessions, { foreignKey: 'booked_by', as: 'assessmentsSessions' });
  
    // AssessmentsSessionsPartners belongsTo Assessments
    AssessmentsSessionsPartners.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
    Assessments.hasMany(AssessmentsSessionsPartners, { foreignKey: 'assessment_id', as: 'assessmentsSessionsPartners' });
  
    // AssessmentsSessionsPartners belongsTo AssessmentsSessions
    AssessmentsSessionsPartners.belongsTo(AssessmentsSessions, { foreignKey: 'assessment_session_id', as: 'assessmentSession' });
    AssessmentsSessions.hasMany(AssessmentsSessionsPartners, { foreignKey: 'assessment_session_id', as: 'assessmentsSessionsPartners' });
  
    // AssessmentsSessionsRubricsResults belongsTo GradingRubrics
    AssessmentsSessionsRubricsResults.belongsTo(GradingRubrics, { foreignKey: 'rubric_id', as: 'rubric' });
    GradingRubrics.hasMany(AssessmentsSessionsRubricsResults, { foreignKey: 'rubric_id', as: 'assessmentsSessionsRubricsResults' });
  
    // AssessmentsSessionsSubmissions belongsTo Assessments
    AssessmentsSessionsSubmissions.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
    Assessments.hasMany(AssessmentsSessionsSubmissions, { foreignKey: 'assessment_id', as: 'assessmentsSessionsSubmissions' });
  
    // AssessmentsSessionsSubmissions belongsTo AssessmentsSessions
    AssessmentsSessionsSubmissions.belongsTo(AssessmentsSessions, { foreignKey: 'assessment_session_id', as: 'assessmentSession' });
    AssessmentsSessions.hasMany(AssessmentsSessionsSubmissions, { foreignKey: 'assessment_session_id', as: 'assessmentsSessionsSubmissions' });
  
    // AssessmentsSessionsSubmissions belongsTo Users
    AssessmentsSessionsSubmissions.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(AssessmentsSessionsSubmissions, { foreignKey: 'student_id', as: 'assessmentsSessionsSubmissions' });
  
    // Assessments belongsTo Subjects
    Assessments.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(Assessments, { foreignKey: 'subject_id', as: 'assessments' });
  
    // Assessments belongsTo StoragesFiles
    Assessments.belongsTo(StoragesFiles, { foreignKey: 'thumbnail_id', as: 'thumbnail' });
    StoragesFiles.hasMany(Assessments, { foreignKey: 'thumbnail_id', as: 'assessments' });
  
    // AssignmentDocuments belongsTo Assignments
    AssignmentDocuments.belongsTo(Assignments, { foreignKey: 'assignment_id', as: 'assignment' });
    Assignments.hasMany(AssignmentDocuments, { foreignKey: 'assignment_id', as: 'assignmentDocuments' });
  
    // AssignmentFiles belongsTo AssignmentsAdmin
    AssignmentFiles.belongsTo(AssignmentsAdmin, { foreignKey: 'assignment_id', as: 'assignment' });
    AssignmentsAdmin.hasMany(AssignmentFiles, { foreignKey: 'assignment_id', as: 'assignmentFiles' });
  
    // AssignmentsAdmin belongsTo Modules
    AssignmentsAdmin.belongsTo(Modules, { foreignKey: 'module_id', as: 'module' });
    Modules.hasMany(AssignmentsAdmin, { foreignKey: 'module_id', as: 'assignmentsAdmin' });
  
    // AssignmentsAdmin belongsTo Sessions
    AssignmentsAdmin.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(AssignmentsAdmin, { foreignKey: 'session_id', as: 'assignmentsAdmin' });
  
    // Assignments belongsTo Sessions
    Assignments.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(Assignments, { foreignKey: 'session_id', as: 'assignments' });
  
    // Certificates belongsTo Events
    Certificates.belongsTo(Events, { foreignKey: 'event_id', as: 'event' });
    Events.hasMany(Certificates, { foreignKey: 'event_id', as: 'certificates' });
  
    // Certificates belongsTo Users
    Certificates.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(Certificates, { foreignKey: 'student_id', as: 'certificates' });
  
    // Certificates belongsTo Subjects
    Certificates.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(Certificates, { foreignKey: 'subject_id', as: 'certificates' });
  
    // ChatsConversations belongsTo Users
    ChatsConversations.belongsTo(Users, { foreignKey: 'creator_id', as: 'creator' });
    Users.hasMany(ChatsConversations, { foreignKey: 'creator_id', as: 'chatsConversations' });
  
    // ChatsConversations belongsTo ChatsMessages
    ChatsConversations.belongsTo(ChatsMessages, { foreignKey: 'last_message_id', as: 'lastMessage' });
    ChatsMessages.hasMany(ChatsConversations, { foreignKey: 'last_message_id', as: 'chatsConversations' });
  
    // ChatsConversationsParticipants belongsTo ChatsConversations
    ChatsConversationsParticipants.belongsTo(ChatsConversations, { foreignKey: 'conversation_id', as: 'conversation' });
    ChatsConversations.hasMany(ChatsConversationsParticipants, { foreignKey: 'conversation_id', as: 'chatsConversationsParticipants' });
  
    // ChatsConversationsParticipants belongsTo Users
    ChatsConversationsParticipants.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ChatsConversationsParticipants, { foreignKey: 'user_id', as: 'chatsConversationsParticipants' });
  
    // ChatsMessages belongsTo Users
    ChatsMessages.belongsTo(Users, { foreignKey: 'receiver_id', as: 'receiver' });
    Users.hasMany(ChatsMessages, { foreignKey: 'receiver_id', as: 'chatsMessages' });
  
    // ChatsMessages belongsTo Users
    ChatsMessages.belongsTo(Users, { foreignKey: 'sender_id', as: 'sender' });
    Users.hasMany(ChatsMessages, { foreignKey: 'sender_id', as: 'chatsMessages' });
  
    // ChatsRooms belongsTo Users
    ChatsRooms.belongsTo(Users, { foreignKey: 'created_by', as: 'createdBy' });
    Users.hasMany(ChatsRooms, { foreignKey: 'created_by', as: 'chatsRooms' });
  
    // ChatsRoomsMembers belongsTo ChatsRooms
    ChatsRoomsMembers.belongsTo(ChatsRooms, { foreignKey: 'room_id', as: 'room' });
    ChatsRooms.hasMany(ChatsRoomsMembers, { foreignKey: 'room_id', as: 'chatsRoomsMembers' });
  
    // ChatsRoomsMembers belongsTo Users
    ChatsRoomsMembers.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ChatsRoomsMembers, { foreignKey: 'user_id', as: 'chatsRoomsMembers' });
  
    // ChatsRoomsMessages belongsTo ChatsRooms
    ChatsRoomsMessages.belongsTo(ChatsRooms, { foreignKey: 'room_id', as: 'room' });
    ChatsRooms.hasMany(ChatsRoomsMessages, { foreignKey: 'room_id', as: 'chatsRoomsMessages' });
  
    // ChatsRoomsMessages belongsTo Users
    ChatsRoomsMessages.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ChatsRoomsMessages, { foreignKey: 'user_id', as: 'chatsRoomsMessages' });
  
    // CompaniesDepartments belongsTo Companies
    CompaniesDepartments.belongsTo(Companies, { foreignKey: 'company_id', as: 'company' });
    Companies.hasMany(CompaniesDepartments, { foreignKey: 'company_id', as: 'companiesDepartments' });
  
    // CompaniesEmployees belongsTo CompaniesDepartments
    CompaniesEmployees.belongsTo(CompaniesDepartments, { foreignKey: 'company_department_id', as: 'companyDepartment' });
    CompaniesDepartments.hasMany(CompaniesEmployees, { foreignKey: 'company_department_id', as: 'companiesEmployees' });
  
    // CompaniesEmployees belongsTo Companies
    CompaniesEmployees.belongsTo(Companies, { foreignKey: 'company_id', as: 'company' });
    Companies.hasMany(CompaniesEmployees, { foreignKey: 'company_id', as: 'companiesEmployees' });
  
    // CompaniesEmployees belongsTo Users
    CompaniesEmployees.belongsTo(Users, { foreignKey: 'employee_id', as: 'employee' });
    Users.hasMany(CompaniesEmployees, { foreignKey: 'employee_id', as: 'companiesEmployees' });
  
    // CompaniesEmployeesRoles belongsTo CompaniesEmployees
    CompaniesEmployeesRoles.belongsTo(CompaniesEmployees, { foreignKey: 'company_employee_id', as: 'companyEmployee' });
    CompaniesEmployees.hasMany(CompaniesEmployeesRoles, { foreignKey: 'company_employee_id', as: 'companiesEmployeesRoles' });
  
    // ConsultationRoomMessages belongsTo ConsultationRooms
    ConsultationRoomMessages.belongsTo(ConsultationRooms, { foreignKey: 'consultation_room_id', as: 'consultationRoom' });
    ConsultationRooms.hasMany(ConsultationRoomMessages, { foreignKey: 'consultation_room_id', as: 'consultationRoomMessages' });
  
    // ConsultationRoomMessages belongsTo Users
    ConsultationRoomMessages.belongsTo(Users, { foreignKey: 'sender_id', as: 'sender' });
    Users.hasMany(ConsultationRoomMessages, { foreignKey: 'sender_id', as: 'consultationRoomMessages' });
  
    // ConsultationRooms belongsTo Users
    ConsultationRooms.belongsTo(Users, { foreignKey: 'client_id', as: 'client' });
    Users.hasMany(ConsultationRooms, { foreignKey: 'client_id', as: 'consultationRooms' });
  
    // ConsultationRooms belongsTo Users
    ConsultationRooms.belongsTo(Users, { foreignKey: 'consultant_id', as: 'consultant' });
    Users.hasMany(ConsultationRooms, { foreignKey: 'consultant_id', as: 'consultationRooms' });
  
    // ConsultationRooms belongsTo ConsultationTypes
    ConsultationRooms.belongsTo(ConsultationTypes, { foreignKey: 'consultation_type_id', as: 'consultationType' });
    ConsultationTypes.hasMany(ConsultationRooms, { foreignKey: 'consultation_type_id', as: 'consultationRooms' });
  
    // ConsultationTypes belongsTo Users
    ConsultationTypes.belongsTo(Users, { foreignKey: 'current_consultant_id', as: 'currentConsultant' });
    Users.hasMany(ConsultationTypes, { foreignKey: 'current_consultant_id', as: 'consultationTypes' });
  
    // CreditConvertionRequests belongsTo Users
    CreditConvertionRequests.belongsTo(Users, { foreignKey: 'action_by', as: 'actionBy' });
    Users.hasMany(CreditConvertionRequests, { foreignKey: 'action_by', as: 'creditConvertionRequests' });
  
    // CreditConvertionRequests belongsTo Users
    CreditConvertionRequests.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(CreditConvertionRequests, { foreignKey: 'student_id', as: 'creditConvertionRequests' });
  
    // CreditConvertionRequestsSubjects belongsTo CreditConvertionRequests
    CreditConvertionRequestsSubjects.belongsTo(CreditConvertionRequests, { foreignKey: 'request_id', as: 'request' });
    CreditConvertionRequests.hasMany(CreditConvertionRequestsSubjects, { foreignKey: 'request_id', as: 'creditConvertionRequestsSubjects' });
  
    // CreditConvertionRequestsSubjects belongsTo Users
    CreditConvertionRequestsSubjects.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(CreditConvertionRequestsSubjects, { foreignKey: 'student_id', as: 'creditConvertionRequestsSubjects' });
  
    // CreditConvertionRequestsSubjects belongsTo Subjects
    CreditConvertionRequestsSubjects.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(CreditConvertionRequestsSubjects, { foreignKey: 'subject_id', as: 'creditConvertionRequestsSubjects' });
  
    // DiscussionForumComments belongsTo DiscussionForums
    DiscussionForumComments.belongsTo(DiscussionForums, { foreignKey: 'df_id', as: 'df' });
    DiscussionForums.hasMany(DiscussionForumComments, { foreignKey: 'df_id', as: 'discussionForumComments' });
  
    // DiscussionForumComments belongsTo Users
    DiscussionForumComments.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(DiscussionForumComments, { foreignKey: 'user_id', as: 'discussionForumComments' });
  
    // DiscussionForumReplies belongsTo DiscussionForumComments
    DiscussionForumReplies.belongsTo(DiscussionForumComments, { foreignKey: 'comment_id', as: 'comment' });
    DiscussionForumComments.hasMany(DiscussionForumReplies, { foreignKey: 'comment_id', as: 'discussionForumReplies' });
  
    // DiscussionForumReplies belongsTo Users
    DiscussionForumReplies.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(DiscussionForumReplies, { foreignKey: 'user_id', as: 'discussionForumReplies' });
  
    // DiscussionForums belongsTo Sessions
    DiscussionForums.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(DiscussionForums, { foreignKey: 'session_id', as: 'discussionForums' });
  
    // DiscussionForums belongsTo Users
    DiscussionForums.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(DiscussionForums, { foreignKey: 'user_id', as: 'discussionForums' });
  
    // DiscussionLikes belongsTo Users
    DiscussionLikes.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(DiscussionLikes, { foreignKey: 'user_id', as: 'discussionLikes' });
  
    // DiscussionReports belongsTo Users
    DiscussionReports.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(DiscussionReports, { foreignKey: 'user_id', as: 'discussionReports' });
  
    // DrillSimulationAssessmentsMeetings belongsTo Users
    DrillSimulationAssessmentsMeetings.belongsTo(Users, { foreignKey: 'assessor_id', as: 'assessor' });
    Users.hasMany(DrillSimulationAssessmentsMeetings, { foreignKey: 'assessor_id', as: 'drillSimulationAssessmentsMeetings' });
  
    // DrillSimulationAssessmentsSchedules belongsTo Users
    DrillSimulationAssessmentsSchedules.belongsTo(Users, { foreignKey: 'assessor_id', as: 'assessor' });
    Users.hasMany(DrillSimulationAssessmentsSchedules, { foreignKey: 'assessor_id', as: 'drillSimulationAssessmentsSchedules' });
  
    // DrillSimulationAssessmentsSchedules belongsTo DrillSimulationAssessmentsMeetings
    DrillSimulationAssessmentsSchedules.belongsTo(DrillSimulationAssessmentsMeetings, { foreignKey: 'meeting_id', as: 'meeting' });
    DrillSimulationAssessmentsMeetings.hasMany(DrillSimulationAssessmentsSchedules, { foreignKey: 'meeting_id', as: 'drillSimulationAssessmentsSchedules' });
  
    // EventParticipants belongsTo Events
    EventParticipants.belongsTo(Events, { foreignKey: 'event_id', as: 'event' });
    Events.hasMany(EventParticipants, { foreignKey: 'event_id', as: 'eventParticipants' });
  
    // EventsParticipants belongsTo Events
    EventsParticipants.belongsTo(Events, { foreignKey: 'event_id', as: 'event' });
    Events.hasMany(EventsParticipants, { foreignKey: 'event_id', as: 'eventsParticipants' });
  
    // EventsParticipants belongsTo Users
    EventsParticipants.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(EventsParticipants, { foreignKey: 'user_id', as: 'eventsParticipants' });
  
    // GradingRubrics belongsTo Users
    GradingRubrics.belongsTo(Users, { foreignKey: 'created_by', as: 'createdBy' });
    Users.hasMany(GradingRubrics, { foreignKey: 'created_by', as: 'gradingRubrics' });
  
    // GradingRubricsCriteriaDetails belongsTo GradingRubricsCriteria
    GradingRubricsCriteriaDetails.belongsTo(GradingRubricsCriteria, { foreignKey: 'criterion_id', as: 'criterion' });
    GradingRubricsCriteria.hasMany(GradingRubricsCriteriaDetails, { foreignKey: 'criterion_id', as: 'gradingRubricsCriteriaDetails' });
  
    // GradingRubricsCriteria belongsTo GradingRubrics
    GradingRubricsCriteria.belongsTo(GradingRubrics, { foreignKey: 'rubric_id', as: 'rubric' });
    GradingRubrics.hasMany(GradingRubricsCriteria, { foreignKey: 'rubric_id', as: 'gradingRubricsCriteria' });
  
    // GradingRubrics belongsTo Majors
    GradingRubrics.belongsTo(Majors, { foreignKey: 'major_id', as: 'major' });
    Majors.hasMany(GradingRubrics, { foreignKey: 'major_id', as: 'gradingRubrics' });
  
    // InboxMessages belongsTo Users
    InboxMessages.belongsTo(Users, { foreignKey: 'receiver_id', as: 'receiver' });
    Users.hasMany(InboxMessages, { foreignKey: 'receiver_id', as: 'inboxMessages' });
  
    // InboxMessages belongsTo Users
    InboxMessages.belongsTo(Users, { foreignKey: 'sender_id', as: 'sender' });
    Users.hasMany(InboxMessages, { foreignKey: 'sender_id', as: 'inboxMessages' });
  
    // InternshipStudentMentors belongsTo Mentors
    InternshipStudentMentors.belongsTo(Mentors, { foreignKey: 'mentor_id', as: 'mentor' });
    Mentors.hasMany(InternshipStudentMentors, { foreignKey: 'mentor_id', as: 'internshipStudentMentors' });
  
    // InternshipStudentMentors belongsTo Users
    InternshipStudentMentors.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(InternshipStudentMentors, { foreignKey: 'student_id', as: 'internshipStudentMentors' });
  
    // JobApplications belongsTo Jobs
    JobApplications.belongsTo(Jobs, { foreignKey: 'job_id', as: 'job' });
    Jobs.hasMany(JobApplications, { foreignKey: 'job_id', as: 'jobApplications' });
  
    // JobApplications belongsTo Users
    JobApplications.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(JobApplications, { foreignKey: 'user_id', as: 'jobApplications' });
  
    // LeaderboardHistories belongsTo Users
    LeaderboardHistories.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(LeaderboardHistories, { foreignKey: 'student_id', as: 'leaderboardHistories' });
  
    // Majors belongsTo Faculties
    Majors.belongsTo(Faculties, { foreignKey: 'faculty_id', as: 'faculty' });
    Faculties.hasMany(Majors, { foreignKey: 'faculty_id', as: 'majors' });
  
    // Majors belongsTo Users
    Majors.belongsTo(Users, { foreignKey: 'major_head_id', as: 'majorHead' });
    Users.hasMany(Majors, { foreignKey: 'major_head_id', as: 'majors' });
  
    // Meetings belongsTo Users
    Meetings.belongsTo(Users, { foreignKey: 'assessor_id', as: 'assessor' });
    Users.hasMany(Meetings, { foreignKey: 'assessor_id', as: 'meetings' });
  
    // Meetings belongsTo Users
    Meetings.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(Meetings, { foreignKey: 'student_id', as: 'meetings' });
  
    // Mentors belongsTo Partners
    Mentors.belongsTo(Partners, { foreignKey: 'partner_id', as: 'partner' });
    Partners.hasMany(Mentors, { foreignKey: 'partner_id', as: 'mentors' });
  
    // ModulesAdmin belongsTo Sessions
    ModulesAdmin.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(ModulesAdmin, { foreignKey: 'session_id', as: 'modulesAdmin' });
  
    // ModulesArticles belongsTo Modules
    ModulesArticles.belongsTo(Modules, { foreignKey: 'module_id', as: 'module' });
    Modules.hasMany(ModulesArticles, { foreignKey: 'module_id', as: 'modulesArticles' });
  
    // ModulesDocuments belongsTo Modules
    ModulesDocuments.belongsTo(Modules, { foreignKey: 'module_id', as: 'module' });
    Modules.hasMany(ModulesDocuments, { foreignKey: 'module_id', as: 'modulesDocuments' });
  
    // ModulesJournals belongsTo Modules
    ModulesJournals.belongsTo(Modules, { foreignKey: 'module_id', as: 'module' });
    Modules.hasMany(ModulesJournals, { foreignKey: 'module_id', as: 'modulesJournals' });
  
    // Modules belongsTo Sessions
    Modules.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(Modules, { foreignKey: 'session_id', as: 'modules' });
  
    // ModulesVideos belongsTo Modules
    ModulesVideos.belongsTo(Modules, { foreignKey: 'module_id', as: 'module' });
    Modules.hasMany(ModulesVideos, { foreignKey: 'module_id', as: 'modulesVideos' });
  
    // Notifications belongsTo Users
    Notifications.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(Notifications, { foreignKey: 'user_id', as: 'notifications' });
  
    // PartnersProposals belongsTo Partners
    PartnersProposals.belongsTo(Partners, { foreignKey: 'partner_id', as: 'partner' });
    Partners.hasMany(PartnersProposals, { foreignKey: 'partner_id', as: 'partnersProposals' });
  
    // Partners belongsTo Users
    Partners.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(Partners, { foreignKey: 'user_id', as: 'partners' });
  
    // PositionSkills belongsTo Positions
    PositionSkills.belongsTo(Positions, { foreignKey: 'position_id', as: 'position' });
    Positions.hasMany(PositionSkills, { foreignKey: 'position_id', as: 'positionSkills' });
  
    // Positions belongsTo Partners
    Positions.belongsTo(Partners, { foreignKey: 'partner_id', as: 'partner' });
    Partners.hasMany(Positions, { foreignKey: 'partner_id', as: 'positions' });
  
    // PositionsSkills belongsTo Positions
    PositionsSkills.belongsTo(Positions, { foreignKey: 'position_id', as: 'position' });
    Positions.hasMany(PositionsSkills, { foreignKey: 'position_id', as: 'positionsSkills' });
  
    // PositionsSkills belongsTo ProgramPositions
    PositionsSkills.belongsTo(ProgramPositions, { foreignKey: 'position_id', as: 'position' });
    ProgramPositions.hasMany(PositionsSkills, { foreignKey: 'position_id', as: 'positionsSkills' });
  
    // PositionsSkills belongsTo ProgramPositions
    PositionsSkills.belongsTo(ProgramPositions, { foreignKey: 'program_position_id', as: 'programPosition' });
    ProgramPositions.hasMany(PositionsSkills, { foreignKey: 'program_position_id', as: 'positionsSkills' });
  
    // ProgramPositionSkills belongsTo ProgramPositions
    ProgramPositionSkills.belongsTo(ProgramPositions, { foreignKey: 'position_id', as: 'position' });
    ProgramPositions.hasMany(ProgramPositionSkills, { foreignKey: 'position_id', as: 'programPositionSkills' });
  
    // ProgramPositions belongsTo Cycles
    ProgramPositions.belongsTo(Cycles, { foreignKey: 'cycle_id', as: 'cycle' });
    Cycles.hasMany(ProgramPositions, { foreignKey: 'cycle_id', as: 'programPositions' });
  
    // ProgramPositions belongsTo Partners
    ProgramPositions.belongsTo(Partners, { foreignKey: 'partner_id', as: 'partner' });
    Partners.hasMany(ProgramPositions, { foreignKey: 'partner_id', as: 'programPositions' });
  
    // ProgramPositions belongsTo PartnersProposals
    ProgramPositions.belongsTo(PartnersProposals, { foreignKey: 'proposal_id', as: 'proposal' });
    PartnersProposals.hasMany(ProgramPositions, { foreignKey: 'proposal_id', as: 'programPositions' });
  
    // ProgramsPositionSkills belongsTo ProgramPositions
    ProgramsPositionSkills.belongsTo(ProgramPositions, { foreignKey: 'position_id', as: 'position' });
    ProgramPositions.hasMany(ProgramsPositionSkills, { foreignKey: 'position_id', as: 'programsPositionSkills' });
  
    // ProgressQuestionAnswers belongsTo QuizzesAnswers
    ProgressQuestionAnswers.belongsTo(QuizzesAnswers, { foreignKey: 'answer_id', as: 'answer' });
    QuizzesAnswers.hasMany(ProgressQuestionAnswers, { foreignKey: 'answer_id', as: 'progressQuestionAnswers' });
  
    // ProgressQuestionAnswers belongsTo StudentSessionProgress
    ProgressQuestionAnswers.belongsTo(StudentSessionProgress, { foreignKey: 'progress_id', as: 'progress' });
    StudentSessionProgress.hasMany(ProgressQuestionAnswers, { foreignKey: 'progress_id', as: 'progressQuestionAnswers' });
  
    // ProgressQuestionAnswers belongsTo QuizzesQuestions
    ProgressQuestionAnswers.belongsTo(QuizzesQuestions, { foreignKey: 'question_id', as: 'question' });
    QuizzesQuestions.hasMany(ProgressQuestionAnswers, { foreignKey: 'question_id', as: 'progressQuestionAnswers' });
  
    // QuizzesAnswers belongsTo QuizzesQuestions
    QuizzesAnswers.belongsTo(QuizzesQuestions, { foreignKey: 'question_id', as: 'question' });
    QuizzesQuestions.hasMany(QuizzesAnswers, { foreignKey: 'question_id', as: 'quizzesAnswers' });
  
    // QuizzesQuestions belongsTo Quizzes
    QuizzesQuestions.belongsTo(Quizzes, { foreignKey: 'quiz_id', as: 'quiz' });
    Quizzes.hasMany(QuizzesQuestions, { foreignKey: 'quiz_id', as: 'quizzesQuestions' });
  
    // Quizzes belongsTo Sessions
    Quizzes.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(Quizzes, { foreignKey: 'session_id', as: 'quizzes' });
  
    // RecruitmentAgendas belongsTo RecruitmentDepartments
    RecruitmentAgendas.belongsTo(RecruitmentDepartments, { foreignKey: 'department_id', as: 'department' });
    RecruitmentDepartments.hasMany(RecruitmentAgendas, { foreignKey: 'department_id', as: 'recruitmentAgendas' });
  
    // RecruitmentAgendas belongsTo RecruitmentParticipants
    RecruitmentAgendas.belongsTo(RecruitmentParticipants, { foreignKey: 'participant_id', as: 'participant' });
    RecruitmentParticipants.hasMany(RecruitmentAgendas, { foreignKey: 'participant_id', as: 'recruitmentAgendas' });
  
    // RecruitmentAgendas belongsTo RecruitmentSchedules
    RecruitmentAgendas.belongsTo(RecruitmentSchedules, { foreignKey: 'schedule_id', as: 'schedule' });
    RecruitmentSchedules.hasMany(RecruitmentAgendas, { foreignKey: 'schedule_id', as: 'recruitmentAgendas' });
  
    // RecruitmentAgendas belongsTo Users
    RecruitmentAgendas.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(RecruitmentAgendas, { foreignKey: 'student_id', as: 'recruitmentAgendas' });
  
    // RecruitmentParticipants belongsTo RecruitmentDepartments
    RecruitmentParticipants.belongsTo(RecruitmentDepartments, { foreignKey: 'department_id', as: 'department' });
    RecruitmentDepartments.hasMany(RecruitmentParticipants, { foreignKey: 'department_id', as: 'recruitmentParticipants' });
  
    // RecruitmentSchedules belongsTo RecruitmentDepartments
    RecruitmentSchedules.belongsTo(RecruitmentDepartments, { foreignKey: 'department_id', as: 'department' });
    RecruitmentDepartments.hasMany(RecruitmentSchedules, { foreignKey: 'department_id', as: 'recruitmentSchedules' });
  
    // ReportActions belongsTo Reports
    ReportActions.belongsTo(Reports, { foreignKey: 'report_id', as: 'report' });
    Reports.hasMany(ReportActions, { foreignKey: 'report_id', as: 'reportActions' });
  
    // ReportActions belongsTo Users
    ReportActions.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ReportActions, { foreignKey: 'user_id', as: 'reportActions' });
  
    // ReportDetails belongsTo Reports
    ReportDetails.belongsTo(Reports, { foreignKey: 'report_id', as: 'report' });
    Reports.hasMany(ReportDetails, { foreignKey: 'report_id', as: 'reportDetails' });
  
    // ReportDetails belongsTo Users
    ReportDetails.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(ReportDetails, { foreignKey: 'user_id', as: 'reportDetails' });
  
    // Reports belongsTo Activities
    Reports.belongsTo(Activities, { foreignKey: 'activity_id', as: 'activity' });
    Activities.hasMany(Reports, { foreignKey: 'activity_id', as: 'reports' });
  
    // Reports belongsTo Users
    Reports.belongsTo(Users, { foreignKey: 'user__id', as: 'user' });
    Users.hasMany(Reports, { foreignKey: 'user__id', as: 'reports' });
  
    // Reports belongsTo Users
    Reports.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(Reports, { foreignKey: 'user_id', as: 'reports' });
  
    // Roleplays belongsTo Users
    Roleplays.belongsTo(Users, { foreignKey: 'created_by', as: 'createdBy' });
    Users.hasMany(Roleplays, { foreignKey: 'created_by', as: 'roleplays' });
  
    // Roleplays belongsTo GradingRubrics
    Roleplays.belongsTo(GradingRubrics, { foreignKey: 'rubric_id', as: 'rubric' });
    GradingRubrics.hasMany(Roleplays, { foreignKey: 'rubric_id', as: 'roleplays' });
  
    // Roleplays belongsTo Sessions
    Roleplays.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(Roleplays, { foreignKey: 'session_id', as: 'roleplays' });
  
    // Roleplays belongsTo Subjects
    Roleplays.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(Roleplays, { foreignKey: 'subject_id', as: 'roleplays' });
  
    // RoleplaysTeams belongsTo Users
    RoleplaysTeams.belongsTo(Users, { foreignKey: 'master_id', as: 'master' });
    Users.hasMany(RoleplaysTeams, { foreignKey: 'master_id', as: 'roleplaysTeams' });
  
    // RoleplaysTeamsMembers belongsTo RoleplaysTeamsSchedules
    RoleplaysTeamsMembers.belongsTo(RoleplaysTeamsSchedules, { foreignKey: 'schedule_id', as: 'schedule' });
    RoleplaysTeamsSchedules.hasMany(RoleplaysTeamsMembers, { foreignKey: 'schedule_id', as: 'roleplaysTeamsMembers' });
  
    // RoleplaysTeamsMembers belongsTo Users
    RoleplaysTeamsMembers.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(RoleplaysTeamsMembers, { foreignKey: 'user_id', as: 'roleplaysTeamsMembers' });
  
    // RoleplaysTeams belongsTo Roleplays
    RoleplaysTeams.belongsTo(Roleplays, { foreignKey: 'roleplay_id', as: 'roleplay' });
    Roleplays.hasMany(RoleplaysTeams, { foreignKey: 'roleplay_id', as: 'roleplaysTeams' });
  
    // RoleplaysTeams belongsTo Users
    RoleplaysTeams.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(RoleplaysTeams, { foreignKey: 'student_id', as: 'roleplaysTeams' });
  
    // SavedPositions belongsTo ProgramPositions
    SavedPositions.belongsTo(ProgramPositions, { foreignKey: 'position_id', as: 'position' });
    ProgramPositions.hasMany(SavedPositions, { foreignKey: 'position_id', as: 'savedPositions' });
  
    // SavedPositions belongsTo Users
    SavedPositions.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(SavedPositions, { foreignKey: 'student_id', as: 'savedPositions' });
  
    // SessionsMentorings belongsTo Users
    SessionsMentorings.belongsTo(Users, { foreignKey: 'teacher_id', as: 'teacher' });
    Users.hasMany(SessionsMentorings, { foreignKey: 'teacher_id', as: 'sessionsMentorings' });
  
    // SessionsReflectionsComments belongsTo SessionsReflections
    SessionsReflectionsComments.belongsTo(SessionsReflections, { foreignKey: 'reflection_id', as: 'reflection' });
    SessionsReflections.hasMany(SessionsReflectionsComments, { foreignKey: 'reflection_id', as: 'sessionsReflectionsComments' });
  
    // SessionsReflectionsCommentsReplies belongsTo SessionsReflectionsComments
    SessionsReflectionsCommentsReplies.belongsTo(SessionsReflectionsComments, { foreignKey: 'comment_id', as: 'comment' });
    SessionsReflectionsComments.hasMany(SessionsReflectionsCommentsReplies, { foreignKey: 'comment_id', as: 'sessionsReflectionsCommentsReplies' });
  
    // SessionsReflectionsCommentsReplies belongsTo Users
    SessionsReflectionsCommentsReplies.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(SessionsReflectionsCommentsReplies, { foreignKey: 'user_id', as: 'sessionsReflectionsCommentsReplies' });
  
    // SessionsReflectionsComments belongsTo Users
    SessionsReflectionsComments.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(SessionsReflectionsComments, { foreignKey: 'user_id', as: 'sessionsReflectionsComments' });
  
    // SessionsReflectionsLikes belongsTo SessionsReflections
    SessionsReflectionsLikes.belongsTo(SessionsReflections, { foreignKey: 'reflection_id', as: 'reflection' });
    SessionsReflections.hasMany(SessionsReflectionsLikes, { foreignKey: 'reflection_id', as: 'sessionsReflectionsLikes' });
  
    // SessionsReflectionsLikes belongsTo Users
    SessionsReflectionsLikes.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(SessionsReflectionsLikes, { foreignKey: 'user_id', as: 'sessionsReflectionsLikes' });
  
    // SessionsReflections belongsTo Sessions
    SessionsReflections.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(SessionsReflections, { foreignKey: 'session_id', as: 'sessionsReflections' });
  
    // SessionsReflections belongsTo Users
    SessionsReflections.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(SessionsReflections, { foreignKey: 'student_id', as: 'sessionsReflections' });
  
    // Sessions belongsTo Subjects
    Sessions.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(Sessions, { foreignKey: 'subject_id', as: 'sessions' });
  
    // SessionsTeacherAssessment belongsTo Subjects
    SessionsTeacherAssessment.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(SessionsTeacherAssessment, { foreignKey: 'subject_id', as: 'sessionsTeacherAssessment' });
  
    // StudentEvents belongsTo Events
    StudentEvents.belongsTo(Events, { foreignKey: 'event_id', as: 'event' });
    Events.hasMany(StudentEvents, { foreignKey: 'event_id', as: 'studentEvents' });
  
    // StudentEvents belongsTo Users
    StudentEvents.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(StudentEvents, { foreignKey: 'student_id', as: 'studentEvents' });
  
    // StudentMajors belongsTo Majors
    StudentMajors.belongsTo(Majors, { foreignKey: 'major_id', as: 'major' });
    Majors.hasMany(StudentMajors, { foreignKey: 'major_id', as: 'studentMajors' });
  
    // StudentMajors belongsTo Semesters
    StudentMajors.belongsTo(Semesters, { foreignKey: 'semester_id', as: 'semester' });
    Semesters.hasMany(StudentMajors, { foreignKey: 'semester_id', as: 'studentMajors' });
  
    // StudentMajors belongsTo Users
    StudentMajors.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(StudentMajors, { foreignKey: 'student_id', as: 'studentMajors' });
  
    // StudentSessionProgress belongsTo Sessions
    StudentSessionProgress.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(StudentSessionProgress, { foreignKey: 'session_id', as: 'studentSessionProgress' });
  
    // StudentSessionProgress belongsTo Users
    StudentSessionProgress.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(StudentSessionProgress, { foreignKey: 'student_id', as: 'studentSessionProgress' });
  
    // StudentSessionProgress belongsTo Subjects
    StudentSessionProgress.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(StudentSessionProgress, { foreignKey: 'subject_id', as: 'studentSessionProgress' });
  
    // StudentSessions belongsTo Sessions
    StudentSessions.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(StudentSessions, { foreignKey: 'session_id', as: 'studentSessions' });
  
    // StudentSessions belongsTo Users
    StudentSessions.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(StudentSessions, { foreignKey: 'student_id', as: 'studentSessions' });
  
    // StudentSubjects belongsTo Semesters
    StudentSubjects.belongsTo(Semesters, { foreignKey: 'semester_id', as: 'semester' });
    Semesters.hasMany(StudentSubjects, { foreignKey: 'semester_id', as: 'studentSubjects' });
  
    // StudentSubjects belongsTo Users
    StudentSubjects.belongsTo(Users, { foreignKey: 'student_id', as: 'student' });
    Users.hasMany(StudentSubjects, { foreignKey: 'student_id', as: 'studentSubjects' });
  
    // StudentSubjects belongsTo Subjects
    StudentSubjects.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(StudentSubjects, { foreignKey: 'subject_id', as: 'studentSubjects' });
  
    // SubjectMajors belongsTo Majors
    SubjectMajors.belongsTo(Majors, { foreignKey: 'major_id', as: 'major' });
    Majors.hasMany(SubjectMajors, { foreignKey: 'major_id', as: 'subjectMajors' });
  
    // SubjectMajors belongsTo Semesters
    SubjectMajors.belongsTo(Semesters, { foreignKey: 'semester_id', as: 'semester' });
    Semesters.hasMany(SubjectMajors, { foreignKey: 'semester_id', as: 'subjectMajors' });
  
    // SubjectMajors belongsTo Subjects
    SubjectMajors.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(SubjectMajors, { foreignKey: 'subject_id', as: 'subjectMajors' });
  
    // SubjectsOutcomes belongsTo Subjects
    SubjectsOutcomes.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(SubjectsOutcomes, { foreignKey: 'subject_id', as: 'subjectsOutcomes' });
  
    // SubjectsSessionsContentOrders belongsTo Sessions
    SubjectsSessionsContentOrders.belongsTo(Sessions, { foreignKey: 'session_id', as: 'session' });
    Sessions.hasMany(SubjectsSessionsContentOrders, { foreignKey: 'session_id', as: 'subjectsSessionsContentOrders' });
  
    // Subjects belongsTo Users
    Subjects.belongsTo(Users, { foreignKey: 'teacher_id', as: 'teacher' });
    Users.hasMany(Subjects, { foreignKey: 'teacher_id', as: 'subjects' });
  
    // SubmissionDocuments belongsTo StudentSessionProgress
    SubmissionDocuments.belongsTo(StudentSessionProgress, { foreignKey: 'progress_id', as: 'progress' });
    StudentSessionProgress.hasMany(SubmissionDocuments, { foreignKey: 'progress_id', as: 'submissionDocuments' });
  
    // Submissions belongsTo AssignmentsAdmin
    Submissions.belongsTo(AssignmentsAdmin, { foreignKey: 'assignment_id', as: 'assignment' });
    AssignmentsAdmin.hasMany(Submissions, { foreignKey: 'assignment_id', as: 'submissions' });
  
    // SurveysQuestionsAnswers belongsTo SurveysQuestions
    SurveysQuestionsAnswers.belongsTo(SurveysQuestions, { foreignKey: 'question_id', as: 'question' });
    SurveysQuestions.hasMany(SurveysQuestionsAnswers, { foreignKey: 'question_id', as: 'surveysQuestionsAnswers' });
  
    // SurveysQuestions belongsTo Surveys
    SurveysQuestions.belongsTo(Surveys, { foreignKey: 'survey_id', as: 'survey' });
    Surveys.hasMany(SurveysQuestions, { foreignKey: 'survey_id', as: 'surveysQuestions' });
  
    // SurveysResponsesAnswers belongsTo SurveysQuestions
    SurveysResponsesAnswers.belongsTo(SurveysQuestions, { foreignKey: 'question_id', as: 'question' });
    SurveysQuestions.hasMany(SurveysResponsesAnswers, { foreignKey: 'question_id', as: 'surveysResponsesAnswers' });
  
    // SurveysResponsesAnswers belongsTo SurveysResponses
    SurveysResponsesAnswers.belongsTo(SurveysResponses, { foreignKey: 'response_id', as: 'response' });
    SurveysResponses.hasMany(SurveysResponsesAnswers, { foreignKey: 'response_id', as: 'surveysResponsesAnswers' });
  
    // SurveysResponsesAnswers belongsTo Users
    SurveysResponsesAnswers.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(SurveysResponsesAnswers, { foreignKey: 'user_id', as: 'surveysResponsesAnswers' });
  
    // SurveysResponses belongsTo Surveys
    SurveysResponses.belongsTo(Surveys, { foreignKey: 'survey_id', as: 'survey' });
    Surveys.hasMany(SurveysResponses, { foreignKey: 'survey_id', as: 'surveysResponses' });
  
    // SurveysResponses belongsTo Users
    SurveysResponses.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(SurveysResponses, { foreignKey: 'user_id', as: 'surveysResponses' });
  
    // TopicsSubjects belongsTo Subjects
    TopicsSubjects.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });
    Subjects.hasMany(TopicsSubjects, { foreignKey: 'subject_id', as: 'topicsSubjects' });
  
    // TopicsSubjects belongsTo Topics
    TopicsSubjects.belongsTo(Topics, { foreignKey: 'topic_id', as: 'topic' });
    Topics.hasMany(TopicsSubjects, { foreignKey: 'topic_id', as: 'topicsSubjects' });
  
    // UserRoles belongsTo Roles
    UserRoles.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
    Roles.hasMany(UserRoles, { foreignKey: 'role_id', as: 'userRoles' });
  
    // UserRoles belongsTo Users
    UserRoles.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UserRoles, { foreignKey: 'user_id', as: 'userRoles' });
  
    // UserSessions belongsTo Users
    UserSessions.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UserSessions, { foreignKey: 'user_id', as: 'userSessions' });
  
    // UsersActives belongsTo Users
    UsersActives.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UsersActives, { foreignKey: 'user_id', as: 'usersActives' });
  
    // UsersAdministrations belongsTo Cycles
    UsersAdministrations.belongsTo(Cycles, { foreignKey: 'cycle_id', as: 'cycle' });
    Cycles.hasMany(UsersAdministrations, { foreignKey: 'cycle_id', as: 'usersAdministrations' });
  
    // UsersAdministrations belongsTo Users
    UsersAdministrations.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UsersAdministrations, { foreignKey: 'user_id', as: 'usersAdministrations' });
  
    // UsersSearchHistories belongsTo Users
    UsersSearchHistories.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UsersSearchHistories, { foreignKey: 'user_id', as: 'usersSearchHistories' });
  
    // UsersSocketConnections belongsTo Users
    UsersSocketConnections.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
    Users.hasMany(UsersSocketConnections, { foreignKey: 'user_id', as: 'usersSocketConnections' });
  
    // WatchedVideoProgress belongsTo ModulesVideos
    WatchedVideoProgress.belongsTo(ModulesVideos, { foreignKey: 'video_id', as: 'video' });
    ModulesVideos.hasMany(WatchedVideoProgress, { foreignKey: 'video_id', as: 'watchedVideoProgress' });
  

  return {
    Activities,
    AdminAttendence,
    AdminPanelLogs,
    AdminReflection,
    Administrations,
    AdministrationsBiodatas,
    AdministrationsFamilials,
    AdministrationsFiles,
    AnalyticVisits,
    ArticleFavorites,
    ArticleLikes,
    Articles,
    ArticlesCategories,
    ArticlesFavorites,
    ArticlesTags,
    AssessmentCompetencyTests,
    AssessmentCompetencyTestsSchedules,
    Assessments,
    AssessmentsAssessors,
    AssessmentsAssessorsAvailabilities,
    AssessmentsSessions,
    AssessmentsSessionsPartners,
    AssessmentsSessionsRubricsResults,
    AssessmentsSessionsSubmissions,
    AssessmentsSubjectsProgresses,
    AssessmentsSubjectsProgressesAnswers,
    AssignmentDocuments,
    AssignmentFiles,
    Assignments,
    AssignmentsAdmin,
    AvailabilitySchedules,
    Banner,
    BootcampTopics,
    Certificates,
    ChatsConversations,
    ChatsConversationsParticipants,
    ChatsMessages,
    ChatsRooms,
    ChatsRoomsMembers,
    ChatsRoomsMessages,
    CollegeAcademicCohorts,
    CollegeClassEnrollments,
    CollegeClasses,
    CollegeProgramOfferings,
    CollegeStudentRegistrations,
    Companies,
    CompaniesDepartments,
    CompaniesEmployees,
    CompaniesEmployeesRoles,
    ConsultationRoomMessages,
    ConsultationRooms,
    ConsultationTypes,
    CreditConvertionRequests,
    CreditConvertionRequestsSubjects,
    Cycles,
    Dictionarys,
    DiscussionForumComments,
    DiscussionForumReplies,
    DiscussionForums,
    DiscussionLikes,
    DiscussionReports,
    DonationProofs,
    DrillSimulationAssessmentsMeetings,
    DrillSimulationAssessmentsSchedules,
    Drills,
    ErrorLogs,
    EventParticipants,
    Events,
    EventsParticipants,
    Faculties,
    GradingRubrics,
    GradingRubricsCriteria,
    GradingRubricsCriteriaDetails,
    GuidesBooks,
    GuidesDictionaries,
    GuidesFrequentlyAskedQuestions,
    GuidesVideos,
    InboxMessages,
    InternshipStudentMentors,
    JobApplications,
    Jobs,
    LeaderboardHistories,
    Majors,
    Meetings,
    Mentors,
    Modules,
    ModulesAdmin,
    ModulesArticles,
    ModulesDocuments,
    ModulesJournals,
    ModulesVideos,
    Notifications,
    NotificationsMessages,
    NotificationsTemplates,
    Otps,
    Partners,
    PartnersProposals,
    PaymentTransactions,
    PaymentTrasactionItems,
    PositionSkills,
    Positions,
    PositionsSkills,
    ProgramPositionSkills,
    ProgramPositions,
    ProgramsPositionSkills,
    ProgressQuestionAnswers,
    Quizzes,
    QuizzesAnswers,
    QuizzesQuestions,
    RecruitmentAgendas,
    RecruitmentDepartments,
    RecruitmentParticipants,
    RecruitmentSchedules,
    Referrals,
    ReferralsAccesses,
    ReferralsRegistrations,
    ReportActions,
    ReportDetails,
    Reports,
    Roleplay,
    RoleplayPair,
    RoleplayPairs,
    Roleplays,
    RoleplaysSessions,
    RoleplaysTeams,
    RoleplaysTeamsMembers,
    RoleplaysTeamsSchedules,
    Roles,
    SavedPositions,
    Semesters,
    ServerAttributes,
    ServerLogs,
    Sessions,
    SessionsMentorings,
    SessionsReflections,
    SessionsReflectionsComments,
    SessionsReflectionsCommentsReplies,
    SessionsReflectionsLikes,
    SessionsTeacherAssessment,
    SessionsTeacherAssessmentQuestions,
    SessionsTeacherAssessmentQuestionsAnswers,
    SessionsTeacherAssessmentSessionsQuestions,
    SessionsTeacherAssessmentStudentsAnswers,
    SimulationGroupStudents,
    SimulationGroups,
    Simulations,
    StoragesFiles,
    StoragesFilesHistories,
    StudentEvents,
    StudentMajors,
    StudentProfiles,
    StudentSessionProgress,
    StudentSessions,
    StudentSubjects,
    SubjectMajors,
    SubjectSessions,
    Subjects,
    SubjectsOutcomes,
    SubjectsSessionsActivities,
    SubjectsSessionsAssessments,
    SubjectsSessionsContentOrders,
    SubmissionDocuments,
    Submissions,
    Surveys,
    SurveysQuestions,
    SurveysQuestionsAnswers,
    SurveysResponses,
    SurveysResponsesAnswers,
    Tags,
    TeachersRegistrations,
    Topics,
    TopicsSubjects,
    UserRoles,
    UserSessions,
    Users,
    UsersActives,
    UsersAdministrations,
    UsersDelete,
    UsersScreenTimes,
    UsersSearchHistories,
    UsersSocialMedia,
    UsersSocketConnections,
    Videos,
    WatchedVideoProgress,
  };
}

export {
  Activities,
  AdminAttendence,
  AdminPanelLogs,
  AdminReflection,
  Administrations,
  AdministrationsBiodatas,
  AdministrationsFamilials,
  AdministrationsFiles,
  AnalyticVisits,
  ArticleFavorites,
  ArticleLikes,
  Articles,
  ArticlesCategories,
  ArticlesFavorites,
  ArticlesTags,
  AssessmentCompetencyTests,
  AssessmentCompetencyTestsSchedules,
  Assessments,
  AssessmentsAssessors,
  AssessmentsAssessorsAvailabilities,
  AssessmentsSessions,
  AssessmentsSessionsPartners,
  AssessmentsSessionsRubricsResults,
  AssessmentsSessionsSubmissions,
  AssessmentsSubjectsProgresses,
  AssessmentsSubjectsProgressesAnswers,
  AssignmentDocuments,
  AssignmentFiles,
  Assignments,
  AssignmentsAdmin,
  AvailabilitySchedules,
  Banner,
  BootcampTopics,
  Certificates,
  ChatsConversations,
  ChatsConversationsParticipants,
  ChatsMessages,
  ChatsRooms,
  ChatsRoomsMembers,
  ChatsRoomsMessages,
  CollegeAcademicCohorts,
  CollegeClassEnrollments,
  CollegeClasses,
  CollegeProgramOfferings,
  CollegeStudentRegistrations,
  Companies,
  CompaniesDepartments,
  CompaniesEmployees,
  CompaniesEmployeesRoles,
  ConsultationRoomMessages,
  ConsultationRooms,
  ConsultationTypes,
  CreditConvertionRequests,
  CreditConvertionRequestsSubjects,
  Cycles,
  Dictionarys,
  DiscussionForumComments,
  DiscussionForumReplies,
  DiscussionForums,
  DiscussionLikes,
  DiscussionReports,
  DonationProofs,
  DrillSimulationAssessmentsMeetings,
  DrillSimulationAssessmentsSchedules,
  Drills,
  ErrorLogs,
  EventParticipants,
  Events,
  EventsParticipants,
  Faculties,
  GradingRubrics,
  GradingRubricsCriteria,
  GradingRubricsCriteriaDetails,
  GuidesBooks,
  GuidesDictionaries,
  GuidesFrequentlyAskedQuestions,
  GuidesVideos,
  InboxMessages,
  InternshipStudentMentors,
  JobApplications,
  Jobs,
  LeaderboardHistories,
  Majors,
  Meetings,
  Mentors,
  Modules,
  ModulesAdmin,
  ModulesArticles,
  ModulesDocuments,
  ModulesJournals,
  ModulesVideos,
  Notifications,
  NotificationsMessages,
  NotificationsTemplates,
  Otps,
  Partners,
  PartnersProposals,
  PaymentTransactions,
  PaymentTrasactionItems,
  PositionSkills,
  Positions,
  PositionsSkills,
  ProgramPositionSkills,
  ProgramPositions,
  ProgramsPositionSkills,
  ProgressQuestionAnswers,
  Quizzes,
  QuizzesAnswers,
  QuizzesQuestions,
  RecruitmentAgendas,
  RecruitmentDepartments,
  RecruitmentParticipants,
  RecruitmentSchedules,
  Referrals,
  ReferralsAccesses,
  ReferralsRegistrations,
  ReportActions,
  ReportDetails,
  Reports,
  Roleplay,
  RoleplayPair,
  RoleplayPairs,
  Roleplays,
  RoleplaysSessions,
  RoleplaysTeams,
  RoleplaysTeamsMembers,
  RoleplaysTeamsSchedules,
  Roles,
  SavedPositions,
  Semesters,
  ServerAttributes,
  ServerLogs,
  Sessions,
  SessionsMentorings,
  SessionsReflections,
  SessionsReflectionsComments,
  SessionsReflectionsCommentsReplies,
  SessionsReflectionsLikes,
  SessionsTeacherAssessment,
  SessionsTeacherAssessmentQuestions,
  SessionsTeacherAssessmentQuestionsAnswers,
  SessionsTeacherAssessmentSessionsQuestions,
  SessionsTeacherAssessmentStudentsAnswers,
  SimulationGroupStudents,
  SimulationGroups,
  Simulations,
  StoragesFiles,
  StoragesFilesHistories,
  StudentEvents,
  StudentMajors,
  StudentProfiles,
  StudentSessionProgress,
  StudentSessions,
  StudentSubjects,
  SubjectMajors,
  SubjectSessions,
  Subjects,
  SubjectsOutcomes,
  SubjectsSessionsActivities,
  SubjectsSessionsAssessments,
  SubjectsSessionsContentOrders,
  SubmissionDocuments,
  Submissions,
  Surveys,
  SurveysQuestions,
  SurveysQuestionsAnswers,
  SurveysResponses,
  SurveysResponsesAnswers,
  Tags,
  TeachersRegistrations,
  Topics,
  TopicsSubjects,
  UserRoles,
  UserSessions,
  Users,
  UsersActives,
  UsersAdministrations,
  UsersDelete,
  UsersScreenTimes,
  UsersSearchHistories,
  UsersSocialMedia,
  UsersSocketConnections,
  Videos,
  WatchedVideoProgress,
};
