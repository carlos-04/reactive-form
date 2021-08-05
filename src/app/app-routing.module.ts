import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';


const routes: Routes = [

  {path: 'home', component: FormReactivoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
