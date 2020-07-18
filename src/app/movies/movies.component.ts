import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MovieFilter } from './movies.enum';
import { Movie, MovieList } from './movies.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<MovieList>;
  selectedMovie: Movie | null;
  filter = MovieFilter;
  selectedFilter: MovieFilter;
  min: number;
  max: number;

  private readonly SEARCH = 'Batman';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getList(this.SEARCH).pipe(
      mergeMap((result: MovieList) => {
        let details = result.Search.map((movieSearch) =>
          this.moviesService.getDetail(movieSearch.imdbID)
        );
        return forkJoin(...details).pipe(
          map((detail) => {
            result.Search.forEach((movieSearch, index) => {
              movieSearch.detail = detail[index];
            });
            return result;
          })
        );
      })
    );
    this.applyFilter(MovieFilter.TwoThousandsTens);
  }

  applyFilter(filter: MovieFilter): void {
    this.selectedFilter = filter;
    switch (this.selectedFilter) {
      case MovieFilter.NineteenEighties:
        this.min = 1980;
        this.max = 1989;
        break;
      case MovieFilter.NineteenNineties:
        this.min = 1990;
        this.max = 1999;
        break;
      case MovieFilter.TwoThousands:
        this.min = 2000;
        this.max = 2009;
        break;
      case MovieFilter.TwoThousandsTens:
        this.min = 2010;
        this.max = 2020;
        break;
    }
  }
}
