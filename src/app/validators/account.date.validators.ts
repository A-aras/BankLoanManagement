import { AbstractControl, ValidatorFn } from "@angular/forms";
import { isGreaterThan18YearsOld, isLessThan96YearsOld } from '../shared/date.utils';

export function AccountDateValidator(message: string|null): ValidatorFn {
    return (control: AbstractControl): { [s: string]: { error: string } } | null => {
        const invalidOj = { "accountDateValidator": { error: message } };

        let currentDate = new Date;
        let dob = new Date(control.value);
        let day = currentDate.getDate()
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let is18yearsok = isGreaterThan18YearsOld(day, month, year, dob);
        let is96Yearsok = isLessThan96YearsOld(day, month, year, dob);
        if (!is18yearsok && !is96Yearsok) {
            control.setErrors({ 'accountDateValidator': true });
            return invalidOj;
        }
        else if (!is18yearsok && is96Yearsok)
        {
            control.setErrors({ 'accountDateValidator': true });
            return { "accountDateValidator": { error: "Should not be less than 18 year" } };
        }
        else if (is18yearsok && !is96Yearsok)
        {
            control.setErrors({ 'accountDateValidator': true });
            return { "accountDateValidator": { error: "Should not be greater than 96 year" } };
        }
        return null;
    };
}
