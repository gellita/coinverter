import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {MyComponentConverterComponent} from "../my-component-converter/my-component-converter.component";
import {AppComponent} from "../app.component";


@NgModule({
  declarations: [
    AppComponent,
    MyComponentConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
