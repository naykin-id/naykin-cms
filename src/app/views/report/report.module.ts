import { NgModule } from '@angular/core';

import { ReportComponent } from './report.component';

// Components Routing
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    ReportRoutingModule
  ],
  declarations: [ ReportComponent ]
})
export class ReportModule { }
