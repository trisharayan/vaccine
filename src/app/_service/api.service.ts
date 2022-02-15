import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`register`, data);
  }

  addRecord(data: any) {
    return this.http.post('update', data);
  }

  getRecords(data: any) {
    return this.http.post('update', data);
  }
  getName() {
    let data = {
      action: 'getname',
      email_id: sessionStorage.getItem('email_id')
    }
    return this.http.post('info', data);
  }


  delete(data) {
    return this.http.post('delete', data);
  }

  update(data) {
    return this.http.post('delete', data);
  }

}