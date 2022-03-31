import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/http-requests/user.service';
import { UserComponent } from './user.component';
import { UserModule } from './user.module';

describe('UserComponent spying on UserService', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;

	let userService: UserService;

	const fakeUsers = ['user1', 'user2'];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UserModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UserComponent);
		component = fixture.componentInstance;
		userService = TestBed.inject(UserService); 	// <---  inject the UserService in here.
		fixture.detectChanges();
	});

	it('should get users from the user service', waitForAsync(() => {
		// Spy on the userService here (remember to use your injected variable and not the class name here)
		spyOn(userService, 'getAllUsers').and.returnValue(of(fakeUsers));

		component.getUsers();

		component.users$.subscribe(users => {
			expect(users).toEqual(fakeUsers);
		});
	}));

	it('should get users from the user service', waitForAsync(() => {
		// If you don't need the method to return anything
		const getAllUsersSpy = spyOn(userService, 'getAllUsers');

		component.getUsers();

		expect(getAllUsersSpy).toHaveBeenCalled();
	}));

	it('should get users from the user service', waitForAsync(() => {
		// If you want to spy on something but still want it to be called as usual.
		// This can be useful for when you want to spy on a method within the class you are testing.
		const getAllUsersSpy = spyOn(userService, 'getAllUsers').and.callThrough();

		component.getUsers();

		expect(getAllUsersSpy).toHaveBeenCalled();
	}));
});
