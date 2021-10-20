import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient: HttpClient) {

  }

  getTrending(mediaType: any): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=b81744841c9f34a67573ec58878f308f`);
  }

  getTrendingDetails(mediaType: any, id: any): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=b81744841c9f34a67573ec58878f308f&language=en-US`);
  }
}
