import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '@mdv-twelve/core-data';
import { Component, OnInit, Input } from '@angular/core';
import { NotifyService } from '@mdv-twelve/core-data';

@Component({
  selector: 'mdv-twelve-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  authenticatedUser = { email: 'e@e.com', password: 'example' }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notfiy: NotifyService,
    private route: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser: User = this.form.value
    if(this.form.invalid) {
      this.notfiy.notification('Enter A valid User')
    } else {
      if(inputedUser.email === this.authenticatedUser.email && inputedUser.password === this.authenticatedUser.password) {
        this.route.navigate(['/items']);
        this.authService.setToken(inputedUser.email);
        this.notfiy.notification('Successfully Logged in');
      }
    }

  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
