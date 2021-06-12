import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
