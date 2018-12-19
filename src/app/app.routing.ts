import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { 
    path: 'register', 
    component: RegisterComponent, 
    data: {
      title: 'Register Page'
    }
  },
  // { 
  //   path: 'user', 
  //   component: UserComponent, 
  //   data: {
  //     title: 'User Page'
  //   }
  //   resolve: { data: UserResolver}
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  // {
  //   path: '**', //untuk segala jenis input di url
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard], 
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'bus',
        loadChildren: './views/bus/bus.module#BusModule'
      },
      {
        path: 'officer',
        loadChildren: './views/officer/officer.module#OfficerModule'
      },
      {
        path: 'customer',
        loadChildren: './views/customer/customer.module#CustomerModule'
      },
      {
        path: 'travel',
        loadChildren: './views/travel/travel.module#TravelModule'
      },
      {
        path: 'promotion',
        loadChildren: './views/promotion/promotion.module#PromotionModule'
      },
      {
        path: 'transaction',
        loadChildren: './views/transaction/transaction.module#TransactionModule'
      },
      {
        path: 'manage-account',
        loadChildren: './views/manageaccount/manage-account.module#ManageAccountModule'
      },
      {
        path: 'report',
        loadChildren: './views/report/report.module#ReportModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
