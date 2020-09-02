import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {WelcomeComponent} from './content/welcome/welcome.component';
import {PanelComponent} from './content/panel/panel.component';
import { CardComponent } from './content/card/card.component';
import { TabsComponent } from './content/tabs/tabs.component';
import { FormsComponent } from './content/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WelcomeComponent,
    PanelComponent,
    CardComponent,
    TabsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'panel', component: PanelComponent},
      {path: 'card', component: CardComponent},
      {path: 'tabs', component: TabsComponent},
      {path: 'forms', component: FormsComponent}

    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
