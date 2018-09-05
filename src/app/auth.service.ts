import { Usuario } from "./acesso/usuario.model";

export class Auth{
    public cadastroDeUsuario(usuario:Usuario):void{
        console.log("Chegamos até aqui", usuario)
    }
}