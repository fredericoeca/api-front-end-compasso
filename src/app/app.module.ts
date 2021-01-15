import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { GithubService } from './service/github.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
