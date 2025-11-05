const fs = require('fs');

const deletedModels = [
    'Faculties', 'Majors', 'SubjectMajors', 'StudentMajors', 'Subjects',
    'SubjectsOutcomes', 'SubjectSessions', 'SubjectsSessionsActivities',
    'SubjectsSessionsAssessments', 'SubjectsSessionsContentOrders', 'Semesters',
    'CollegeAcademicCohorts', 'CollegeClassEnrollments', 'CollegeClasses',
    'CollegeProgramOfferings', 'CollegeStudentRegistrations',
    'CreditConvertionRequests', 'CreditConvertionRequestsSubjects',
    'Assessments', 'AssessmentsAssessors', 'AssessmentsAssessorsAvailabilities',
    'AssessmentsSessions', 'AssessmentsSessionsPartners',
    'AssessmentsSessionsRubricsResults', 'AssessmentsSessionsSubmissions',
    'AssessmentsSubjectsProgresses', 'AssessmentsSubjectsProgressesAnswers',
    'AssessmentCompetencyTests', 'AssessmentCompetencyTestsSchedules',
    'Sessions', 'SessionsMentorings', 'SessionsReflections',
    'SessionsReflectionsComments', 'SessionsReflectionsCommentsReplies',
    'SessionsReflectionsLikes', 'SessionsTeacherAssessment',
    'SessionsTeacherAssessmentQuestions', 'SessionsTeacherAssessmentQuestionsAnswers',
    'SessionsTeacherAssessmentSessionsQuestions', 'SessionsTeacherAssessmentStudentsAnswers',
    'StudentSessions', 'StudentSessionProgress',
    'Mentors', 'InternshipStudentMentors', 'TeachersRegistrations',
    'StudentSubjects', 'StudentMajors', 'StudentProfiles', 'StudentEvents',
    'GradingRubrics', 'GradingRubricsCriteria', 'GradingRubricsCriteriaDetails',
    'Modules', 'ModulesAdmin', 'ModulesArticles', 'ModulesDocuments',
    'ModulesJournals', 'ModulesVideos', 'Topics', 'TopicsSubjects',
    'Assignments', 'AssignmentsAdmin', 'AssignmentDocuments', 'AssignmentFiles',
    'Submissions', 'SubmissionDocuments',
    'DrillSimulationAssessmentsMeetings', 'DrillSimulationAssessmentsSchedules',
    'Drills', 'Simulations', 'SimulationGroups', 'SimulationGroupStudents'
];

const content = fs.readFileSync('src/models/init-models.ts', 'utf8');
const lines = content.split('\n');

const filtered = lines.filter(line => {
    for (const model of deletedModels) {
        if (line.includes(`from "./${model}"`) || 
            line.includes(`import { ${model}`) || 
            line.includes(`import type { ${model}`) ||
            (line.includes(`${model}:`) && line.includes(`_${model}`)) ||
            (line.includes(`_${model}`) && !line.includes('import'))) {
            return false;
        }
    }
    return true;
});

const originalCount = lines.length;
const removedCount = originalCount - filtered.length;

fs.writeFileSync('src/models/init-models.ts', filtered.join('\n'));

console.log(`✅ Removed ${removedCount} lines referencing deleted models`);
console.log(`✅ Remaining lines: ${filtered.length}`);
