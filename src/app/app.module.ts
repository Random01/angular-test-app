import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexTestComponent } from './flex-test';
import { TestComponent } from './test';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FlexTestComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
