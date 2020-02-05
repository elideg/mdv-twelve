import { AuthGaurd } from '@mdv-twelve/core-data';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { ProjectComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { LoginComponent } from 'libs/ui-lib/src/lib/login/login.component';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { WildcardComponent } from 'libs/ui-lib/src/lib/wildcard/wildcard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'items', canActivate: [AuthGaurd], children: [
    { path: '', component: ProjectComponent },
    { path: ':id', component: ProjectsItemComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
