import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null),
  })

  constructor() { }

  @Output() public exibirLogin: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit() {
  }

  public exibirPainelLogin(): void{
    this.exibirLogin.emit("login")
  }

  public cadastrarUsuario():void{
    console.log(this.formulario)
  }

}
