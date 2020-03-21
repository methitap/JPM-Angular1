import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { FormNewsComponent } from './components/form-news/form-news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { AnnouceComponent } from './components/annouce/annouce.component';
import { AnnnoucePageComponent } from './components/annnouce-page/annnouce-page.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceViewComponent } from './components/service-view/service-view.component';
import { ServiceHistoryComponent } from './components/service-history/service-history.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillAnnounceComponent } from './components/bill-announce/bill-announce.component';
import { EditAnnounceComponent } from './components/edit-announce/edit-announce.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { BillViewComponent } from './components/bill-view/bill-view.component'


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'login-form', component: LoginFormComponent},
  // // { path: 'login', redirectTo: '/login' },

  // { path: 'annouce', component: AnnouceComponent },
  // { path: 'appmenu', component: AppmenuComponent},
  // { path: 'annouce', redirectTo: '/annouce' }

];
@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppsettingComponent,
    FormNewsComponent,
    SideNavComponent,
    LoginComponent,
    LoginFormComponent,
    AnnouceComponent,
    AnnnoucePageComponent,
    ServiceListComponent,
    ServiceViewComponent,
    ServiceHistoryComponent,
    BillHistoryComponent,
    BillAnnounceComponent,
    EditAnnounceComponent,
    RegisterPageComponent,
    BillViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
