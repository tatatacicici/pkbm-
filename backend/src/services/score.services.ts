import { Op } from "sequelize";
import { Subjects } from "../models";
import { StudentSubjects } from "../models";
import { StudentSessionProgress } from "../models";
import { AssessmentsSubjectsProgresses } from "../models";
import { NIL } from "uuid";

export class ScoreService{
    /**
     * Rekap nilai semua mata pelajaran yang diambil siswa
     */

    async getSubjectScores(studentId: string){
        const enrollments = await StudentSubjects.findAll({
            where:{
                studentId,
                deletedAt:null as any,
            }as any,
        });

        if (enrollments.length === 0){
            return [];
        }

        const subjectIds = enrollments.map((e: any) => e.subjectId);

        const subjects = await Subjects.findAll({
            where: {
                id: {[Op.in]: subjectIds },
                deletedAt: null as any,
            }as any,
        });

        const results: any[] = [];

        for (const subject of subjects){
            const quizProgresses = await StudentSessionProgress.findAll({
                where:{
                    studentId,
                    subjectId: subject.id,
                    type: 'QUIZ',
                    score: { [Op.ne]: null},
                    deletedAt: null as any,
                }as any,
                order: [['timestampScored', 'DESC'], ['updatedAt', 'DESC']],
            });
            const scores = quizProgresses
            .map(p => p.score)
            .filter((s): s is number => typeof s === 'number');

            const attemptsCount = scores.length;

            const avgScore =
                attemptsCount === 0
                    ? null
                    : Math.round(
                        (scores.reduce((sum, s) => sum + s, 0) / attemptsCount) * 100,
                    ) / 100;
            
            const bestScore = attemptsCount === 0 ? null : Math.max.apply(null, scores as number[]);
            
            const latestScore = attemptsCount === 0 ? null : scores[0];

            const finalAssesment = await AssessmentsSubjectsProgresses.findOne({
                where:{
                    studentId,
                    subjectId: subject.id,
                    deletedAt: null as any,
                } as any,
                order: [['completedAt','DESC'], ['updatedAt','DESC']],
            });

            const finalScore = finalAssesment?.finalScore ?? null;
            const finalStatus = finalAssesment?.status ?? null;


            let passed: boolean | null = null;
            if(finalScore !== null){
                passed = finalScore >=  70;
            }
            if (finalStatus){
                passed = ['PASSED','LULUS','COMPLETED'].includes(finalStatus.toUpperCase());
            }

            results.push({
        subjectId: subject.id,
        subjectName: subject.name,
        subjectCode: subject.subjectCode,
        category: subject.category,
        thumbnail: subject.thumbnail,

        quiz: {
          attemptsCount,
          avgScore,
          bestScore,
          latestScore,
        },

        finalAssessment: finalAssesment
          ? {
              id: finalAssesment.id,
              status: finalStatus,
              finalScore,
              startedAt: finalAssesment.startedAt,
              completedAt: finalAssesment.completedAt,
            }
          : null,

        passed,
      });
    }

    return results;
  }
  /**
   * Detail nilai untuk satu subject: breakdown per quiz/session
   */
  async getSubjectScoreDetail(studentId: string, subjectId: string) {
    const subject = await Subjects.findByPk(subjectId);

    if (!subject) {
      throw new Error('Subject not found');
    }

    // Semua progress QUIZ utk subject ini
    const quizProgresses = await StudentSessionProgress.findAll({
      where: {
        studentId,
        subjectId,
        type: 'QUIZ',
        score: { [Op.ne]: null },
        deletedAt: null as any,
      } as any,
      order: [['timestampScored', 'DESC'], ['updatedAt', 'DESC']],
    });

    const scores = quizProgresses
      .map(p => p.score)
      .filter((s): s is number => typeof s === 'number');

    const attemptsCount = scores.length;

    const avgScore =
      attemptsCount === 0
        ? null
        : Math.round(
            (scores.reduce((sum, s) => sum + s, 0) / attemptsCount) * 100,
          ) / 100;

    const bestScore =
      attemptsCount === 0 ? null : Math.max.apply(null, scores as number[]);

    const latestScore = attemptsCount === 0 ? null : scores[0];

    const finalAssessment = await AssessmentsSubjectsProgresses.findOne({
      where: {
        studentId,
        subjectId,
        deletedAt: null as any,
      } as any,
      order: [['completedAt', 'DESC'], ['updatedAt', 'DESC']],
    });

    const finalScore = finalAssessment?.finalScore ?? null;
    const finalStatus = finalAssessment?.status ?? null;

    let passed: boolean | null = null;
    if (finalScore != null) {
      passed = finalScore >= 70;
    }
    if (finalStatus) {
      passed = ['PASSED', 'LULUS', 'COMPLETED'].includes(
        finalStatus.toUpperCase(),
      );
    }

    return {
      subject: {
        id: subject.id,
        name: subject.name,
        subjectCode: subject.subjectCode,
        category: subject.category,
        thumbnail: subject.thumbnail,
      },
      quizSummary: {
        attemptsCount,
        avgScore,
        bestScore,
        latestScore,
      },
      quizAttempts: quizProgresses.map(p => ({
        id: p.id,
        sessionId: p.sessionId,
        quizId: p.quizId,
        score: p.score,
        status: p.status,
        takenAt: p.timestampTaken,
        submittedAt: p.timestampSubmitted,
        scoredAt: p.timestampScored,
      })),
      finalAssessment: finalAssessment
        ? {
            id: finalAssessment.id,
            status: finalStatus,
            finalScore,
            startedAt: finalAssessment.startedAt,
            completedAt: finalAssessment.completedAt,
          }
        : null,
      passed,
    };
  }
  async checkCertificateEligibility(studentId: string) {
    // Ambil semua subject yg diambil siswa
    const enrollments = await StudentSubjects.findAll({
      where: {
        studentId,
        deletedAt: null as any,
      } as any,
    });

    if (enrollments.length === 0) {
      return {
        eligible: false,
        reason: 'Belum terdaftar di mata pelajaran apapun',
        details: [],
      };
    }

    const subjectIds = enrollments.map((e: any) => e.subjectId);

    const subjects = await Subjects.findAll({
      where: {
        id: { [Op.in]: subjectIds },
        deletedAt: null as any,
      } as any,
    });

    const details: any[] = [];
    let allPassed = true;

    for (const subject of subjects) {
      const asp = await AssessmentsSubjectsProgresses.findOne({
        where: {
          studentId,
          subjectId: subject.id,
          deletedAt: null as any,
        } as any,
        order: [['completedAt', 'DESC'], ['updatedAt', 'DESC']],
      });

      const finalScore = asp?.finalScore ?? null;
      const status = asp?.status ?? null;

      let passed = false;

      if (finalScore != null) {
        passed = finalScore >= 70;
      }
      if (status) {
        passed = ['PASSED', 'LULUS', 'COMPLETED'].includes(
          status.toUpperCase(),
        );
      }

      if (!passed) {
        allPassed = false;
      }

      details.push({
        subjectId: subject.id,
        subjectName: subject.name,
        status,
        finalScore,
        passed,
      });
    }

    return {
      eligible: allPassed,
      details,
    };
  }
}


