import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NvlPipe } from './pipes/nvl.pipe';
import { FormatNumPipe } from './pipes/format-num.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NvlPipe,
    FormatNumPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
