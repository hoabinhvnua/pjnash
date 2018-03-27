import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  formContact: FormGroup;
  constructor(private ct: FormBuilder) { }
  ngOnInit() {
    this.formContact = this.ct.group({
      Username: this.ct.control('', Validators.required),
      Email: this.ct.control('', [Validators.required, Validators.email]),
      Title: this.ct.control('', [Validators.required, Validators.minLength(10)]),
      Comment: this.ct.control('', [Validators.required, Validators.minLength(20)])
    });
  }

  onSubmit() {
    console.log(this.formContact);
  }
}
