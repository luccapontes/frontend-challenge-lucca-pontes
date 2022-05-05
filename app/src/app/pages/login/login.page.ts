import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public tipocampo = 'password';
  public userForm: FormGroup;
  public emptyValues = 0;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    ) { }

  ngOnInit() {
    localStorage.clear();
    
    this.userForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ]))
    });
  }

  async submit(){
    if(this.userForm.valid){
      const toast = await this.toastController.create({
        message: 'Welcome to the app :)',
        duration: 2000
      });
      toast.present();

      this.router.navigate(['home'])
      localStorage.setItem('userData', JSON.stringify(this.userForm.value))

    } else{
      const toast = await this.toastController.create({
        message: 'Incorrect credentials :(',
        duration: 2000
      });
      toast.present();
    }
  }

  changeView(mostrarSenha) {
    if (mostrarSenha) {
      this.tipocampo = 'text';
    } else {
      this.tipocampo = 'password';
    }
  }

}
