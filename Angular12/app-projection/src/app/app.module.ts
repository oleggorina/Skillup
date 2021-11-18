import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpoilersComponent } from './spoilers/spoilers.component';
import { SpoilerItemComponent } from './spoiler-item/spoiler-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SpoilersComponent,
    SpoilerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
