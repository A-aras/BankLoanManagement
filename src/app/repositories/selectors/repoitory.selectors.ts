import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducer from '../reducer/repository.reducer';


//First selecte the feature (selecte the slice first)
export const getBankRepositoryState = createFeatureSelector<Reducer.BankRepositoryState>('repositoris');

//Then select the property from the feature state to observe changes for an particular variable from the feature state
export const getAccountTypes = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.accountTypes
});

//composing selectors we can combine multiple selectors to one
//eg
//Consider repository sate is as below we could get the selected product information on component instaed of id using composing selectors 
//           repository:{
//                      selectedGenderId:2,
//                      genders:[...]
//                     }

//             export const getSelectedGenderId= createSelector(getBankRepositoryState, state => state.selectedGenderId);
//             export const getSelectedGender= = createSelector(getBankRepositoryState
//                                                , getSelectedGenderId,
//                                                (state,selectedGenderId) =>
//                                                state.genders.find(g=>g.GenderId===selectedGenderId)
//                                               );

export const getGenders = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.genders
});

export const getGuardian = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.guradians
});

export const getIdentificationProofTypes = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.idProofs
});

export const getLoanTypes = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.loanTypes
});

export const getMaritalStatus = createSelector(getBankRepositoryState, state => {
    if (state === undefined)
        return null;

        return state.maritalStatus
});