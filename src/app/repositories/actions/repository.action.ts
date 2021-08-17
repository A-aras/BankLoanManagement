// import { createAction } from '@ngrx/store';

import { createAction, props } from '@ngrx/store';
import * as RepositoryModel from '../models/refdata.model';

export const loadGenders = createAction(
    '[Genders] Load',
    //props<{ genders: Gender[] }>()
);

export const loadGendersSuccess = createAction(
    '[Genders] Load Success',
    props<{ refModels: RepositoryModel.Gender[] }>()
);


export const loadGendersFailure = createAction(
    '[Genders] Load Fail',
    props<{ error: string }>()
);

export const loadAccountTypes = createAction(
    '[AccountTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadAccountTypesSuccess = createAction(
    '[AccountTypes] Load Success',
    props<{ refModels: RepositoryModel.AccountTypes[] }>()
);


export const loadAccountTypesFailure = createAction(
    '[AccountTypes] Load Fail',
    props<{ error: string }>()
);


export const loadGenderTypes = createAction(
    '[GenderTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadGenderTypesSuccess = createAction(
    '[GenderTypes] Load Success',
    props<{ refModels: RepositoryModel.Gender[] }>()
);


export const loadGenderTypesFailure = createAction(
    '[GenderTypes] Load Fail',
    props<{ error: string }>()
);


export const loadGuardianTypes = createAction(
    '[GuardianTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadGuardianTypesSuccess = createAction(
    '[GuardianTypes] Load Success',
    props<{ refModels: RepositoryModel.Guardian[] }>()
);


export const loadGuardianTypesFailure = createAction(
    '[GuardianTypes] Load Fail',
    props<{ error: string }>()
);

export const loadIdentificationProofTypes = createAction(
    '[IdentificationProofTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadIdentificationProofTypesSuccess = createAction(
    '[IdentificationProofTypes] Load Success',
    props<{ refModels: RepositoryModel.IdentificationProofTypes[] }>()
);


export const loadIdentificationProofTypesFailure = createAction(
    '[IdentificationProofTypes] Load Fail',
    props<{ error: string }>()
);

export const loadLoanTypes = createAction(
    '[LoanTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadLoanTypesSuccess = createAction(
    '[LoanTypes] Load Success',
    props<{ refModels: RepositoryModel.LoanTypes[] }>()
);


export const loadLoanTypesFailure = createAction(
    '[LoanTypes] Load Fail',
    props<{ error: string }>()
);

export const loadMaritalStatusTypes = createAction(
    '[MaritalStatusTypes] Load',
    //props<{ genders: Gender[] }>()
);

export const loadMaritalStatusTypesSuccess = createAction(
    '[MaritalStatusTypes] Load Success',
    props<{ refModels: RepositoryModel.MaritalStatus[] }>()
);


export const loadMaritalStatusTypesFailure = createAction(
    '[MaritalStatusTypes] Load Fail',
    props<{ error: string }>()
);