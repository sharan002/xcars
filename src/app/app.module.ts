import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';   
import { WebappComponent } from './webapp/webapp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { DatauplodeComponent } from './datauplode/datauplode.component';
import { GalleryComponent } from './gallery/gallery.component';





@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    NavbarComponent,
    IntroComponent,
    CardComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    DatauplodeComponent,
    GalleryComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




   