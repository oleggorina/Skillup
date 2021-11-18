import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterComponent } from './outer/outer.component';
import { SampleItemComponent } from './sample-item/sample-item.component';
import { SamplesComponent } from './samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent,
    SampleItemComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
