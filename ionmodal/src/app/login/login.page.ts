import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class LoginPage {
  mail: string = '';
  password: string = '';

  constructor(private modalCtrl: ModalController) {}

  logIn() {
    this.modalCtrl.dismiss({
      mail: this.mail,
      password: this.password
    });
  }
}
