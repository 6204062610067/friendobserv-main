import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { FriendStudentComponent } from './components/friend1/friend.component';
import { FriendTeacherComponent } from './components/friend2/friend.component';

import { InMemoryFriendService} from './share/in-memory-friend.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    FriendTeacherComponent ,
    FriendStudentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryFriendService, {dataEncapsulation: false})
  ],
  providers: [InMemoryFriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
