import Application from "./vehicles/app/application";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import ITransportFactory from "./vehicles/factories/ITransportFactory";
import UberTransport from "./vehicles/factories/UberTransport";
import Operadora from "./payment/constants/Operadora";
import IPaymentFactor from "./payment/factories/IPaymentFactory";
import NuPayment from "./payment/factories/NuPayment";
import BBPayment from "./payment/factories/BBPayment";
import ApplicationBank from "./payment/app/Application";

// const currentCompany = Company.NINENINE;

// let factory: ITransportFactory;

// switch (currentCompany) {

//     case Company.UBER:
//         factory = new UberTransport();
//         break;

//     case Company.NINENINE:
//         factory = new NineNineTransport();
//         break;

//     default:
//         console.log("Desconhecida");

// }

// const app = new Application(factory);

// app.startRoute();

const currentOperadora = Operadora.BB

let factoryBank: IPaymentFactor

switch (currentOperadora){
    case Operadora.NUBANK:
        factoryBank = new NuPayment()
        break;
    
    case Operadora.BB:
        factoryBank = new BBPayment()
        break;
    default:
        console.log('Desconhecida')
}

const app2 = new ApplicationBank(factoryBank, 1)

app2.processPayment({name:'Bruno', cpf:'09828641917', numberCard:'1234567890123456'})


