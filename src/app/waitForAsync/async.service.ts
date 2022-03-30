import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AsyncService {

	constructor() { }

	public asynchronousMethod(): Promise<string> {
		return of('test').toPromise();
	}
}
