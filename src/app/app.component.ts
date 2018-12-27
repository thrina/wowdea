import { Component, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FileUploderService } from './file-uploder.service'
// import { from } from 'rxjs';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// constructor(fileUploader:FileUploderService,private elem:ElementRef)
// {}
// public uploadImage():void{
//   this.elem.nativeElement.queryselector('#spinner').style.visibility='visible';
//   let files=this.elem.nativeElement.queryselector('#selectFile').files;
//   let formdata = new FormData();
//   let  file=files[0];
//   formdata.append('selectFile',file,file.name);
//   this.fileUploader.uploadImage(formdata).subscribe(res=> this.dataLoaded(res));
// }
// public dataLoaded(data:any){

// }


  // selectedFile: File = null;
  // url:string='../assets/images/data.json';
  // constructor(private http: HttpClient){
  //   console.log(http);

  // }

  // onFileSelected(event) {
  //   this.selectedFile = event.target.files[0];
  // }

  // onUpload() {

  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   console.log(fd);
  //   this.http.post('url', fd, {     
  //     reportProgress: true,
  //     observe: 'events'      
  //   }) 
    
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress){
  //         console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
  //       } else if (event.type === HttpEventType.Response){
  //         console.log(event);
  //       }
  //     });
  // }
}