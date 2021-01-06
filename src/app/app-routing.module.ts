import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detalles/:id', component: DetallesComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
