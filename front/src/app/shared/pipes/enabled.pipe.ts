import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enabled'
})
export class EnabledPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value === true) {
      return 'check';
    }
    return 'close';
  }

}
