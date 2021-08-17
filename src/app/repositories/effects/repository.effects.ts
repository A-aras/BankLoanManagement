import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as RepositoryActions from '../actions/repository.action';
import { RepositoryService } from '../repository.service';

@Injectable()
export class RepositoryEffects {

    constructor(private action$: Actions, private refService: RepositoryService) {
    }

      loadGender$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadGenders),
            mergeMap(() => this.refService.GetGenders().pipe(
                map(refModels => RepositoryActions.loadGendersSuccess({ refModels }))
            ))
        )
    });

    accountTypes$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadAccountTypes),
            mergeMap(() => this.refService.GetAccountTypes().pipe(
                map(refModels => RepositoryActions.loadAccountTypesSuccess({ refModels }))
            ))
        )
    });

    guradians$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadGuardianTypes),
            mergeMap(() => this.refService.GetGenders().pipe(
                map(refModels => RepositoryActions.loadGuardianTypesSuccess({ refModels }))
            ))
        )
    });

    idProofs$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadIdentificationProofTypes),
            mergeMap(() => this.refService.GetIdentificationProofTypes().pipe(
                map(refModels => RepositoryActions.loadIdentificationProofTypesSuccess({ refModels }))
            ))
        )
    });

    loanTypes$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadLoanTypes),
            mergeMap(() => this.refService.GetLoanTypes().pipe(
                map(refModels => RepositoryActions.loadLoanTypesSuccess({ refModels }))
            ))
        )
    });

    maritalStatus$ = createEffect(() => {
        return this.action$.pipe(
            ofType(RepositoryActions.loadMaritalStatusTypes),
            mergeMap(() => this.refService.GetMaritalStatus().pipe(
                map(refModels => RepositoryActions.loadMaritalStatusTypesSuccess({ refModels }))
            ))
        )
    });

}