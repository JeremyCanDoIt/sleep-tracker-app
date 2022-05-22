import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sleeplog',
    loadChildren: () => import('./sleeplog/sleeplog.module').then( m => m.SleeplogPageModule)
  },
  {
    path: 'drowsylog',
    loadChildren: () => import('./drowsylog/drowsylog.module').then( m => m.DrowsylogPageModule)
  },
  {
    path: 'alllogs',
    loadChildren: () => import('./alllogs/alllogs.module').then( m => m.AlllogsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
