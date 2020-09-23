import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1),
    );

  private isSidebarOpen = new Subject<boolean>();
  isSidebarOpen$ = this.isSidebarOpen.asObservable();
  private toggleSidebarState = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  changeSidebarState(): void {
    this.toggleSidebarState = !this.toggleSidebarState;
    this.isSidebarOpen.next(this.toggleSidebarState);
    console.log('toggleSidebarState =', this.toggleSidebarState);
  }


}
