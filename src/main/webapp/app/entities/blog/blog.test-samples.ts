import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 15702,
  name: 'lashes afford',
  handle: 'up pish ew',
};

export const sampleWithPartialData: IBlog = {
  id: 15047,
  name: 'gah',
  handle: 'valuable litter valley',
};

export const sampleWithFullData: IBlog = {
  id: 24796,
  name: 'wherever optimal sans',
  handle: 'afore',
};

export const sampleWithNewData: NewBlog = {
  name: 'circa nippy sweatshop',
  handle: 'oh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
