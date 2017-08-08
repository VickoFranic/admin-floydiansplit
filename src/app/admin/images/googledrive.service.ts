import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../../config';

interface ImagesResponse {
  items: any[]
}

@Injectable()
export class GoogledriveService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<ImagesResponse>(Config.googleDriveRoot);
  }

}
