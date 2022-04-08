import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/http-requests/user.service';
import { UserComponent } from './user.component';
import { UserModule } from './user.module';

describe('UserComponent with Mock UserService', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;

	let mockUserService: jasmine.SpyObj<UserService>;

	const fakeUsers = ['user1', 'user2'];

	beforeEach(async () => {
		// Create your mock.
		// Note: Remember to define it in the before each so that any changes you make to it don't affect the other tests.
		mockUserService = jasmine.createSpyObj<UserService>(
			{ getAllUsers: of(fakeUsers) }
			//, { property1: 1, property2: 2 }   <-- You can also pass in properties here
		);

		// You may also this this written with the class as the first parameter but we prefer the first method as it helps with renaming and intellisense etc
		// mockUserService = jasmine.createSpyObj('UserService', { getAllUsers: of(fakeUsers) });

		// If you don't need the mock to return anything or you want to set it to something different in each test then you can just pass the method names in like this instead.
		// mockUserService = jasmine.createSpyObj<UserService>(['getAllUsers']);

		await TestBed.configureTestingModule({
			imports: [UserModule],
			providers: [
				{ provide: UserService, useValue: mockUserService } // <--- provide the mock here
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// This test uses the default values we setup in the mock
	it('should get users from the user service', waitForAsync(() => {
		component.getUsers();

		component.users$.subscribe(users => {
			expect(users).toEqual(fakeUsers);
		});
	}));

	// This test updates the value that getAllUsers returns
	it('should get users from the user service with updated mock', waitForAsync(() => {
		const emptyUsers: string[] = [];
		mockUserService.getAllUsers.and.returnValue(of(emptyUsers));

		component.getUsers();

		component.users$.subscribe(users => {
			expect(users).toEqual(emptyUsers);
		});
	}));
});
