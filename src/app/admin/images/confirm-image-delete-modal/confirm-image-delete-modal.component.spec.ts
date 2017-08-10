import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmImageDeleteModalComponent } from './confirm-image-delete-modal.component';

describe('ConfirmImageDeleteModalComponent', () => {
  let component: ConfirmImageDeleteModalComponent;
  let fixture: ComponentFixture<ConfirmImageDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmImageDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmImageDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
