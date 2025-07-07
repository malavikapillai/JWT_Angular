import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavabarComponent } from './navabar/navabar.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }

];
