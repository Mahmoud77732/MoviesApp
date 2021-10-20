import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.scss']
})
export class TrendingDetailsComponent implements OnInit {

  type: any;
  id: any;
  itemDetails: any;

  constructor(private _TrendingService: TrendingService,
    private _ActivatedRoute: ActivatedRoute)
    {
      this.type = this._ActivatedRoute.snapshot.paramMap.get("type"); //from routing value
      this.id = this._ActivatedRoute.snapshot.paramMap.get("id"); //from routing value
      this._TrendingService.getTrendingDetails(this.type, this.id).subscribe(
        (response) => {
          this.itemDetails = response;
        }
      );
    }

  ngOnInit(): void {
  }

}
