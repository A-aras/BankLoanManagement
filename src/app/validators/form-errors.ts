
import { InjectionToken } from '@angular/core';


export const defaultErrors = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
  maxlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
  customepattervalidation: ({ pat, error }) => `${error}`,
  defaultValueValidation: ({error}) => `${error}`,
  email: (error) => `Invalid mail Id`,
  accountDateValidator: ({error}) => `${error}`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
