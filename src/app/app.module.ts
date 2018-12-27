import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploderService } from './file-uploder.service';
import { UploadImagesComponent } from './upload-images/upload-images.component';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UploadImagesComponent
  ],
  imports: [FormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FileUploderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
