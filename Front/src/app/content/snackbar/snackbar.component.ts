import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  openSnackBar(message, action): void {
    let snackBarRef = this.snackbar.open(message, action,
      {duration: 2000, horizontalPosition: 'center', verticalPosition: 'top'});

    snackBarRef.afterDismissed().subscribe(
      () => console.log('The snackbar was dismissed')
    );

    snackBarRef.onAction().subscribe(
      () => console.log('The snackbar was undid')
    );
  }


}
