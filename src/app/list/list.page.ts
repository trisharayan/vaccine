import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

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

  data = {
    action: "getrecord",
    email_id: sessionStorage.getItem('email_id'),
    password: sessionStorage.getItem('password')
  }


  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private api: ApiService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }




  records: any



  ngOnInit() {
    this.api.getRecords(this.data).subscribe((res) => {
      this.records = res
    })
  }

}
