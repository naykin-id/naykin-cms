import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { RoleComponent } from './role.component';
import { UserRoleComponent } from './user-role.component';
import { SocialAccountComponent } from './social-account.component';

// Components Routing
import { ManageAccountRoutingModule } from './manage-account-routing.module';

@NgModule({
  imports: [
    ManageAccountRoutingModule
  ],
  declarations: [ 
    UserComponent,
    RoleComponent,
    UserRoleComponent,
    SocialAccountComponent
   ]
})
export class ManageAccountModule { }
