# Angular Material


## 1. Installation

`ng add @angular/material`

To allow a better handle of Material modules, we will create a dedicated module in a separated directory.

Use the following command with Angular CLI :
``ng g m material``

In material.module.ts, add a constant which contains all the Angular Material that you import in your project.

Example :
```typescript
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];
```

then add 

```typescript
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
```
And finally import the dedicated module that you just created in app.module.ts
```typescript
import { MaterialModule } from './material/material.module';
```
and put the module in imports
```typescript
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ]
```

## 2. Main features
Official documentation : [Angular Material](https://material.angular.io/components/categories)
#### 1. Buttons
Import : ``MatButtonModule``
```html
<div>
  <button mat-button>Hello World</button>
  <button mat-raised-button>Hello World</button>
  <button mat-flat-button>Hello World</button>
  <button mat-stroked-button>Hello World</button>
</div>

<div>
  <button mat-icon-button>Icon</button>
  <button mat-fab>Icon</button>
  <button mat-mini-fab>Icon</button>
</div>

<div>
  <button color="primary" mat-button>Primary</button>
  <button color="accent" mat-button>Accent</button>
  <button color="warn" mat-button>Warn</button>
</div>

<div>
  <button mat-raised-button color="primary" disableRipple>Click here</button>
  <button mat-raised-button color="accent">Click here</button>
  <button mat-raised-button color="warn">Click here</button>
  <button mat-fab color="accent" >Click</button>
</div>
```
#### 2. Toggle buttons
Import ``MatButtonToggleModule``

```html
<div>
  <mat-button-toggle #toggleBtn checked disableRipple>On/Off</mat-button-toggle>
  {{toggleBtn.checked}}
</div>
<br>
<div>
  <mat-button-toggle-group #formToggle="matButtonToggleGroup" multiple>
    <mat-button-toggle value="angular">Angular</mat-button-toggle>
    <mat-button-toggle value="react">React</mat-button-toggle>
    <mat-button-toggle value="vue">Vue</mat-button-toggle>
  </mat-button-toggle-group>
  {{formToggle.value}}
</div>
```

#### 3. Icons
Import ``MatIconModule``
```html
<div>
  <mat-icon>favorite</mat-icon>
</div>
```

#### 4. Badges
Import ``MatBadgeModule``
```html
<div>
  <span matBadge="?" matBadgeColor="accent" matBadgeOverlap="false">Badge</span>
</div>
```
We can also use :

``matBadgePosition`` to change the position of the badge

``[matBadgeHidden]`` to hide the notification in certain cases

#### 5. Spinner
Import ``MatProgressSpinnerModule``
```html
<!--Spinner which loads itself up to a defined value in the TS component-->
<mat-progress-spinner [value]="spinnerValue"></mat-progress-spinner>
<!--or a rotating spinner (for in progress loading for example)-->
<mat-spinner></mat-spinner>
```

#### 6. Navbar (with ToolBar)
Import ``MatToolbarModule``
```html
<mat-toolbar color="primary" class="navbar">
  <div>Cetelem</div>
  <div>
    <span>Menu</span>
    <span>Language</span>
    <span>Logout</span>
  </div>
</mat-toolbar>
```
And corresponding CSS :
```css
.navbar {
  justify-content: space-between;
}

.navbar span {
  padding-right: 10px;
}
```

#### 7. Le sidenav
Import ``MatSidenavModule``
An example with a hamburger menu to toggle the sidenav
```html
<mat-toolbar color="primary" class="navbar">
  <div class="menu">
    <button mat-icon-button (click)="sidenav.toggle()">
      <mat-icon *ngIf="!sidenav.opened">menu</mat-icon>
      <mat-icon *ngIf="sidenav.opened">menu_open</mat-icon>
    </button>
    <a [routerLink]="['']">Cetelem</a>
  </div>
  <div>
    <span>Menu</span>
    <span>Language</span>
    <span>Logout</span>
  </div>
</mat-toolbar>

<mat-sidenav-container>
<!--  with mode "over" the sidenav come over the content-->
<!--  there is also 2 other mode "push" and "side"-->
  <mat-sidenav #sidenav mode="over" >Sidenav</mat-sidenav>
  <mat-sidenav-content>Main Content</mat-sidenav-content>
</mat-sidenav-container>
```

#### 8. Menu (dropdown menu)
Import ``MatMenuModule``
```html
    <button mat-button [matMenuTriggerFor]="lessons">Lessons</button>
    <mat-menu #lessons="matMenu">
      <button mat-menu-item>JS Frameworks</button>
      <button mat-menu-item>Design Frameworks</button>
    </mat-menu>
    <button mat-button>Language</button>
    <button mat-button>Logout</button>
```
With subMenu
```html
    <button mat-button [matMenuTriggerFor]="lessons">Lessons</button>
    <mat-menu #lessons="matMenu">
      <button mat-menu-item [matMenuTriggerFor]="subMenu1">JS Frameworks</button>
      <mat-menu #subMenu1="matMenu">
        <button mat-menu-item>Angular</button>
        <button mat-menu-item>React</button>
        <button mat-menu-item>Vue</button>
      </mat-menu>
      <button mat-menu-item [matMenuTriggerFor]="subMenu2">Design Frameworks</button>
      <mat-menu #subMenu2="matMenu">
        <button mat-menu-item>Bootstrap</button>
        <button mat-menu-item>Angular Material</button>
      </mat-menu>
    </mat-menu>
```
We can also proceed to lazzy loading of the menu content with ``ng-template`` et ``matMenuContent``
```html
<button mat-button [matMenuTriggerFor]="lessons">Lessons</button>
<mat-menu #lessons="matMenu">
    <ng-template matMenuContent>
        <button mat-menu-item>JS Frameworks</button>
        <button mat-menu-item>Design Frameworks</button>
    </ng-template>
</mat-menu>
```

#### 9. Lists
Import ``MatListModule``

##### Simple list :
```html
    <mat-list>
      <mat-list-item>Item 1</mat-list-item>
      <mat-list-item>Item 2</mat-list-item>
      <mat-list-item>Item 3</mat-list-item>
    </mat-list>
```
##### List for navigation
You can use it in a sidenav for example.
```html
    <mat-nav-list>
      <a mat-list-item href="#">Link 1</a>
      <a mat-list-item href="#">Link 2</a>
      <a mat-list-item href="#">Link 3</a>
    </mat-nav-list>
```

##### List with icons and separations
Import also ``MatDividerModule``
```html
    <mat-list>
      <mat-list-item>
        <mat-icon mat-list-icon>folder</mat-icon>
        <h3 matLine>File 1</h3>
        <p matLine>Detail on the file</p>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>
        <mat-icon mat-list-icon>folder</mat-icon>
        <h3 matLine>File 2</h3>
        <p matLine>Detail on the file</p>
      </mat-list-item>
    </mat-list>
```
The ``mat-divider`` tag allows to separate the different list items.

#### 10. Grid list
Import ``MatGridListModule``
```html
    <mat-grid-list cols="2" rowHeight="100px" gutterSize="15px">
      <mat-grid-tile colspan="2">Tile 1</mat-grid-tile>
      <mat-grid-tile>Tile 2</mat-grid-tile>
      <mat-grid-tile>Tile 3</mat-grid-tile>
      <mat-grid-tile>Tile 4</mat-grid-tile>
      <mat-grid-tile>Tile 5</mat-grid-tile>
    </mat-grid-list>
```

#### 11. Panels
Import `MatExpansionModule`

The accordion tag allows to close automaticaly a panel when another one is opening
```html
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Panel 1
      </mat-panel-title>
      <mat-panel-description>
        Panel's description
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>Panel's Content</p>
    <mat-action-row>
      <button mat-button> Action</button>
    </mat-action-row>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Panel 2
      </mat-panel-title>
      <mat-panel-description>
        Panel's description
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>Panel's Content</p>
    <mat-action-row>
      <button mat-button>Action</button>
    </mat-action-row>
  </mat-expansion-panel>
</mat-accordion>
```

#### 12. Cards
Import `MatCardModule`
```html
<mat-card>
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Card Title</mat-card-title>
    <mat-card-subtitle>subtitle</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="assets/img/chien_motard.jpg" alt="Photo of a dog on a moto">
  <mat-card-content>
    <p>Put here the card content</p>
  </mat-card-content>
  <mat-card-actions align="end">
    <button mat-raised-button color="accent">Button 1</button>
    <button mat-raised-button color="accent">Button 2</button>
  </mat-card-actions>
</mat-card>
```

#### 13. Tabs
Import `MatTabsModule`
```html
<mat-tab-group #tabRef (selectedTabChange)="logChange(tabRef.selectedIndex)>
  <mat-tab label="Angular">Angular content</mat-tab>
  <mat-tab label="React">React content</mat-tab>
  <mat-tab label="Vue">Vue content</mat-tab>
</mat-tab-group>
```

#### 14. Stepper
Import `MatStepperModule`
```html
<mat-horizontal-stepper>
  <mat-step label="Shipping Address">
    <p>Shipping Address Details</p>
    <button mat-button color="accent" matStepperNext>Next Step</button>
  </mat-step>
  <mat-step label="Billing Address">
    <p>Billing Address Details</p>
    <!--    Buttons to navigate between the next and previous steps-->
    <div>
      <button mat-button color="accent" matStepperPrevious>Previous Step</button>
      <button mat-button color="accent" matStepperNext>Next Step</button>
    </div>
  </mat-step>
  <mat-step label="Place Order">
    <p>Order Details</p>
    <button mat-button color="accent" matStepperPrevious>Previous Step</button>
  </mat-step>
</mat-horizontal-stepper>
```
You can also add the angular attribute "completed" and "optional" to your mat-step to modify the navigation.

#### 15. Forms
##### Inputs
```html

```

##### Select
```html

```

##### Checkbox and Radio buttons
```html

```

#### 18. Date Picker
```html

```

