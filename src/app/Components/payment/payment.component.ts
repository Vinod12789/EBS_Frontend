import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  paymentRequest= {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethod:[
      {
        type:"CARD",
        parameters:{
          allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD",]
        },
        tokenizationSpecification: {
          type:"PAYMENT_GATEWAY",
          parameters:
          {
            gateway:"example",
            gatewayMerchantID:"exampleMerchantGatewayID"
          } 
        }
      }
    ],
    marchantInfo:{
      marchantID:"123456789",
      marchantName:"DemoMarchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPRice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }
  };
  onLoadPaymentData(event:any):void
  {
    console.log("Load Payment Data By Testing",event.details);
  }
}
