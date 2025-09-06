Angular Router Documentation https://v17.angular.io/api/router

## Router Module Methods

| forRoot()                    | forChild()                    |
|------------------------------|-------------------------------|
| Instantiates routing Service | used in multiple declerations |
| invoked only one time        | invoked many times            |
 |  can add configuration      |

## Demo: Bootstrap Angular RouterModule

1. In AppModule, into import array add RouterModule.forRoot([]).  forRoot takes an array of routes and it is currently empty 
2. in the app.component.html, remove the <app-home> and replace with <router-outlet>

Notice that the app now doesn't display the <app-home> component.  This will be fixed in the next module

## Demo: Declaring Default and Home Routes

Added ROUTES array .  the the route for empty path '' should be pathMatch=full


