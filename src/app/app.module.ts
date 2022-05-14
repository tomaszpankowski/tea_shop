import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { FaqModule } from './faq/faq.module';
import { FooterComponent } from './footer/footer.component';
import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { InfoModule } from './info/info.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivacyModule } from './privacy/privacy.module';
import { UserModule } from './user/user.module';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ContactModule,
    FaqModule,
    GalleryModule,
    HomeModule,
    InfoModule,
    PrivacyModule,
    UserModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
