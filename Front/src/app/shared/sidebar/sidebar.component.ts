import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isHandset = false;
  isOpen: boolean;

  constructor(private interactionService: InteractionService) {
  }

  ngOnInit(): void {
    this.checkIfIsHandset();
    this.interactionService.isSidebarOpen$.subscribe(
      state => this.isOpen = state
    );
  }

  checkIfIsHandset(): void {
    this.interactionService.isHandset$.subscribe(
      state => {
        if (state === true) {
          this.isHandset = true;
          this.isOpen = !this.isHandset;
        } else {
          this.isHandset = false;
          this.isOpen = !this.isHandset;
        }
      }
    );
  }

  closeSidebar(): void {
    if (this.isOpen) {
      this.interactionService.changeSidebarState();
    }
  }


}
