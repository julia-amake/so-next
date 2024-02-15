import React from 'react';
import { popularTags } from './mocks';
import { Tag } from '@/components/shared/Tag';

export const PopularTags = () => {
  return (
    <section>
      <h3 className="h3-bold mb-[26px]">Popular Tags</h3>
      <ul className="flex flex-col gap-4">
        {popularTags.map(({ _id, name, usagesCount }) => (
          <li key={_id}>
            <Tag id={_id} name={name} usagesCount={usagesCount} />
          </li>
        ))}
      </ul>
    </section>
  );
};
