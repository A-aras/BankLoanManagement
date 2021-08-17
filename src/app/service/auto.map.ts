import { ObjectType } from '../models/object.type';


export class AutoMapper {
    //  value: T;

    // constructor(ctor:ObjectType<T>) {
    //     this.value = new ctor();
    // }

    public static AutoMap(source: any, dest: any, dtoFieldKeys: Map<string, any>): any {

        //let sourceMap = new Map();
        let destMaps = new Map();
        //sourceMap.set()
        //dtoFieldKeys.map(f=>sourceMap.set(f.toLowerCase(), f));
        //Object.keys(source).map(f => sourceMap.set(f.toLowerCase(), f));
        Object.keys(dest).map(f => destMaps.set(f.toLowerCase(), f));

        dtoFieldKeys.forEach((srcValue, srcKey) => {
            let destmap = destMaps.get(srcKey);
            if (destmap != null && destmap != undefined) {

                if (dest[destmap] instanceof Date) {
                    if (source[srcKey] != null && source[srcKey] != undefined) {
                        let date = new Date(source[srcKey]);
                        date = new Date(date.setHours(1))
                        dest[destmap] = date;
                    }

                }
                else {
                    dest[destmap] = source[srcValue];
                }

            }
        });

        return dest;
    }

    public static AutoMapWithKeyMaps(model: any, dtoFieldKeys: Map<string, any>): any {

        let dtoObject = new Object();
        //let dtoMap = new Map();
        let modelMap = new Map();
        //sourceMap.set()
        //dtoFieldKeys.map(f=>dtoMap.set(f.toLowerCase(), f));
        Object.keys(model).map(f => modelMap.set(f.toLowerCase(), f));
        //Object.keys(refDto).map(f => destMaps.set(f.toLowerCase(), f));

        dtoFieldKeys.forEach((dtoValue, dtoKey) => {

            let sourceMap = modelMap.get(dtoKey);

            if(Array.isArray(dtoValue))
            {
                //let childObject = new Object();
                let childModel=model[sourceMap];
                let childObject =AutoMapper.AutoMapWithKeyMaps(childModel,dtoValue[1])
                dtoObject[dtoValue[0]] =childObject;
            }
            else
            {
                if (sourceMap != null && sourceMap != undefined) {


                    dtoObject[dtoValue] = model[sourceMap];
                }
            }
            
        });

        return dtoObject;
    }


}

