import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';

import { LoginService } from './providers/login.service';
import { RegisterService } from './providers/register.service';
import { EditService } from './providers/edit.service';
import { LeaguesService } from './providers/leagues.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'leagues', component:LeaguesComponent},
  {path: 'edit', component:EditComponent},
  {path: 'admin', component:AdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LeaguesComponent,
    EditComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: 
  [LoginService,
   RegisterService,
   EditService,
   LeaguesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
