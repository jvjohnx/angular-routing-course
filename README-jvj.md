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

## Discussion: Child Routes and Route Order
Angular combines Child and Root routes to create the path.  Angular adds the forChild routes first then
adds the forRoot routes so that the more specific routes comes before the less specific routes.

```
forRoot [
 path: 'home', component: 'homeComponent',
 path: '' ,  redirectTo: 'home'
]

forChild [
  path: 'home/child1', component: 'ChildOneComponent',
  path: 'home/child2', component: 'ChildTwoComponent'
]


In the combined Array, child routes comes first

routes [
  path: 'home/child1', component: 'ChildOneComponent',
  path: 'home/child2', component: 'ChildTwoComponent'
  path: 'home', component: 'homeComponent',
  path: '' ,  redirectTo: 'home"
]

```

Standalone components use different strategy to declar childRoutes

```aiignore
const appRoutes: Routes = [
 {path: 'home', component: 'homeComponent', children: childRoutes} //Note the children property
 {path: '' ,  redirectTo: 'home' }
];

childRoutes: Routes = [
    {path: 'child-one', component: ChildOneComponent},  //Note: child path are relative
    {path: 'child-two', component: ChildTwoComponent},
]
```

## Demo: Declaring a Wildcard Route

Added the wildcard route activating the NotFoundComponent and turned on debugging

## Demo: Hooking into Router Events

Instead of turning on debugging in the forRoot, hook into the router event where the 
component router-outlet is defined, i.e. in app.component.ts  ngOnInit, tapping into Router.events
or through in app.component.html adding activate event to router-outlet

