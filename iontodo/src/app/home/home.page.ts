import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { DataService } from '../services/data';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public items: Array<{ title: string; description: string; }> = [];

  constructor(public modalCtrl: ModalController, public dataService: DataService, public navRouter: Router,
    public navCtrl: NavController, public alertCtrl: AlertController) {
    this.getAllItems();
    /*this.items = [
      {title: 'todo 1', description: 'tarefa 1'},
      {title: 'todo 2', description: 'tarefa 2'},
      {title: 'todo 3', description: 'tarefa 3'}
    ];*/
  }

  getAllItems(){
    this.dataService.getData().then((item) => {
      console.log('passou no todos');
      console.log(item);
      if (item != null) {
        this.items = item;
      } else {
        this.items = [];
      }
      //this.items.push(item);
      console.log(this.items);
    });
  }

  async addItem(){
    let addModal = await this.modalCtrl.create({
      component: AddItemPage
    });

    addModal.onDidDismiss().then((item) => {
      console.log('modal', item.data);
      if (item.data != undefined) {
        console.log('vai gravar');
        this.salvarItem(item);
      }
    });

    addModal.present();

  }

  viewItem(item: any) {
      console.log(item);
      let navigationExtras: NavigationExtras = {
        state: {
          title: item.title,
          description: item.description
        }
      };
      this.navRouter.navigate(['item-detail'], navigationExtras);
  }

  salvarItem(item: any){
    console.log(this.items);
    this.items.push(item.data);
    this.dataService.save(this.items);
  }

  delItem(item: any){
   // console.log('excluir', this.items.findIndex(busca => {return busca.title == item.title}));
    let num = this.items.findIndex(busca => {return busca.title == item.title});
    this.items.splice(num, 1);
    //console.log(num);
    //console.log(this.items);
    this.dataService.save(this.items);
  }

  async editItem(item: any) {
    const num = this.items.findIndex(busca => busca.title === item.title);
  
    const alert = await this.alertCtrl.create({
      header: 'Alteração',
      message: 'Faça a alteração desejada',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Título',
          value: item.title
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Descrição',
          value: item.description
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Alterar',
          handler: (data) => {
            // Atualiza os dados editados
            this.items[num] = {
              ...this.items[num],
              title: data.title,
              description: data.description
            };
          }
        }
      ]
    });
    alert.present();
  }
}
