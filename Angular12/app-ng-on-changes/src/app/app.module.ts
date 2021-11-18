import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SampleItemComponent } from './sample-item/sample-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    SampleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
