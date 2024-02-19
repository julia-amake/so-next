import { BasicUserInfo } from '@/types/users';

export interface Tag {
  _id: number;
  name: string;
  usagesCount?: number;
}

export interface Question {
  _id: number;
  title: string;
  tags?: Tag[];
  author: BasicUserInfo;
  votes: number;
  views: number;
  answers: number;
  createdAt: string;
}
