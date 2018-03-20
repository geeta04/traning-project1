import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootModuleModule } from './root-module/root-module.module';
import { DataserviceService  } from './root-module/dataservice.service';

import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RootModuleModule
  ],
  providers: [ DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
