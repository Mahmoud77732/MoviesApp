import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  trendingTvShows: any[] = [];

  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("all").subscribe(
      (response) => {
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
