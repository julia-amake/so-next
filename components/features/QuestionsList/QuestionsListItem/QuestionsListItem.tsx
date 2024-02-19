import React from 'react';
import { Question } from '@/types/questions';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Tag } from '@/components/shared/Tag';
import { Avatar } from '@/components/shared/Avatar';
import { Metric } from '@/components/shared/Metric/Metric';
import s from './QuestionsListItem.module.css';

interface QuestionsListItemProps {
  question: Question;
  className?: string;
}

export const QuestionsListItem = (props: QuestionsListItemProps) => {
  const { question, className } = props;
  const { _id, title, tags, author, votes, views, answers, createdAt } =
    question;

  const date = new Date(createdAt).toLocaleDateString('en-En', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className={cn(s.outer, className)}>
      <Link className={s.titleWrapper} href={'/'}>
        <h2 className={s.title}>{title}</h2>
      </Link>
      {!!tags?.length && (
        <ul className={s.tags}>
          {tags.map(({ _id, name }) => (
            <Tag id={_id} name={name} key={_id} />
          ))}
        </ul>
      )}
      <footer className={s.footer}>
        <div className={s.footerLeft}>
          <Link className={s.author} href={`/profile/${author._id}`}>
            <Avatar pic={author.avatar} name={author.username} size={20} />
            {author.username}
          </Link>
          <p className={s.date}>• asked {date}</p>
        </div>
        <div className={s.footerRight}>
          <Metric icon="/assets/icons/like.svg" value={votes} title="Votes" />
          <Metric
            icon="/assets/icons/message.svg"
            value={answers}
            title="Answers"
          />
          <Metric icon="/assets/icons/eye.svg" value={views} title="Views" />
        </div>
      </footer>
    </article>
  );
};
