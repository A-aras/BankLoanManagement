import { createAction, createReducer, on } from '@ngrx/store';


import * as AppState from 'src/app/state/app.state';
import * as RepositoryActions from '../actions/repository.action';
import { AccountTypes, Gender, Guardian, IdentificationProofTypes, LoanTypes, MaritalStatus } from '../models/refdata.model';

export interface RootState extends AppState.RootState {
    genders: Gender[];
    repository: BankRepositoryState;
}

export interface BankRepositoryState {
    genders: Gender[];
    accountTypes: AccountTypes[];
    guradians: Guardian[];
    idProofs: IdentificationProofTypes[];
    loanTypes: LoanTypes[];
    maritalStatus: MaritalStatus[];
}

const initialState: BankRepositoryState = {
    genders: [],
    accountTypes: [],
    guradians: [],
    idProofs: [],
    loanTypes: [],
    maritalStatus: [],
}

export const repositoryReducer = createReducer<BankRepositoryState>(
    initialState,
    on(RepositoryActions.loadGendersSuccess, (state, action): BankRepositoryState => {
        return {
            ...state,
            genders: action.refModels
        };
    }),
    on(RepositoryActions.loadAccountTypesSuccess, (state, action): BankRepositoryState => {
        return {
            ...state,
            accountTypes: action.refModels
        };
    }),
    on(RepositoryActions.loadGuardianTypesSuccess , (state, action): BankRepositoryState => {
        return {
            ...state,
            guradians: action.refModels
        };
    }),
    on(RepositoryActions.loadIdentificationProofTypesSuccess , (state, action): BankRepositoryState => {
        return {
            ...state,
            idProofs: action.refModels
        };
    }),
    on(RepositoryActions.loadLoanTypesSuccess , (state, action): BankRepositoryState => {
        return {
            ...state,
            loanTypes: action.refModels
        };
    }),
    on(RepositoryActions.loadMaritalStatusTypesSuccess , (state, action): BankRepositoryState => {
        return {
            ...state,
            maritalStatus: action.refModels
        };
    }),
    
    )


//Action {type: '[AccountTypes] All'}