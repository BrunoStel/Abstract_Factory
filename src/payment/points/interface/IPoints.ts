
interface IRequest{
    name:string,
    cpf:string
}


export default interface IPoints{
    getData({}:IRequest):void
    processPayment({}:IRequest):void
}