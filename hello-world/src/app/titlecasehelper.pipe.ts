import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: "titlecasehelper" })
export class TitleCaseHelperPipe implements PipeTransform {
    transform(value: string, args: any[]) {
        throw new Error("Method not implemented.");
    }

}