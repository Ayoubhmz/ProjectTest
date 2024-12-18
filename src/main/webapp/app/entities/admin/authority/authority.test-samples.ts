import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f2a8458d-edd9-4195-a5a5-53778681d719',
};

export const sampleWithPartialData: IAuthority = {
  name: '388fbc47-447c-47ee-8a0a-067b07ed3a27',
};

export const sampleWithFullData: IAuthority = {
  name: '964fed82-31d7-4096-a70d-09b48fdcf231',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
