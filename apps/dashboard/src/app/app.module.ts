import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreDataModule } from '@mdv-twelve/core-data';
import { MaterialModule } from '@mdv-twelve/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/projects-details/projects-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, ProjectComponent, ProjectListComponent, ProjectDetailsComponent, ProjectsItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    UiLibModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
