import User from "../user";
import IPoints from "./interface/IPoints";



export default class BBPoints implements IPoints{
    user = new User()

    getData({name, cpf}): void {

        Object.assign(this.user,{
            name:name,
            cpf:cpf
        })

        console.log(`Bem vindo(a) ${this.user.name}`)

        if(this.user.cpf.length != 11){
            console.log(`${this.user.name}, o cpf informado está incorreto`)
        }
    }

    processPayment({name, cpf}): void {
        this.getData({name, cpf})
        console.log('Verificando saldo do BB Points ')
        console.log('Pagamento Realizado com Sucesso')
    }
    
}