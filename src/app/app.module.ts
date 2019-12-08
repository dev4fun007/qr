import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import{

  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatInputModule,
  MatSnackBarModule,
  MatGridListModule,

} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CacheInterceptor } from './interceptor/cache-interceptor';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CreateQrComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
