import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

export class CustomMaterialFormsMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
