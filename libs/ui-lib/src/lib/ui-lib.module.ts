// tslint:disable-next-line: nx-enforce-module-boundaries
import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@mdv-twelve/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [LoginComponent, WildcardComponent, ToolbarComponent],
  exports: [
    LoginComponent,
    WildcardComponent,
    ToolbarComponent
  ]
})
export class UiLibModule {}
