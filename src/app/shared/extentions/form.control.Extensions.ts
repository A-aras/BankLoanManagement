import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GetPropertyName } from './expression.helper';


export function extension(ctr: any) {
    let originalFunction: Function;
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        originalFunction = descriptor.value;

        ctr.prototype[propertyKey] = function (...args) {
            return originalFunction(this, ...args);
        }
    }
}

// export class FormControlExtentions {
//     @extension(FormControl)
//     static BindModel(thisArg: FormControl, model: any, propertyFun: (model: any) => any) {
//         let fieldName = GetPropertyName(propertyFun);
//         thisArg.setValue(model[fieldName]);
//         thisArg.valueChanges.subscribe(x => {
//             if (!thisArg.invalid) {
//                 model[fieldName] = x;
//             }
//         });
//         //thisArg.prototype['formField']="";
//     }

// }


export function BindModel(thisArg: FormControl, model: any, propertyFun: (model: any) => any,diposableObject: Subject<void> ) {

    let fieldName = GetPropertyName(propertyFun);

    thisArg.setValue(model[fieldName]);
    //thisArg.patchValue(model[fieldName]);
    // thisArg.valueChanges.pipe(
    //     takeUntil<any>(diposableObject)).subscribe(x => {
    //     if (!thisArg.invalid) {
    //         model[fieldName] = x;
    //     }
    // });

    thisArg.valueChanges.subscribe(x => {
        model[fieldName] = x;
        // if (!thisArg.invalid) {
        //     model[fieldName] = x;
        // }
    });
   
}