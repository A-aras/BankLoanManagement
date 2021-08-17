import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoansEditorComponent } from './loans-editor.component';
import { routes } from './../../../app-routing.module';
describe('LoansEditorComponent', () => {

  let location: Location;
  let router: Router;
  let component: LoansEditorComponent;
  let fixture: ComponentFixture<LoansEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [LoansEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {

    router = TestBed.get(Router);
    //location = TestBed.get(Location);

    fixture = TestBed.createComponent(LoansEditorComponent);
    component = fixture.componentInstance;
   // router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
