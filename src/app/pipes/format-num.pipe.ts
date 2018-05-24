import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNum'
})
export class FormatNumPipe implements PipeTransform {

  transform(value: any, args = 5): any {
    if (!value || value instanceof Object) {
      return;
    }

    const val = `${value}`; // convert to string
    return '#' + val.padStart(args, '0');

  }

}
