import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = true;
  animal: string;
  name: string;
  // ===========================================================================
  // TRY THIS
  // ===========================================================================
  @ViewChild('navbar') navbar: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  constructor(public dialog: MatDialog) { }

  openSignIn(): void {
    const signIn = this.dialog.open(SingInComponent, {
      width: '500px',
      height: '500px',
      autoFocus: false
    });
    signIn.afterClosed().subscribe(result => {
      console.log('result', result);
    });
  }

  openSignUp(): void {
    const signUp = this.dialog.open(SingUpComponent, {
      width: '800px',
      height: '700px',
      autoFocus: false
    });
  }
}
