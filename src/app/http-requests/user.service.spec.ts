import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { usersEndpoint } from '../api-endpoints';
import { UserModule } from '../mocking-and-spying/user/user.module';
import { UserService } from './user.service';

describe('UserService', () => {
	let service: UserService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				UserModule,
				HttpClientTestingModule,
			]
		});
		service = TestBed.inject(UserService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	describe('getAllUsers', () => {
		it('should return the result from the request to the api', waitForAsync(() => {
			const fakeResponse = ['user1', 'user2'];

			service.getAllUsers().subscribe(result => {
				expect(result).toBe(fakeResponse);
			});

			httpTestingController.expectOne(usersEndpoint).flush(fakeResponse);
		}));

		it('should perform a get request', waitForAsync(() => {
			service.getAllUsers().subscribe();

			const request = httpTestingController.expectOne(usersEndpoint);
			expect(request.request.method).toBe('GET');
		}));

		it('should return an empty list on error', waitForAsync(() => {
			service.getAllUsers().subscribe(result => {
				expect(result).toEqual([]);
			});

			httpTestingController.expectOne(usersEndpoint)
				.flush('500', { status: 500, statusText: 'Server error' });
		}));
	});

	afterEach(() => {
		httpTestingController.verify();
	});
});
