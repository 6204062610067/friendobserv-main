import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageService } from 'src/app/share/page.service';
import { Friend } from './friend'; //data model


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendTeacherComponent implements OnInit {
  //friend !: Friend; //test 1
  friends !: Friend[]; //test2
  friendForm !: FormGroup;

  newFriend = {id: 0, name:'',email:'',age: 0};
  //currentFriend !: Friend;
  isFriendAdded : boolean = false;
  editFriend :boolean = false;

  constructor(private fb: FormBuilder, private fservice: PageService) {
    //this.friend = new Friend("bob", "bob@jmail.com",42);
   }

  ngOnInit(): void {
    // should use reactive form
    this.friendForm = this.fb.group ({
      name: [''],
      email: [''],
      age: ['']
    });
    //**** synchronous */
    //this.getFriendPages();
    //The callring occurs synchronously,
    //as if the server could return products instantly or the browser could freeze the UI while it waited for the server’s response.

    this.getFriends();

    /* The new version waits for the Observable to emit the array of frineds—
    which could happen now or several minutes from now.
    Then subscribe passes the emitted array to the callback,
    which sets the component’s friends property.

  }*/
   /*getFriendPages() {
    this.friends = this.pageService.getFriends();
     }
     */

  /*changeDefaultName(str: string) {
    this.friend.name = str;
  }
  onSubmit(f:FormGroup): void {
    this.friend.name=f.get('FriendName')?.value;
    this.friend.email=f.get('FriendEmail')?.value;
    this.friend.age=f.get('FriendAge')?.value;
    let form_record = new Friend(f.get('FriendName')?.value,
                                    f.get('FriendEmail')?.value,
                                    f.get('FriendAge')?.value);
    this.friends.push(form_record);
  }*/

  }
  getFriends() {
    this.fservice.getFriends().subscribe(
      friends => this.friends = friends
    );
  }

  // add friend
  addFriend(): void {
    this.newFriend = this.friendForm.value;
    this.fservice.addFriendServ(this.newFriend).subscribe(
        response => {
          this.newFriend = response;
          console.log(response);
          this.isFriendAdded=true; // add button status
        }
    );
    this.getFriends(); //refresh all friends
  }
  // Reset after adding new
  newFriendAdded(): void {
    this.isFriendAdded = false; // add button status
    this.newFriend = {id: 0, name:'',email:'',age: 0};
  }

  deleteFriend(id: number) {
    this.fservice.delete(id).subscribe(
      response => {
        this.getFriends();
      }
    );
  }

  updateFriendClick(id: number):void {
    this.editFriend = true; // edit button status
    this.isFriendAdded = false; // add button status
    this.getAFriend(id);
  }

  getAFriend(id: number) : void {
    this.fservice.getFriend(id).subscribe(
      Afriend=> {
        this.newFriend = Afriend;
        console.log(`I will edit: ${Afriend}`);
      }
    );
  }

  updateAFriend():void {
    this.fservice.editFriend(this.newFriend.id, this.newFriend).subscribe(
      response => {
        console.log(response);
      }
    );
    this.getFriends();
    this.AFriendUpdated();
  }

  AFriendUpdated():void {
    this.isFriendAdded = false;
    this.editFriend = false;
    this.newFriend = {id: 0, name:'',email:'',age: 0};
  }

} //end of class
