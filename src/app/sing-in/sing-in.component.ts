import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  singInForm: FormGroup;
  constructor(
    private lgi: FormBuilder,
    public signIn: MatDialogRef<SingInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.singInForm = this.lgi.group({
      Username: this.lgi.control('', [Validators.required, Validators.minLength(8)]),
      Password: this.lgi.control('', [Validators.required, Validators.minLength(8)])
    });
  }
  onNoClick(): void {
    this.signIn.close();
  }

  onSubmit() {
    this.signIn.close(this.singInForm.value);
  }
}
