import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './routing/route1/route1.component';
import { Route2Component } from './routing/route2/route2.component';

export const routes: Routes = [
	{
		path: 'route1',
		component: Route1Component
	},
	{
		path: 'route2',
		component: Route2Component
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
