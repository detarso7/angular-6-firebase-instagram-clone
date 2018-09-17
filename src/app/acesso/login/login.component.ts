import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(
    private auth: Auth
  ) { }

  ngOnInit() {
  }


  public exibirPainelCadasgtro(): void{
   this.exibirPainel.emit('cadastro')
  }

public autenticar():void{
  
this.auth.autenticar(this.formulario.value.email, this.formulario.value.senha)

}

}
