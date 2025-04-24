import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ProjectsModule} from './features/projects/projects.module';
import {LayoutModule} from './layout/layout.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/services/auth/auth.service';
import {ProjectsService} from './core/services/projects/projects.service';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';
import { FilesService } from './core/services/files/files.service';
import { AuthModule } from './features/auth/auth.module';
import { HomeComponent } from './features/home/pages/home/home.component';
import {RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    ProjectsModule,
    LayoutModule,
    HttpClientModule,
    MatButton
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    ProjectsService,
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
