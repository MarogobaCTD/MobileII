import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: false,
})
export class ItemDetailPage implements OnInit {

  title: any;
  description: any;

  constructor(private router: Router) {  }
    
  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state as {
      title: string,
      description: string
    };
    this.title = state.title;
    this.description = state.description;
    console.log('detalhes', state);
   // this.title = this.navParam.get('item').title;
   // this.description = this.navParam.get('item').description;
  }

  back(){
    this.router.navigate(['home']);
  }

}
