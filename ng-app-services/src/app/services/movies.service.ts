import { Injectable } from '@angular/core';
import { MOVIES } from '../classes/data-movies';
import { Movie } from '../classes/movie';

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

}
