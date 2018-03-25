import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


// validate admin, manager
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}
// validate password
export function comparePassword(b: AbstractControl) {
  const h = b.value;
  return (h.Password === h.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  singUpForm: FormGroup;
  constructor(
    private sgu: FormBuilder,
    public dialogRef: MatDialogRef<SingUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.singUpForm = this.sgu.group({
      Email: this.sgu.control('', [Validators.required, Validators.email]),
      Username: this.sgu.control('', [
        Validators.required,
        Validators.minLength(5),
        forbiddenUsername(['admin', 'ADMIN', 'manager', 'MANAGER']),
      ]),
      pw: this.sgu.group({
        Password: this.sgu.control('', Validators.required),
        confirmPassword: this.sgu.control('', Validators.required)
      },
        {
          validator: comparePassword
        }
      )
    });
  }
  onSubmit() {
    this.dialogRef.close(this.singUpForm.value);
  }

}
