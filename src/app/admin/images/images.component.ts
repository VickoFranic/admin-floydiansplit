import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from './googledrive.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: Array<any> = [];
  imagesList;
  bsModalRef: BsModalRef;

  constructor(private googledriveService: GoogledriveService, private modalService: BsModalService) { }

  ngOnInit() {

    this.googledriveService.getImagesListFromApi()
      .subscribe(list => {
        
        this.imagesList = list;
        this.googledriveService.getImages()
          .subscribe(response => {

            let items = response['items'];
            this.imagesList.forEach(image => {
              items.forEach(item => {
                if ((item.id == image.id)) {
                  this.images.push(item);
                }
              });
            });
          });
      });
  }

  /**
   * Download image
   * @param image
   */
  downloadImage(image) {
    window.location.href = image.webContentLink;
  }

  /**
   * Deletes image and updates the list
   * @param image
   */
  deleteImage(image) {
    this.googledriveService.deleteImage(image)
      .subscribe(newList => {
        this.imagesList = newList;

        this.images = [];
        this.imagesList.forEach(image => {
          this.images.forEach(item => {
            if ((item.id == image.id)) {
              this.images.push(item);
            }
          });
        });
      });
  }

}
