# Angular Material


## 1. Installation

`ng add @angular/material`

Pour permettre une meilleure gestion des modules de Material, on va ensuite créer un module dédié dans un répertoire séparé.

Taper dans le terminal à l'aide de Angular CLI :
``ng g m material``

Dans material.module.ts on ajoute une constante qui contiendra l'ensemble des modules de Material que l'on va utiliser dans notre application.

Exemple :
```typescript
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];
```

Puis on ajoute 

```typescript
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
```

Et enfin on importe le module dans app.module.ts
```typescript
import { MaterialModule } from './material/material.module';
```
et on met le module dans les imports
```typescript
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ]
```

## 2. Les principales fonctionnalités
Documentation officielle : [Angular Material](https://material.angular.io/components/categories)
#### 1. Les boutons
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
  <button mat-raised-button color="primary" disableRipple>Clique sur Toto</button>
  <button mat-raised-button color="accent">Clique sur Toto</button>
  <button mat-raised-button color="warn">Clique sur Toto</button>
  <button mat-fab color="accent" >Clique</button>
</div>
```
#### 2. Les boutons Toggle
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

#### 3. Les Icons
Import ``MatIconModule``
```html
<div>
  <mat-icon>favorite</mat-icon>
</div>
```

#### 4. Les badges
Import ``MatBadgeModule``
```html
<div>
  <span matBadge="?" matBadgeColor="accent" matBadgeOverlap="false">Badge</span>
</div>
```
We can also use :

``matBadgePosition`` to change the position of the badge

``[matBadgeHidden]`` to hide the notification in certain cases

#### 5. Le spinner
Import ``MatProgressSpinnerModule``
```html
<!--Spinner qui se charge en fonction d'une valeur définie dans le composant-->
<mat-progress-spinner [value]="spinnerValue"></mat-progress-spinner>
<!--ou un spinner en rotation (pour les chargements par ex)-->
<mat-spinner></mat-spinner>
```

#### 6. La navbar (with ToolBar)
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
Et le css correspondant :
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

#### 8. Le menu
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
Avec les sous-menus lorsque le menu s'ouvre
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
On peut aussi procéder à un lazzy loading du contenu des menus avec ``ng-template`` et ``matMenuContent``
```html
<button mat-button [matMenuTriggerFor]="lessons">Lessons</button>
<mat-menu #lessons="matMenu">
    <ng-template matMenuContent>
        <button mat-menu-item>JS Frameworks</button>
        <button mat-menu-item>Design Frameworks</button>
    </ng-template>
</mat-menu>
```

#### 9. Les listes
Import ``MatListModule``

#####Simple list :
```html
    <mat-list>
      <mat-list-item>Item 1</mat-list-item>
      <mat-list-item>Item 2</mat-list-item>
      <mat-list-item>Item 3</mat-list-item>
    </mat-list>
```
######list for navigation
You can use it in a sidenav for example.
```html
    <mat-nav-list>
      <a mat-list-item href="#">Link 1</a>
      <a mat-list-item href="#">Link 2</a>
      <a mat-list-item href="#">Link 3</a>
    </mat-nav-list>
```

#####List with icons and separations
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

#### 10. Les grid list
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

#### 11. Les panels (dépliants)
```html

```

#### 12. Les cards
```html

```

#### 13. Les Tabs
```html

```

#### 14. Les stepper
```html

```

#### 15. Les inputs
```html

```

#### 16. Les select
```html

```

#### 17. Les checkbox et radio buttons
```html

```

#### 18. Le Date Picker
```html

```
