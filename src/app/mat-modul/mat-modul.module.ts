import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const MODU = [
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODU
  ],
  exports: [
    ...MODU
  ],
  declarations: []
})
export class MatModulModule { }
