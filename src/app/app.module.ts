import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsTestComponent } from './events-test';
import { FlexTestComponent } from './flex-test';
import { TemplatesTestComponent } from './templates-test';
import { TestComponent } from './test';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FlexTestComponent,
    EventsTestComponent,
    TemplatesTestComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
