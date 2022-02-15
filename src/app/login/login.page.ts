import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 

  constructor(
    private authenticationService : AuthenticationService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit() {
    
  }

  email:string;
  password:string;
  login(){
      
      this.authenticationService.login(this.email,this.password)
        .subscribe(
          data => {
            
            this.router.navigate(['/home']);
          },
          error => {
            this.toastr.error(error.error.message, 'Error');
          });
  

  }

  }