import { Location } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { RoutingExampleModule } from '../routing-example.module';
import { Route1Component } from './route1.component';

describe('Route1Component', () => {
	let fixture: ComponentFixture<Route1Component>;
	let location: Location;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RoutingExampleModule,
				RouterTestingModule.withRoutes(routes)
			]
		})
			.compileComponents();
		location = TestBed.inject(Location);
		router = TestBed.inject(Router);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Route1Component);
		fixture.detectChanges();
	});

	describe('button 1 - using routerLink in html', () => {
		// you can only test this by checking the path
		it('should navigate to /route2 when button is clicked', waitForAsync(() => {
			const button = fixture.debugElement.query(By.css('#button1')).nativeElement;
			button.click();

			fixture.whenStable().then(() => {
				expect(location.path()).toBe('/route2');
			});
		}));
	});

	describe('button 2 - using router in the component', () => {
		it('should navigate to /route2 when button is clicked', waitForAsync(() => {
			const button = fixture.debugElement.query(By.css('#button2')).nativeElement;
			button.click();

			fixture.whenStable().then(() => {
				expect(location.path()).toBe('/route2');
			});
		}));

		// you can also test this button by spying on the router
		it('should route to /route2 when button is clicked', waitForAsync(() => {
			const routerSpy = spyOn(router, 'navigate');

			const button = fixture.debugElement.query(By.css('#button2')).nativeElement;
			button.click();

			fixture.whenStable().then(() => {
				expect(routerSpy).toHaveBeenCalledOnceWith(['route2']);
			});
		}));
	});
});
