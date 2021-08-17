import { AbstractControl, ValidatorFn } from "@angular/forms";

export function DefaultValueValidation(defaultValue: undefined|number|string|null,message: string): ValidatorFn {
    return (control: AbstractControl): { [s: string]: { error: string } } | null => {
        const invalidOj = { "defaultValueValidation": { error: message } };

        if (control.value==defaultValue) {
              control.setErrors({ 'defaultValueValidation': true });
                return invalidOj;
           
        }
        return null;
    };
}
