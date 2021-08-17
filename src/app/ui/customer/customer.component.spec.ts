import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { routes } from './../../app-routing.module';
import { CustomerComponent } from './customer.component';
describe('LoansEditorComponent', () => {

  let location: Location;
  let router: Router;
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [CustomerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {

    router = TestBed.get(Router);
    //location = TestBed.get(Location);

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    //router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
