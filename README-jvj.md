#  starting in module-six-start branch, see below "Module 6" section

# Module: Routing in Standalone Component Applications

## 	Introduction to Standalone Components and Routing

Angular Standalone or Module based, bootstrapped in main.ts.
Standalone will use bootstrapApplication()  where as Module based will use boostrapModuleApplication.
In bootstrapApplication(), the 2nd arg is a config of providers[]  with  provideRouter(appRoutes)
```aiignore
example: 

bootstrapApplication(AppComponent, {
  providers: [
    // Configure the router by providing the routes array.
    provideRouter(appRoutes)
  ]
```
## Demo: Bootstrapping Routing in a Standalone Component Based Application
configured bootstrapApplication with provideRouter and added  withDebugTracing() for route tracing 

# Module 5.  User Navigation between Views

## Discussion: Introduction to RouterLink
## Demo: Add RouterLinks to Template Elements
Adding RouterLink to template 

## Discussion: Styling the Active Element with RouterLinkActive, Demo: Style Active Links with RouterLinkActive

Use routerLinkActive to show which link the user just clicked.

## Discussion: Navigating Programmatically/Demo: Routing from Classed with RouterService
Want to navigate initiated not from the template. E.g. session timeout, error.

### methods for navigation:
navigate() relative or absolute, needs path segmants 
navigateByUrl() - absolute path

# Module 6: Driving State with Router Params
starting on module-six-start branch

## Passing sate through route parameters
(Demo: Consuming Path Parameters in Components)

 | Param type             | description                                                                            |
 |------------------------|----------------------------------------------------------------------------------------|
 | Required path Params   | e.g /path1/:path2/  :path2 is dynamic. available only for activated route and children |
 | Query/URL params       | globally available.  default, merge, preserve options.                                 |
 | optional matrix params | matrix url notation.  only on activated route                                          |

in header.component.html, a click event is used to select the category, which calls the  changeCategory() method.
With this approach, when a category is changed, URL still points to /shop.  We want users to be able 
to share the link.  

Remove the click event and add a path segment specific to category in routerLink 
in header.component.html. 2nd element in the routerLink path is populated with Category.  
Router infers the 2nd segment of the path to be CategoryId

Input property is added to the activated component i.e. ProductsViewComponent to get the 
categoryId. Why ProductsViewComponent?  because the path `${ROUTER_TOKENS.SHOP}/:categoryId`
activates ProductsViewComponent. Here '@Input setter trick' is used to set the value for categoryId.

Same change was done in card.component.ts. Card is shown in the home page with a category per card.  When a card 
is clicked, it takes you to category by calling card.component.selectPie().  This method is updated so that when the
router.navigate is called with the 2nd arg of categoryId which activates ProductsViewComponent.

Overall flow
- user selects the category from menu or home
- navigation is triggered with  [routerLink]="['shop', 'Cheesecakes']" where the 2nd item in the array is the categoryId.
- navigation activates the ProductsViewComponent where the '@Input setter trick' is used to capture the categoryId
- setter sets the category in the pieService using setSelectedCategory(categoryId)


## Discussion: Understanding Optional Parameters

ActivatedRoute has 2 commonly used Observables. queryParams and queryParamMap where we can subscribe to get 
the queryParameters.  

In our app, to get to a product, we can access through side-menu or the card-component of the home-view.

To add the queryParam to the side-menu, remove the click event in the side-menu.component.html
and add routerLink and routerLinkActive.

in the pie.service.ts, set the selectedPie from queryParameter using 'activatedRoute.queryParamMap' .

