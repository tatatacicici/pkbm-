export const quizTempData = {
  data: {
    type: 'QUIZ',
    title: 'Sample Quiz',
    questions_answers: [
      {
        id: '42ee329f-24f5-4b4b-b2d7-a7610f803bdf',
        question: 'What is the capital of France?',
        answers: [
          {
            id: 'ba366440-59b6-4fee-8965-0e11ce95856a',
            answer: 'Paris',
          },
          {
            id: '06f05f48-1a12-473b-938d-247d257368a4',
            answer: 'London',
          },
          {
            id: '591c12d5-54c6-4988-bc05-eee526e618e2',
            answer: 'Berlin',
          },
          {
            id: 'b68e0104-9cc0-481c-a5ce-56d11bd291f2',
            answer: 'Madrid',
          },
        ],
      },
      {
        id: '787475c6-2720-4e31-84c6-75d2e0dfb33b',
        question: 'Which planet is known as the Red Planet?',
        answers: [
          {
            id: '3a045743-66a6-48f8-8eed-d23cd4ec2018',
            answer: 'Mars',
          },
          {
            id: 'ba1ed43b-a480-4980-9abe-294c6901c965',
            answer: 'Venus',
          },
          {
            id: '99bc3a9d-cecf-4647-ba71-fa192ffb60c9',
            answer: 'Jupiter',
          },
          {
            id: 'f0a1a2bc-cd42-4f12-99ad-51ad70e835c2',
            answer: 'Saturn',
          },
        ],
      },
      {
        id: '54fed54a-7a9e-46b0-872e-73652286adae',
        question: 'What is the largest mammal on Earth?',
        answers: [
          {
            id: '6cab5ff1-cf3b-4484-b3d2-9c62afdd27f9',
            answer: 'Blue Whale',
          },
          {
            id: '5e7cf320-1ccf-4aff-916a-27690f057afa',
            answer: 'African Elephant',
          },
          {
            id: 'dbf1a071-fbde-4ed3-9ae4-56a5266ebffe',
            answer: 'Giraffe',
          },
          {
            id: '71f0b826-b396-4082-8bc0-a6143a263590',
            answer: 'Hippopotamus',
          },
        ],
      },
      {
        id: '42ee329f-24f5-4b4b-b2d7-a7610f803bdf',
        question: 'What is the capital of France?',
        answers: [
          {
            id: 'ba366440-59b6-4fee-8965-0e11ce95856a',
            answer: 'Paris',
          },
          {
            id: '06f05f48-1a12-473b-938d-247d257368a4',
            answer: 'London',
          },
          {
            id: '591c12d5-54c6-4988-bc05-eee526e618e2',
            answer: 'Berlin',
          },
          {
            id: 'b68e0104-9cc0-481c-a5ce-56d11bd291f2',
            answer: 'Madrid',
          },
        ],
      },
      {
        id: '787475c6-2720-4e31-84c6-75d2e0dfb33b',
        question: 'Which planet is known as the Red Planet?',
        answers: [
          {
            id: '3a045743-66a6-48f8-8eed-d23cd4ec2018',
            answer: 'Mars',
          },
          {
            id: 'ba1ed43b-a480-4980-9abe-294c6901c965',
            answer: 'Venus',
          },
          {
            id: '99bc3a9d-cecf-4647-ba71-fa192ffb60c9',
            answer: 'Jupiter',
          },
          {
            id: 'f0a1a2bc-cd42-4f12-99ad-51ad70e835c2',
            answer: 'Saturn',
          },
        ],
      },
    ],
    duration: 10,
  },
};

export const quizTakeItem = {
  type: '',
  duration: 0,
  questions_answers: [
    {
      id: '',
      question: '',
      answers: [
        {
          id: 'string',
          answer: 'string',
        },
      ],
    },
  ],
};

export const resultQuiz = {
  right: 8,
  wrong: 2,
  total_question: 10,
  remaining_attempt: 2,
  time_elapsed: 360,
  score: 80,
};

export const translateIndex = (index: string) => {
  switch (index) {
    case '0':
      return 'a';
    case '1':
      return 'b';
    case '2':
      return 'c';
    case '3':
      return 'd';
    case '4':
      return 'e';
    default:
      return 'f';
  }
};
