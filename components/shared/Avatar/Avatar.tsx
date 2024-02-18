import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  pic?: string;
  name: string;
  size: number;
}

export const Avatar = (props: AvatarProps) => {
  const { pic, name, size } = props;
  return (
    <Image
      className="rounded-full"
      src={pic || '/assets/icons/nouser.svg'}
      alt={name}
      width={size}
      height={size}
    />
  );
};
