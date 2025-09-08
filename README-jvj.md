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
