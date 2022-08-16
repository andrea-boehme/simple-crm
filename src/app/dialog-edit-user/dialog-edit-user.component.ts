import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user : User = new User();
  loading = false;
  birthDate: any = Date;
  userId: string | undefined;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    if (this.userId){
      this.firestore.collection('users').doc(this.userId).update(this.user.toJson())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
    } else {
      // trow error
    }
  }
}
