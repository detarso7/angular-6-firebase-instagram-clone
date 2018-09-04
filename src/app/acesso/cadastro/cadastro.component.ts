import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  @Output() public exibirLogin: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit() {
  }

  public exibirPainelLogin(): void{
    this.exibirLogin.emit("login")
  }

}
