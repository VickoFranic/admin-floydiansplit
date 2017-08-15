import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from './googledrive.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ConfirmImageDeleteModalComponent } from './confirm-image-delete-modal/confirm-image-delete-modal.component';
import { Subscription } from 'rxjs/Subscription';
import { Config } from './../../config';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  modalRef: BsModalRef;
  images: Array<any> = [];
  imagesList;
  public subscriptions: Subscription[] = [];
  public showSpinner = false;

  constructor(private googledriveService: GoogledriveService, private modalService: BsModalService) { }

  ngOnInit() {

    this.showSpinner = true;

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
            this.showSpinner = false;
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

    this.subscriptions.push(this.modalService.onHide.subscribe(() => {
      if(this.modalRef.content.deleteImage == true) {
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
      this.unsubscribe();
    }));

    this.modalRef = this.modalService.show(ConfirmImageDeleteModalComponent);
  }

  public unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  addNewImage() {
    document.location.href = Config.googleOauth2Url;
  }

}
