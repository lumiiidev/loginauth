import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent }

];
