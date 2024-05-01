import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacionComponent } from './components/simulator/creacion/creacion.component';

export const routes: Routes = [

    {path:'',component: CreacionComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
