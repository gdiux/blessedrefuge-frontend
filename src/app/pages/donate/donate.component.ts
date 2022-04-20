import { Component, OnInit } from '@angular/core';

import { IPayPalConfig, ICreateOrderRequest  } from 'ngx-paypal';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.initConfig();
  }

  /** =========================================================================
   * PAYPAL
  ========================================================================== */
  public payPalConfig ? : IPayPalConfig;
  public showSuccess!: boolean;
  public showCancel!: boolean;
  public showError!: boolean;

  private initConfig(): void {
    
    this.payPalConfig = {
        
        currency: 'USD',
        clientId: 'AY-LthScYS7e_6uvDmUdcm09Jz2dh36agQXHvEaU8GQHuCLpdX_i3dLRzZCcbOJYQfbF6FZ-R7GCA397',
        
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',

            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: '9.99'
                        }
                    }
                }
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },

        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then( (details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },

        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
        },

        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;
        },

        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },

        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }

    };
}

}
