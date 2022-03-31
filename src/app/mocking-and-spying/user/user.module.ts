import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../http-requests/user.service';
import { UserComponent } from './user.component';

@NgModule({
	declarations: [
		UserComponent
	],
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		UserService
	]
})
export class UserModule { }
