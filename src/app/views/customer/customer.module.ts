import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { PassengerComponent } from './passenger.component';

// Components Routing
import { CustomerRoutingModule } from './customer-routing.module';
@NgModule({
  imports: [
    CustomerRoutingModule
  ],
  declarations: [ 
    CustomerComponent,
    PassengerComponent 
  ]
})
export class CustomerModule { }
