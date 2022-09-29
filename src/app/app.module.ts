import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './mocking-and-spying/user.module';
import { RoutingExampleModule } from './routing/routing-example.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		UserModule,
		RoutingExampleModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
