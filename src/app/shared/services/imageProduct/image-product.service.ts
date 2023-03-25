import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageProductService {
   
  constructor(private http:HttpClient) { }

  public async getImages(){
    const url = '/api/products/?display=full&ws_key=9QMR8FP6SFCICN2RN5U4ZNM16M5HQ4AR';
    return await this.http.get(url);
  }

  public async delete(id:number){
    const url ='/api/products/'+id+'/?display=full&ws_key=9QMR8FP6SFCICN2RN5U4ZNM16M5HQ4AR'
    return await this.http.delete(url);
  }
  public async save(form:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    const url ='/api/products/?ws_key=9QMR8FP6SFCICN2RN5U4ZNM16M5HQ4AR'
    return await this.http.post(url,form,{headers});
  }
  public async edit(xml:any,id:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    const url ='/api/products/'+id+'?ws_key=9QMR8FP6SFCICN2RN5U4ZNM16M5HQ4AR'
    return await this.http.put(url,xml,{headers});
  }
}
