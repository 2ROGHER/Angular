import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractLastItem'
})

export class ExtractLastItemPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string | undefined {
    return value.split("/").pop();
  }

}
