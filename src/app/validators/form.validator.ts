import { FormGroup } from '@angular/forms'
import { FormArray, FormControl } from '@angular/forms';


export class FormValidator {
    static Validate(formGroup: FormGroup | FormArray) {
        Object.keys(formGroup.controls).forEach(field => {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.Validate(control);
            }
            else if (control instanceof FormArray) {
                this.Validate(control);
            }
        });
    }
}
