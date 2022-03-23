import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    name: string = ''
    lastName: string = ''
    userName: string = ''
    cpf: string = ''
    endereco: string = ''
    complemento: string = ''
    telCellphone: string = ''
    telResidence: string = ''
    password: string = ''
    confirmPassword: string = ''

    constructor(private dialog: MatDialog) {}

    submit(): void {
      console.log('Formulário enviado')
    }

    showDialog(): void {
      let ref = this.dialog.open(FormDialogComponent)
  
      ref.componentInstance.name = this.name
      ref.componentInstance.lastName = this.lastName
      ref.componentInstance.userName = this.userName
      ref.componentInstance.cpf = this.cpf
      ref.componentInstance.endereco = this.endereco
      ref.componentInstance.complemento = this.complemento
      ref.componentInstance.telCellphone = this.telCellphone
      ref.componentInstance.telResidence = this.telResidence
      ref.componentInstance.password = this.password
      ref.componentInstance.confirmPassword = this.confirmPassword
    }

    sair(): void {
      
    }



}
