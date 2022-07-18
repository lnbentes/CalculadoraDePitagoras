import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HipotenusaComponent } from './hipotenusa/hipotenusa.component';

const routes: Routes = [
  {path: "", redirectTo: "hipotenusa", pathMatch: "full"},
  {path: "hipotenusa", component: HipotenusaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
