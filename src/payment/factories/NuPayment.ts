import ICreditCard from "../creditCard/interfaces/ICreditCard";
import MasterCard from "../creditCard/MasterCard";
import IPoints from "../points/interface/IPoints";
import NUPoints from "../points/NUPoints";

;
import IPaymentFactor from "./IPaymentFactory";



export default class NuPayment implements IPaymentFactor{
    pointsPayment(): IPoints {
        return new NUPoints()
    }
    creditPayment(): ICreditCard {
       return new MasterCard()
    }

}