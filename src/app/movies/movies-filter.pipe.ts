import { Pipe, PipeTransform } from '@angular/core';
import { MovieSearch } from './movies.model';

@Pipe({
  name: 'moviesFilter',
})
export class MoviesFilterPipe implements PipeTransform {
  transform(list: MovieSearch[], min: number, max: number): MovieSearch[] {
    if (!list || !min || !max) {
      return list;
    }
    return list
      .filter(
        (item) => parseInt(item.Year) >= min && parseInt(item.Year) <= max
      )
      .sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }
}
