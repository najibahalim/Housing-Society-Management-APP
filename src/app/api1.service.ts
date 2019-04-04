import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../app/user.interface';
import {Notice} from '../app/notice.interface';
import {Complain} from '../app/complain.interface';
import { Meeting } from '../app/meeting.interface';

@Injectable({
  providedIn: "root"
})
export class Api1Service {
  private userCollection: AngularFirestoreCollection<User>;

  private users: Observable<User[]>;
  private noticeCollection: AngularFirestoreCollection<Notice>;
  private notices: Observable<Notice[]>;
  private complaintCollection: AngularFirestoreCollection<Complain>;
  private complaints: Observable<Complain[]>;
  private meetingCollection: AngularFirestoreCollection<Meeting>;
  private meetings: Observable<Meeting[]>;

  constructor(db: AngularFirestore) {
    this.meetingCollection = db.collection<Meeting>("meeting");

    this.meetings = this.meetingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.userCollection = db.collection<User>("users");

    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.complaintCollection = db.collection<Complain>("complain");

    this.complaints = this.complaintCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.noticeCollection = db.collection<Notice>("notices");

    this.notices = this.noticeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.userCollection.doc<User>(id).valueChanges();
  }

  updateUsers(todo: User, id: string) {
    return this.userCollection.doc(id).update(todo);
  }

  AddUser(todo: User) {
    return this.userCollection.add(todo);
  }

  removeUserById(id) {
    return this.userCollection.doc(id).delete();
  }

  getNotices() {
    return this.notices;
  }

  getNoticeById(id) {
    return this.noticeCollection.doc<User>(id).valueChanges();
  }

  updateNotices(todo: Notice, id: string) {
    return this.noticeCollection.doc(id).update(todo);
  }

  AddNotice(todo: Notice) {
    return this.noticeCollection.add(todo);
  }

  removeNoticeById(id) {
    return this.noticeCollection.doc(id).delete();
  }
  getcomplaints() {
    return this.complaints;
  }

  AddComplain(todo: Complain) {
    return this.complaintCollection.add(todo);
  }
  getmeetings() {
    return this.meetings;
  }

  AddMeeting(todo: Meeting) {
    return this.meetingCollection.add(todo);
  }
}
