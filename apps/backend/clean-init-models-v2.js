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
    'StudentSubjects', 'StudentProfiles', 'StudentEvents',
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
    const trimmed = line.trim();
    
    // Skip empty lines and keep them
    if (!trimmed) return true;
    
    for (const model of deletedModels) {
        // Check for various patterns
        const patterns = [
            `from "./${model}"`,
            `import { ${model}`,
            `import type { ${model}`,
            `export type { ${model}`,
            `${model}Attributes`,
            `${model}CreationAttributes`,
            `${model}:`,  // For object properties like 'Faculties:'
            `${model};`,
            `${model},`
        ];
        
        if (patterns.some(pattern => line.includes(pattern))) {
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
