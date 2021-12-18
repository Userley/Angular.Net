import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EleyvaComponent } from './pages/eleyva/eleyva.component';

const routes: Routes = [
  { path: 'eleyva', component: EleyvaComponent },
  { path: '**', component: EleyvaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
