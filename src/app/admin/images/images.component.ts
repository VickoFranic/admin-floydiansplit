import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from './googledrive.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images;

  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getImages()
      .subscribe(response => {
        console.log(response.items);
        this.images = response.items;
      });
  }

}
