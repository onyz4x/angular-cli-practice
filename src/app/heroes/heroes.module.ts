import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HeroesComponent}
    ])
  ],
  declarations: [HeroesComponent]
})
export class HeroesModule {
}
