import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieList } from './movies.model';

@Injectable()
export class MoviesService {
  private readonly API_URL = 'http://www.omdbapi.com/?apikey=130a8d7b';

  constructor(private http: HttpClient) {}

  getDetail(id: string): Observable<Movie> {
    const url = `${this.API_URL}&i=${id}`;
    return this.http.get<Movie>(url);
  }

  getList(search: string): Observable<MovieList> {
    const url = `${this.API_URL}&s=${search}`;
    return this.http.get<MovieList>(url);
  }
}
