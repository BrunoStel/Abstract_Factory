interface IRequestCrediCard{
    name:string,
    cpf:string,
    numberCard?:string
}


export default interface ICreditCard{
    getData({}:IRequestCrediCard):void
    processPayment({}:IRequestCrediCard):void
}

export { IRequestCrediCard }