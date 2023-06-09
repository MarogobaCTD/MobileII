import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {

  title: string | undefined;
  description: string | undefined;

  constructor(private modalCtrl: ModalController) { }

  saveItem() {
    console.log('salvar');
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.modalCtrl.dismiss(newItem);
  }

  close(){
    console.log('sair');
    this.modalCtrl.dismiss();
  }

}
