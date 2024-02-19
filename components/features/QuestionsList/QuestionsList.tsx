import React from 'react';
import { Question } from '@/types/questions';
import { QuestionsListItem } from './QuestionsListItem';
import { NoResults } from '@/components/shared/NoResults';

interface QuestionsListProps {
  questions?: Question[];
}

export const QuestionsList = (props: QuestionsListProps) => {
  const { questions } = props;

  if (!questions?.length)
    return (
      <NoResults
        title="There’s no question to show"
        description="Be the first to break the silence!&nbsp;🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!&nbsp;💡"
        link={{
          title: 'Ask a Question',
          link: '/ask-question',
        }}
      />
    );

  return (
    <div className="flex flex-col gap-6">
      {questions.map((q) => (
        <QuestionsListItem className="w-full" question={q} key={q._id} />
      ))}
    </div>
  );
};
