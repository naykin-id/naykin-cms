import { NgModule } from '@angular/core';

import { TransactionComponent } from './transaction.component';

// Components Routing
import { TransactionRoutingModule } from './transaction-routing.module';
import { PaymentMethodComponent } from './payment-method.component';

@NgModule({
  imports: [
    TransactionRoutingModule
  ],
  declarations: [
    TransactionComponent,
    PaymentMethodComponent
  ]
})
export class TransactionModule { }
