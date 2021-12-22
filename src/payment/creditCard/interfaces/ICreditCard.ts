interface IRequest{
    name:string,
    cpf:string,
    numberCard:string
}


export default interface ICreditCard{
    getData({}:IRequest):void
    processPayment({}:IRequest):void
}