import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { QuizzControllerService } from './services/quizz-controller.service';
import {routes} from './routes';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { QuizzComponent } from './quizz/quizz.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FileSelectDirective } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginformComponent,
    SignupformComponent,
    UserprofileComponent,
    QuizzComponent,
    EditprofileComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService,QuizzControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
