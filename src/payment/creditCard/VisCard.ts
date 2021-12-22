import User from "../user";
import ICreditCard from "./interfaces/ICreditCard";



export default class VisaCard implements ICreditCard{
    user = new User()

    getData({name, cpf, numberCard}): void {

        Object.assign(this.user,{
            name:name,
            cpf:cpf,
            numberCard:numberCard
        })

        console.log(`Bem vindo(a) ${this.user.name}`)

        if(this.user.cpf.length != 11){
            console.log(`${this.user.name}, o cpf informado está incorreto`)
            throw new Error('CPF inválido')
        }

        if(!this.user.numberCard || this.user.numberCard.length != 16){
            console.log(`${this.user.name}, o cartão de credito informado está incorreto`)
            throw new Error('Cartão inválido')
        }
    }

    processPayment({name, cpf, numberCard}): void {
        this.getData({name, cpf, numberCard})
        console.log('Verificando saldo do cartão VisaCard ')
        console.log('Pagamento Realizado com Sucesso')
    }
    
}