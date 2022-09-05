import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiRootModule } from '@taiga-ui/core';
import { TuiEditorModule, TuiColorPickerModule, TuiEditorSocketModule } from '@taiga-ui/addon-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiEditorModule,
    TuiColorPickerModule,
    TuiEditorSocketModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
