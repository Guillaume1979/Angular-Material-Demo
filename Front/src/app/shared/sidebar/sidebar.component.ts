import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 isHandset = false;

  constructor(private interactionService: InteractionService) {
  }

  ngOnInit(): void {
    this.checkIfIsHandset();
  }

  checkIfIsHandset(): void {
    this.interactionService.isHandset$.subscribe(
      state => {
        if (state === true) {
          this.isHandset = true;
        } else {
          this.isHandset = false;
        }
      }
    );
  }

}
