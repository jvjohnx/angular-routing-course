# Module 7: Creating Nested Router Outlets and Auxiliary Routes

starting on module-seven-start branch

## Nested Router Outlets

We already have a <router-outlet/> in the app.component.html.

We are putting the new child <router-outlet> inside the products-view.component where the original 
detail-view.component was present. In this child <router-outlet> we want to render the detail 
or customize component based on the route

in products-view.component.html, displays side-menu component twice one with "customize" property and
the other without that property. 
```
<app-side-menu [customize]="true"></app-side-menu>
vs
<app-side-menu></app-side-menu>
```
side-menu.component.html iterates through pies and displays buttons/pies in the 
left hand side-menu with customize section and detail section.  

side-menu.component.html is updated so the routerLink is added to button to initialize with customizeLink or 
detailLink based on if that option is passed on the products-view.component.html

Adding Routes
- src/app/products-view/products.routes.ts add the routes for the detail and customize
- src/app/app.routes.ts add the children routes for the shop 

at the end, 
```aiignore
for customize, the URL http://localhost:4200/shop/Seasonal%20Pies/customize?productId=13
for detail, the URL    http://localhost:4200/shop/Seasonal%20Pies/detail?productId=13
```
## Auxiliary/Named route

