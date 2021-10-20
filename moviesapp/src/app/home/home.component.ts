import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any[] = [];
  trendingTvShows: any[] = [];

  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("all").subscribe(
      (response) => {
        // console.log(response.results);
        this.trendingMovies = response.results.filter(
          (result: any) => {
            return result.media_type=="movie";
          });
        this.trendingTvShows = response.results.filter(
          (result: any) => {
            return result.media_type=="tv";
          });
      }
    );
   }

  ngOnInit(): void {
  }

}
