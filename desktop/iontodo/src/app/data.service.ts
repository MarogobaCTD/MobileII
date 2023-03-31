import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public teste: Array<{ title: string; description: string; }> = [];

  constructor(public storage: Storage) {
    this.teste = [];
   }

  getData(){
    return this.storage.get('todos');
  }

  save(data: any){
    this.storage.set('todos', data);
  }
}
