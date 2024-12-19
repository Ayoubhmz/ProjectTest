import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 22846,
  name: 'verify',
};

export const sampleWithPartialData: ITag = {
  id: 11786,
  name: 'hmph carboxyl',
};

export const sampleWithFullData: ITag = {
  id: 11253,
  name: 't-shirt aw consequently',
};

export const sampleWithNewData: NewTag = {
  name: 'annually hoof boohoo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
