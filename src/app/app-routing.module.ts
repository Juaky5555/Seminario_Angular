import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetProductsComponent } from './vet-products/vet-products.component';
import { VetAboutComponent } from './vet-about/vet-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: VetProductsComponent
  },
  {
    path: 'about',
    component: VetAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
