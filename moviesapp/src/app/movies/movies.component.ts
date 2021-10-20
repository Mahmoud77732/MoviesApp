import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies: any[] = [];

  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("all").subscribe(
      (response) => {
        this.trendingMovies = response.results.filter(
          (result: any) => {
            return result.media_type=="movie";
          });
      }
    );
  }

  ngOnInit(): void {
  }

}
