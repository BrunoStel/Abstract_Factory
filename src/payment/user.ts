
interface IUser{
    name:string,
    cpf:string,
    numberCard:string
}


export default class User implements IUser{
    name:string
    cpf:string
    numberCard:string
}