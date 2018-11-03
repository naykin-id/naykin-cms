import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { PaymentMethodComponent } from './payment-method.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transaction'
    },
    children: [
      {
        path: 'transaction',
        component: TransactionComponent,
        data: {
          title: 'Transaction'
        }
      },
      {
        path: 'payment-method',
        component: PaymentMethodComponent,
        data: {
          title: 'Payment Method'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}
