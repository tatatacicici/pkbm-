/**
 * Quizzes Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testQuizzes = [
  {
    id: 'c1111111-1111-1111-1111-111111111111',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Quiz: Operasi Bilangan',
    description: 'Quiz untuk menguji pemahaman operasi bilangan',
    durationSec: 1800, // 30 minutes
    type: 'QUIZ',
    questions: [
      {
        id: 'd1111111-1111-1111-1111-111111111111',
        question: 'Berapa hasil dari 5 + 3?',
        answers: [
          { id: 'e1111111-1111-1111-1111-111111111111', answer: '6', isCorrect: false },
          { id: 'e1111111-1111-1111-2222-222222222222', answer: '7', isCorrect: false },
          { id: 'e1111111-1111-1111-3333-333333333333', answer: '8', isCorrect: true },
          { id: 'e1111111-1111-1111-4444-444444444444', answer: '9', isCorrect: false },
        ],
      },
      {
        id: 'd1111111-2222-2222-2222-222222222222',
        question: 'Berapa hasil dari 10 - 4?',
        answers: [
          { id: 'e1111111-2222-2222-1111-111111111111', answer: '4', isCorrect: false },
          { id: 'e1111111-2222-2222-2222-222222222222', answer: '5', isCorrect: false },
          { id: 'e1111111-2222-2222-3333-333333333333', answer: '6', isCorrect: true },
          { id: 'e1111111-2222-2222-4444-444444444444', answer: '7', isCorrect: false },
        ],
      },
      {
        id: 'd1111111-3333-3333-3333-333333333333',
        question: 'Berapa hasil dari 3 x 4?',
        answers: [
          { id: 'e1111111-3333-3333-1111-111111111111', answer: '10', isCorrect: false },
          { id: 'e1111111-3333-3333-2222-222222222222', answer: '11', isCorrect: false },
          { id: 'e1111111-3333-3333-3333-333333333333', answer: '12', isCorrect: true },
          { id: 'e1111111-3333-3333-4444-444444444444', answer: '13', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 'c2222222-2222-2222-2222-222222222222',
    sessionId: 'a2222222-2222-2222-2222-222222222222',
    title: 'Quiz: Pecahan',
    description: 'Quiz untuk menguji pemahaman pecahan',
    durationSec: 1800,
    type: 'QUIZ',
    questions: [
      {
        id: 'd2222222-1111-1111-1111-111111111111',
        question: 'Berapa hasil dari 1/2 + 1/2?',
        answers: [
          { id: 'e2222222-1111-1111-1111-111111111111', answer: '1/2', isCorrect: false },
          { id: 'e2222222-1111-1111-2222-222222222222', answer: '1', isCorrect: true },
          { id: 'e2222222-1111-1111-3333-333333333333', answer: '2', isCorrect: false },
          { id: 'e2222222-1111-1111-4444-444444444444', answer: '1/4', isCorrect: false },
        ],
      },
      {
        id: 'd2222222-2222-2222-2222-222222222222',
        question: 'Berapa hasil dari 3/4 - 1/4?',
        answers: [
          { id: 'e2222222-2222-2222-1111-111111111111', answer: '1/4', isCorrect: false },
          { id: 'e2222222-2222-2222-2222-222222222222', answer: '2/4', isCorrect: true },
          { id: 'e2222222-2222-2222-3333-333333333333', answer: '3/4', isCorrect: false },
          { id: 'e2222222-2222-2222-4444-444444444444', answer: '4/4', isCorrect: false },
        ],
      },
    ],
  },
];

export async function seedQuizzes() {
  for (const quiz of testQuizzes) {
    // Insert quiz
    await sequelize.query(
      `INSERT INTO quizzes (id, session_id, title, description, duration_sec, type, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         type = EXCLUDED.type,
         updated_at = NOW()`,
      {
        bind: [quiz.id, quiz.sessionId, quiz.title, quiz.description, quiz.durationSec, quiz.type],
        type: QueryTypes.INSERT,
      }
    );

    // Insert questions
    for (const question of quiz.questions) {
      await sequelize.query(
        `INSERT INTO quizzes_questions (id, quiz_id, question, created_at, updated_at)
         VALUES ($1, $2, $3, NOW(), NOW())
         ON CONFLICT (id) DO UPDATE SET
           question = EXCLUDED.question,
           updated_at = NOW()`,
        {
          bind: [question.id, quiz.id, question.question],
          type: QueryTypes.INSERT,
        }
      );

      // Insert answers
      for (const answer of question.answers) {
        await sequelize.query(
          `INSERT INTO quizzes_answers (id, question_id, answer, is_correct, created_at, updated_at)
           VALUES ($1, $2, $3, $4, NOW(), NOW())
           ON CONFLICT (id) DO UPDATE SET
             answer = EXCLUDED.answer,
             is_correct = EXCLUDED.is_correct,
             updated_at = NOW()`,
          {
            bind: [answer.id, question.id, answer.answer, answer.isCorrect],
            type: QueryTypes.INSERT,
          }
        );
      }
    }
  }

  console.log(`   Created ${testQuizzes.length} quizzes with questions and answers`);
}

export async function cleanQuizzes() {
  const ids = testQuizzes.map(q => q.id);
  await sequelize.query(`DELETE FROM quizzes WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}
