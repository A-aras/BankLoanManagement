import { ComponentFactoryResolver, ComponentRef, Directive, Host, Inject, Input, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject, merge, Observable, EMPTY } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ErrorComponent } from '../ui/error/error.component';
import { FORM_ERRORS } from '../validators/form-errors';
import { FormSubmitDirective } from './formsubmit.validator.directive';
import { ControlErrorContainerDirective } from './validation.container.directive';

@Directive({
  selector: '[formControl],[formControlName]'
})
export class ControlValidationDirective implements OnInit {

  ref: ComponentRef<ErrorComponent>;

  submit$: Observable<Event>;

  container: ViewContainerRef;

  diposableObject: Subject<void> = new Subject<void>();

  @Input() customErrors = {};

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl) 
    {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
   this.submit$ = this.form ? this.form.submit$ : EMPTY;
  
  }

  ngOnInit() {

    // merge(
    //   this.submit$,
    //   this.control.valueChanges)
    //   .pipe(
    //     takeUntil<any>(this.diposableObject)
    //   ).subscribe(() => {

    //     const controlErrors = this.control.errors;
    //     if (controlErrors) {
    //       const firstkey = Object.keys(controlErrors)[0];
    //       const getError = this.errors[firstkey];
    //       const text = getError(controlErrors[firstkey]);
    //     }
    //   });

      merge(
        this.submit$,
        this.control.valueChanges
      ).pipe(
        takeUntil<any>(this.diposableObject)).subscribe((v) => {
          const controlErrors = this.control.errors;
          if (controlErrors) {
            const firstKey = Object.keys(controlErrors)[0];
            const getError = this.errors[firstKey];
            const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
            this.setError(text);
          } else if (this.ref) {
            this.setError(null);
          }
        })

  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy() { }
}
