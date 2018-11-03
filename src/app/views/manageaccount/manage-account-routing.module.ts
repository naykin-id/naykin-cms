import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { RoleComponent } from './role.component';
import { UserRoleComponent } from './user-role.component';
import { SocialAccountComponent } from './social-account.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Account'
    },
    children: [
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'Role'
        }
      },
      {
        path: 'user-role',
        component: UserRoleComponent,
        data: {
          title: 'User Role'
        }
      },
      {
        path: 'social-account',
        component: SocialAccountComponent,
        data: {
          title: 'Social Account'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule {}
