import React from 'react';
import { hotQuestions } from './mocks';
import Image from 'next/image';
import Link from 'next/link';

export const HotQuestions = () => {
  return (
    <section>
      <h3 className="h3-bold mb-[26px]">Hot Questions</h3>
      <ul className="flex flex-col gap-[30px]">
        {hotQuestions.map(({ _id, title }) => (
          <li key={_id}>
            <Link
              className="body-medium text-dark500_light700 flex items-start justify-between gap-2.5"
              href={`/questions/${_id}`}
            >
              {title}
              <Image
                className="invert-colors"
                src="/assets/icons/chevron-right.svg"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
