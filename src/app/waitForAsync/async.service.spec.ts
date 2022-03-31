import { TestBed, waitForAsync } from '@angular/core/testing';
import { AsyncService } from './async.service';

describe('AsyncService', () => {
	let service: AsyncService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AsyncService);
	});

	it('should fail with waitForAsync', () => {
		service.asynchronousMethod().then(() => {
			/** This line isn't reached by the tests because the test
			 * finished before this asynchronous thread got to this point */
			expect(true).toBeTruthy();
		});
	});

	it('should pass with waitForAsync', waitForAsync(() => {
		service.asynchronousMethod().then(() => {
			/** Now we have waitForAsync the test waits for this thread
			 * to complete before it ends the test so this line is reached */
			expect(true).toBeTruthy();
		});
	}));
});
