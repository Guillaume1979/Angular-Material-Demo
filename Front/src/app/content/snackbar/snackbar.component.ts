import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  name: string;

  constructor(private snackbar: MatSnackBar,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openSnackBar(message, action): void {
    const snackBarRef = this.snackbar.open(message, action,
      {duration: 2000, horizontalPosition: 'center', verticalPosition: 'top'});

    snackBarRef.afterDismissed().subscribe(
      () => console.log('The snackbar was dismissed')
    );

    snackBarRef.onAction().subscribe(
      () => console.log('The snackbar was undid')
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {data: {name: this.name}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog was closed and the user clicked on ${result}`);
    });
  }


}
