import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculateIndexComponent } from './calculate-index/calculate-index.component';
import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'calculate', component: CalculateIndexComponent},
    {path: '**', component: Page404Component}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);