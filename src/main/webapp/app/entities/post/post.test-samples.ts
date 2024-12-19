import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 25681,
  title: 'flimsy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-18T02:47'),
};

export const sampleWithPartialData: IPost = {
  id: 13701,
  title: 'qua hm mould',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-17T23:32'),
};

export const sampleWithFullData: IPost = {
  id: 28769,
  title: 'beautifully square silently',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-18T11:12'),
};

export const sampleWithNewData: NewPost = {
  title: 'neck',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-17T20:13'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
