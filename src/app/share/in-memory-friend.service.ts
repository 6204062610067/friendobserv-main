import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryFriendService extends InMemoryDbService {
  createDb() {
    const friends = [
      {
        id: 1,
        name: 'job',
        email: 'job@jmail.com',
        age: 25
      },
      {
        id: 2,
        name: 'tob',
        email: 'tob@tmail.com',
        age: 26
      },
      {
        id: 3,
        name: 'rob',
        email: 'rob@tmail.com',
        age: 29
      },

    ]
    return {friends}; //API Path Testing
  }

}
