import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
// import {HeroesComponent} from '../heroes/heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

const thisRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'heroes', loadChildren: () => new Promise(resolve => {
    (require as any).ensure([], (require: any) => {
      resolve(require('../heroes/heroes.module').HeroesModule);
    });
  })
  },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(thisRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
