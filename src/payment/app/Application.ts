import ICreditCard from "../creditCard/interfaces/ICreditCard";
import IPaymentFactor from "../factories/IPaymentFactory";
import IPoints from "../points/interface/IPoints";
import {IRequestCrediCard} from "../creditCard/interfaces/ICreditCard"

export default class ApplicationBank {

    private points: IPoints;
    private crediCard: ICreditCard;
    private type:number

    constructor(factory: IPaymentFactor, type:number = 1) {
        
        this.points = factory.pointsPayment();
        this.crediCard = factory.creditPayment();
        this.type = type
    }

    
    processPayment({name, cpf,numberCard}:IRequestCrediCard):void {
        if(this.type === 1){
            this.crediCard.processPayment({name, cpf, numberCard})
        }else if(this.type === 2){
            this.points.processPayment({name, cpf})
        }else{
            console.log('Informar um tipo correto de pagamento')
        }

        
       

    }

}