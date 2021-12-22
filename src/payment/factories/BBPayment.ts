import ICreditCard from "../creditCard/interfaces/ICreditCard";
import VisaCard from "../creditCard/VisCard";
import BBPoints from "../points/BBPoints";
import IPoints from "../points/interface/IPoints";


import IPaymentFactor from "./IPaymentFactory";



export default class InterPayment implements IPaymentFactor{
    pointsPayment(): IPoints {
        return new BBPoints()
    }
    creditPayment(): ICreditCard {
        return new VisaCard()
    }

}