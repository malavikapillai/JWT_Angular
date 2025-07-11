import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavabarComponent } from './navabar/navabar.component'; // ⬅️ IMPORT THIS
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';




import { routes } from './app.routes';
import { tokenInterceptor } from './interceptor/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(withInterceptors([tokenInterceptor])),

  ]
};
