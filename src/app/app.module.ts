import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { CardsComponent } from './components/cards/cards.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    CardsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
