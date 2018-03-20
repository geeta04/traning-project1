import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    LeftComponent,
    RightComponent
  ],

  declarations: [
    NavbarComponent,
    LeftComponent,
    RightComponent
    ]
})
export class RootModuleModule { }
