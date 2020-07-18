import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesFilterPipe } from './movies-filter.pipe';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, MoviesFilterPipe],
  exports: [MoviesComponent],
  imports: [CommonModule],
  providers: [MoviesService],
})
export class MoviesModule {}
