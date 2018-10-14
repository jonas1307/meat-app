import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService) { }

  loginForm: FormGroup

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': this.fb.control('', [Validators.required, Validators.email]),
      'password': this.fb.control('', Validators.required)
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        user => this.notificationService.notify(`Bem vindo, ${user.name.toLowerCase()}!`),
        response => this.notificationService.notify(`Erro na autenticação: ${response.error.message.toLowerCase()}`)
      )
  }
}
