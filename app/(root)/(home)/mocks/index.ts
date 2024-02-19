import { Question } from '@/types/questions';

export const questions: Question[] = [
  {
    _id: 1,
    title:
      'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
    author: {
      _id: 1,
      username: 'Amake',
      avatar: 'https://avatars.githubusercontent.com/u/11091224',
    },
    votes: 37,
    views: 285,
    answers: 15,
    createdAt: '2024-02-17T21:23:00.000Z',
    tags: [
      { _id: 1, name: 'javascript' },
      { _id: 2, name: 'react.js' },
      { _id: 3, name: 'invalid fields' },
      { _id: 4, name: 'salesforce' },
    ],
  },
  {
    _id: 2,
    title:
      'An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell',
    author: { _id: 2, username: 'Satheesh' },
    votes: 1202,
    views: 5290,
    answers: 900,
    createdAt: '2024-01-23T12:00:00.000Z',
  },
  {
    _id: 3,
    title:
      'JavaScript validation for a form stops the form data from being submitted to mysql database',
    author: {
      _id: 1,
      username: 'Amake',
      avatar: 'https://avatars.githubusercontent.com/u/11091224',
    },
    votes: 1267,
    views: 5290,
    answers: 900,
    createdAt: '2023-11-15T15:10:00.000Z',
    tags: [
      { _id: 1, name: 'javascript' },
      { _id: 2, name: 'react.js' },
      { _id: 3, name: 'invalid fields' },
      { _id: 4, name: 'salesforce' },
    ],
  },
];
