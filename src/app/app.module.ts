import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexBodymainComponent } from './components/index-bodymain/index-bodymain.component';
import { IndexBodyMiddleComponent } from './components/index-body-middle/index-body-middle.component';
import { IndexDownComponent } from './components/index-down/index-down.component';
import { BuildingComponent } from './pages/building/building.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    IndexBodymainComponent,
    IndexBodyMiddleComponent,
    IndexDownComponent,
    BuildingComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
