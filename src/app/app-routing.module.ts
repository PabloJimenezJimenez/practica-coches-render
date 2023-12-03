import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloComponent } from './components/modelo/modelo.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path:'modelo', component:ModeloComponent},
  {path:'home', component:LandingPageComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
