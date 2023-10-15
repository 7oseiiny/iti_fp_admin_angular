import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient:HttpClient) { }

  getAllReviews():Observable<any[]>{
    
    return this.httpClient.get<any[]>('http://localhost:3300/review');
   }
}
