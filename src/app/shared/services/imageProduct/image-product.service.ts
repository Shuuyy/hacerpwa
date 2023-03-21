import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageProductService {
   httpOptions = {
    headers: new HttpHeaders({
      'JsonOdds-API-Key':'yourapikey'
    })
  };
  constructor(private http:HttpClient) { }

  public async getImages(){
    const url = 'https://test.evundile.com.mx/api/products/18';
    return await this.http.get(url,this.httpOptions);
  }
}
