import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AnnouceComponent } from './components/annouce/annouce.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { from } from 'rxjs';
import { AnnnoucePageComponent } from './components/annnouce-page/annnouce-page.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceViewComponent } from './components/service-view/service-view.component';
import { ServiceHistoryComponent } from './components/service-history/service-history.component';
import {BillAnnounceComponent} from './components/bill-announce/bill-announce.component';
import {BillHistoryComponent} from './components/bill-history/bill-history.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { BillViewComponent } from './components/bill-view/bill-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-form', component: LoginFormComponent },
  // { path: 'login', redirectTo: '/login' },

  { path: 'annouce', component: AnnouceComponent },
  { path: 'appmenu', component: AppmenuComponent },
  { path: 'news', component: AnnnoucePageComponent },
  { path: 'serviceList', component: ServiceListComponent },
  { path: 'serviceView', component: ServiceViewComponent },
  { path: 'serviceHistory', component: ServiceHistoryComponent },
  { path: 'billAnnounce', component: BillAnnounceComponent },
  { path: 'billHistory', component: BillHistoryComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'billView', component: BillViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
