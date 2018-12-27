import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileUploderService {

  constructor(private httpClient:HttpClient) { }

  public uploadImages(formdata:any){
  let url:string='../assets/images/image.json';
  return  this.httpClient.post(url,formdata);
  }
  public getFileList(){
    let url:string='../assets/images/image.json';
    return this.httpClient.get(url);
  }
}
