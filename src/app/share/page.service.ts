import { Injectable } from '@angular/core';
//import { Mockfriend } from './mockfriend';
import { Friend } from '../components/friend1/friend';

import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  friends: Friend[] = [];
  dataUrl = 'api/friends';

  // send data to another component testing
  //private f = new BehaviorSubject<Friend[]>([]);
  //readonly friend$ = this.f.asObservable();

  constructor(private httpClient: HttpClient) {
    //this.friends = Mockfriend.mfriends;
   }

/**** synchronous  The service must wait for the server to respond,
 * the service cannot return immediately with data,
 * and the browser will not block while the service waits.
*/
/*getFriends(): Friend[]  {
    return this.friends;
  }
  */

  getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.dataUrl)
      .pipe(tap(friends => {console.log('friends fetched...');
                            console.log(friends);
                          })
    );
  // return of(this.friends);
   //of(this.friends) returns an Observable<Friends[]> that emits a single value, the array of mock friends.
 }

 // get A friend
 getFriend(id: number): Observable<Friend> {
   return this.httpClient.get<Friend>(`${this.dataUrl}/${id}`);
 }

  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };

  addFriendServ(newFriend: Friend): Observable<Friend> {
   /*const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
      })
    };
    */
    let obs = this.httpClient.post<Friend>(this.dataUrl, newFriend, this.httpOptions);
    //this.f.next(this.friends);
    return obs;
 }

  /*addFriend(f:Friend): void {
    this.friends.push(f);
  }
  */

  // Edit or update
  editFriend(id: number, who: Friend): Observable<Friend> {
    return this.httpClient.put<Friend>(`${this.dataUrl}/${id}`, who,this.httpOptions);
  }

  // Delete
  delete(id: number): Observable<Friend> {
    return this.httpClient.delete<Friend>(`${this.dataUrl}/${id},${this.httpOptions}`);
  }

  // Search
  filterByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.dataUrl}?name_like=${name}`);
  }

  // handle error
}
