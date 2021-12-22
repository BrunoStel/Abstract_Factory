import ICreditCard from "../creditCard/interfaces/ICreditCard";
import IPoints from "../points/interface/IPoints";



export default interface IPaymentFactor {
    pointsPayment():IPoints
    creditPayment():ICreditCard
}
