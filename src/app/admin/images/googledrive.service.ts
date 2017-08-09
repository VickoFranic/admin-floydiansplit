import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../../config';

interface ImagesResponse {
  items: any[]
}

interface ImagesListItemResponse {
  id: string,
  is_deleted: boolean
}

@Injectable()
export class GoogledriveService {

  constructor(private http: HttpClient) { }

  /**
   * Get main images from Google Drive
   */
  getImages() {
    return this.http.get<ImagesResponse>(Config.googleDriveRoot);
  }

  /**
   * Get main images deleted/not deleted list from API
   */
  getImagesListFromApi() {
    return this.http.get<Array<ImagesListItemResponse>>(Config.apiUrl + 'images/main');
  }

  /**
   * Delete image
   */
  deleteImage(image) {
    return this.http.delete(Config.apiUrl + 'images/main/' + image.id);
  }
}
