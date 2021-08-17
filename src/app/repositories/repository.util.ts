import { Store } from '@ngrx/store';
import { RootState } from 'src/app/state/app.state';
import * as RepositoryActions from 'src/app/repositories/actions/repository.action';

export function initializeRepositories(store: Store<RootState>) {
    store.dispatch(RepositoryActions.loadGenders());
    store.dispatch(RepositoryActions.loadAccountTypes());
    store.dispatch(RepositoryActions.loadGuardianTypes());
    store.dispatch(RepositoryActions.loadIdentificationProofTypes());
    store.dispatch(RepositoryActions.loadLoanTypes());
    store.dispatch(RepositoryActions.loadMaritalStatusTypes());
}