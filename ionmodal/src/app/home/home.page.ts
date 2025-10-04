import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, // ou true se quiser
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async logIn() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,  // aqui importa o standalone
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Dados do login:', data);
  }
}

