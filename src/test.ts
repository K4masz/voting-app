import 'jest-preset-angular/setup-jest';
import { ngMocks } from 'ng-mocks';

//jest

Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

//ng-mocks

ngMocks.autoSpy('jest');

import { CommonModule } from '@angular/common'; // eslint-disable-line import/order
import { ApplicationModule } from '@angular/core'; // eslint-disable-line import/order
import { BrowserModule } from '@angular/platform-browser'; // eslint-disable-line import/order
ngMocks.globalKeep(ApplicationModule, true);
ngMocks.globalKeep(CommonModule, true);
ngMocks.globalKeep(BrowserModule, true);
