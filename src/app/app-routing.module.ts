import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FriendStudentComponent } from './components/friend1/friend.component';
import { FriendTeacherComponent } from './components/friend2/friend.component';

const routes: Routes = [
  { path: 'Form-and-Data-Model1', component: FriendStudentComponent},
  { path: 'Form-and-Data-Model2', component: FriendTeacherComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
