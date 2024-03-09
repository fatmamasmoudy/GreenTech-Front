import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('containerForm') containerForm: ElementRef | undefined;
  loginForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
  })
  }
  signUp(){

    const element = this.containerForm?.nativeElement
    element.classList.add('active')
    // element.classList.remove('active')
  }

  login(){
    const element = this.containerForm?.nativeElement
    element.classList.remove('active')
  }


  // login(){
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;
  //   this.authService.login({email,password}).subscribe((response: any) => {

  //     localStorage.setItem('access_token',response.access_token);
  //     this.router.navigate(['/exacttool']); //route when login
  //   })
  // }
}
