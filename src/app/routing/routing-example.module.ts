import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		Route1Component,
		Route2Component
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class RoutingExampleModule { }
