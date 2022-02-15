import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../_service/api.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('role', { static: true }) role: ElementRef;
  constructor(private router: Router, private api: ApiService) { }


  user: User;

  user_name: string ="";
  pass: string ="";
  national_id: string ="";
  email: string ="";
  gender: string ="";
  city: string ="";
  state: string ="";
  country: string = "Please select your country";
  license_id: string ="";
  bussiness_national_id: string ="";
  hospitalName: string ="";
  address: string ="";
  dob: string ="";
  parent_name:string=""

  data = {
    "user_name": "",
    "email_id": "",
    "password": "",
    "national_id": "",
    "address": "",
    "gender": "",
    "role": "",
    "state": "",
    "city": "",
    "country": "",
    "dob": "",
    "license_id": "",
    "bussiness_national_id": "",
    "hospitalName": "",

  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  register() {

    this.data.email_id = this.email
    this.data.user_name = this.user_name
    this.data.password = this.pass
    this.data.national_id = this.national_id
    this.data.gender = this.gender
    if (this.role.nativeElement.className == "nav-link active") {
      this.data.role = "parent"
    } else {
      this.data.role = "doctor"
    }
    this.data.address = this.address
    this.data.state = this.state
    this.data.city = this.city
    this.data.country = this.country
    this.data.dob = this.dob
    this.data.license_id = this.license_id
    this.data.bussiness_national_id = this.bussiness_national_id
    this.data.hospitalName = this.hospitalName

    


    if (this.data.role == "parent") {
      console.log(this.dob)

      if (this.user_name == "" ||
        this.email == "" ||
        this.pass == "" ||
        this.national_id == "" ||
        this.address == "" ||
        this.state == "" ||
        this.city == "" ||
        this.country == "" ||
        this.dob == ""
      ) {
        alert("Enter all details");
        return
      }
    } else {
      if (this.user_name == "" ||
        this.email == "" ||
        this.pass == "" ||
        this.address == "" ||
        this.state == "" ||
        this.city == "" ||
        this.country == "" ||
        this.license_id == "" ||
        this.bussiness_national_id == "" ||
        this.hospitalName
      ) {
        alert("Enter all details");
        return
      }
    }

    this.api.register(this.data).subscribe(data => {
      if (data) {
        this.router.navigate([`/login`]);
      }
    })










  }

  ngOnInit() {

  }




}