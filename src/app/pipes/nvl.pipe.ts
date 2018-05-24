import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvl'
})
export class NvlPipe implements PipeTransform {

  transform(value: string): string {
    // const result = value ? value : 'n.a';
    return value || 'n.a';
  }

}
