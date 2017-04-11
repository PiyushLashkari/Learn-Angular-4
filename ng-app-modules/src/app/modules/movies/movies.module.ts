import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MoviesRoutingModule
        ],
    declarations: [MovieComponent, MoviesListComponent],
    providers: [MoviesService]
})

export class MoviesModule {}
