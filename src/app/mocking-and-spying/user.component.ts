import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/http-requests/user.service';

@Component({
	selector: 'ml-user',
	template: `
		<p *ngFor="let user of (users$ | async)">
			{{user}}
		</p>
	`,
})
export class UserComponent {

	public users$: Observable<string[]>

	constructor(private readonly userService: UserService) { }

	public getUsers(): void {
		this.users$ = this.userService.getAllUsers();
	}

}
