import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform (value: any, ...args: 'string'): unknown {

    if (args == 'asc') {
      return value.sort()
    } else {
      return value.sort().reverse()
    }
    return null;
  }

}
