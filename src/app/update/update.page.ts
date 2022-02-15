import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Vaccine List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Update Vaccine',
      url: '/update',
      icon: 'list'
    }
  ];
  constructor(private api: ApiService) { }


  ngOnInit() {
  }

}
