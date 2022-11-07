import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';





export class BaseComponent {
  constructor(private spinner : NgxSpinnerService) {}

  showSpinner(SpinnerNameType:  SpinnerType) {
    this.spinner.show(SpinnerNameType);

    setTimeout(() => this.hideSpinner(SpinnerNameType), 250);
  }

  hideSpinner(SpinnerNameType:  SpinnerType) {
    this.spinner.hide(SpinnerNameType);
  }
}

  export enum SpinnerType {
    BallAtom = "s1",
    BallScaleMultiple = "s2",
    BallSpinClockwiseFadeRotating = "s3"
  }


