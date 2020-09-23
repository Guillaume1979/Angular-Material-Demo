import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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


  toggleSidebar(): void {
    this.interactionService.changeSidebarState();
  }
}
