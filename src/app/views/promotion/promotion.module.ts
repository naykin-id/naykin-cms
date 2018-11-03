import { NgModule } from '@angular/core';

import { PromotionComponent } from './promotion.component';

// Components Routing
import { PromotionRoutingModule } from './promotion-routing.module';

@NgModule({
  imports: [
    PromotionRoutingModule
  ],
  declarations: [
    PromotionComponent
  ]
})
export class PromotionModule { }
