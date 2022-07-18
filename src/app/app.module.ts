import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HipotenusaComponent } from './hipotenusa/hipotenusa.component';
import { FooterComponent } from './footer/footer.component';
import { CatetoComponent } from './cateto/cateto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HipotenusaComponent,
    FooterComponent,
    CatetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
