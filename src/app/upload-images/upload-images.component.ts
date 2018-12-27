import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
imageUrl : string ="../assets/images/i1.jpg";
fileToUpload:File =null;

handleFileInput(file:FileList){
this.fileToUpload =file.item(0);

var reader= new FileReader();
reader.onload=(event:any) => {
  this.imageUrl =event.target.result;
}
reader.readAsDataURL(this.fileToUpload)
}
  constructor() { }

  ngOnInit() {
  }

}
