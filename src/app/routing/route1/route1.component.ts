import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ml-route1',
	templateUrl: './route1.component.html',
})
export class Route1Component {
	constructor(private readonly router: Router) { }

	public navigateToRoute2(): void {
		this.router.navigate(['route2']);
	}
}
