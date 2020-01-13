import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./features/about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: 'about'
  // }
];

@NgModule({
   // useHash supports github.io demo page, remove in your app
   imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
