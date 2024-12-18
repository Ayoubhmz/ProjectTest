import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32767,
  login: '3@VHfL\\Du3rUi',
};

export const sampleWithPartialData: IUser = {
  id: 28396,
  login: '=+V@AZ8\\486',
};

export const sampleWithFullData: IUser = {
  id: 4517,
  login: 'b@OJ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
