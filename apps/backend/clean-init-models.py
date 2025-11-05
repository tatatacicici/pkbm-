#!/usr/bin/env python3
import re

# List of model names that have been deleted
deleted_models = [
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
]

# Read the file
with open('src/models/init-models.ts', 'r') as f:
    lines = f.readlines()

# Filter out lines that import or reference deleted models
filtered_lines = []
skip_count = 0

for line in lines:
    should_skip = False
    for model in deleted_models:
        # Check if line contains import or reference to deleted model
        if f'from "./{model}"' in line or f'import {{ {model}' in line or f'import type {{ {model}' in line:
            should_skip = True
            skip_count += 1
            break
        # Also check for model initialization like: Faculties: _Faculties
        if f'{model}:' in line and '_' + model in line:
            should_skip = True
            skip_count += 1
            break
        # Check for model variable references
        if f'_{model}' in line and 'import' not in line:
            should_skip = True
            skip_count += 1
            break
    
    if not should_skip:
        filtered_lines.append(line)

# Write back the filtered content
with open('src/models/init-models.ts', 'w') as f:
    f.writelines(filtered_lines)

print(f'✅ Removed {skip_count} lines referencing deleted models')
print(f'✅ Remaining lines: {len(filtered_lines)}')
