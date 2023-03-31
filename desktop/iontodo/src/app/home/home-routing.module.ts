import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ItemDetailPage } from '../item-detail/item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'ItemDetalhe',
    component: ItemDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
