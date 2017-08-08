import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FacebookService } from 'ngx-facebook';
import { GoogledriveService } from './admin/images/googledrive.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './admin/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ImagesComponent } from './admin/images/images.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    AdminComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AuthGuard,
    AuthService,
    FacebookService,
    GoogledriveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
