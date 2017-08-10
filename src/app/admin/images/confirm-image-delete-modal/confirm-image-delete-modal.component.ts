import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-confirm-image-delete-modal',
  templateUrl: './confirm-image-delete-modal.component.html',
  styleUrls: ['./confirm-image-delete-modal.component.scss']
})
export class ConfirmImageDeleteModalComponent implements OnInit {

  deleteImage: boolean = false;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  dismiss() {
    this.bsModalRef.hide();
  }

  delete() {
    this.deleteImage = true;
    this.bsModalRef.hide();
  }
}
