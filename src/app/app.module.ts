import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
// import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';

// import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule, Routes} from '@angular/router';

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
  declarations: [
    AppComponent,
    HeroDetailComponent,
    // HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(thisRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
