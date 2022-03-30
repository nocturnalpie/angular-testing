import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { usersEndpoint } from './api-endpoints';

@Injectable({
	providedIn: 'root'
})
export class HttpRequestsService {

	constructor(private httpClient: HttpClient) { }

	public getAllUsers(): Observable<string[]> {
		return this.httpClient
			.get<string[]>(usersEndpoint)
			// do something more interesting here like show a snackbar
			.pipe(catchError(() => of([])));
	}

}
