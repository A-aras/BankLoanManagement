import { NgModule, OnInit } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { RootState } from '../state/app.state';
import { RepositoryEffects } from './effects/repository.effects';
import { repositoryReducer } from './reducer/repository.reducer';
import * as RepositoryActions from './actions/repository.action';
import { RepositoryService } from './repository.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [


    ],
    imports: [
        HttpClientModule,
        StoreModule.forFeature('repositoris', repositoryReducer),
        EffectsModule.forFeature([RepositoryEffects])
    ],
    providers: [RepositoryService],
    bootstrap: []
})
export class RepositoryModule {


    constructor(private store: Store<RootState>) {


    }

    // ngOnInit(): void {
    //     this.store.dispatch(RepositoryActions.loadGenders());
    // }
}
