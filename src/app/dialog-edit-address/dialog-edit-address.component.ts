import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user : User = new User();
  loading = false;
  userId!: string;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

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
