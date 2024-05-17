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
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ModuleModule { }
