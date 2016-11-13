# AngularJS Phone Catalog Tutorial Application upgrade

**Check out the various branches and their commit history** to see what was done to upgrade.

## Some Preparation
 - Follow style guide https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#single-responsibility
  - The style guide helps make your Angular 1 app more closely aligned with Angular 2.
  - The Rule of 1 states that there should be one component per file. This not only makes components easy to navigate and find, but will also allow us to migrate them between languages and frameworks one at a time. In this example application, each controller, component, service, and filter is in its own source file.
  - The Folders-by-Feature Structure and Modularity rules define similar principles on a higher level of abstraction: Different parts of the application should reside in different directories and Angular modules.
 - Module loader: Using a module loader such as SystemJS, Webpack, or Browserify allows us to use the built-in module systems of the TypeScript or ES2015 languages in our apps. We can use the import and export features that explicitly specify what code can and will be shared between different parts of the application. For ES5 applications we can use CommonJS style require and module.exports features. In both cases, the module loader will then take care of loading all the code the application needs in the correct order.
 
## Switch to TypeScript
 - Install TypeScript: yarn add typescript --dev
 - yarn add @types/jasmine @types/angular @types/angular-animate @types/angular-cookies @types/angular-mocks @types/angular-resource @types/angular-route @types/angular-sanitize --dev
 - Add tsconfig.json
 - Add type safety to the code
 - Turn component controllers into classes

## Bootstrapping a hybrid 1+2 PhoneCat https://angular.io/docs/ts/latest/guide/upgrade.html#!#upgrading-with-the-upgrade-adapter
 - initialize an UpgradeAdapter
 - upgrade service: Now that we are loading phone.service.ts through an import that is resolved by SystemJS, we should remove the <script> tag for the service from index.html. This is something we'll do to all our components as we upgrade them. We could also use the toPromise method of Observable to turn those Observables into Promises in the service. This can in many cases further reduce the amount of changes needed in the component controllers.
 - upgrade components: 
   - rename the controller class and turning the Angular 1 component definition object into an Angular 2 @Component decorator. We can then also remove the static $inject property from the class
   - convert the template of this component into Angular 2 syntax
       - Angular 1 dependencies are not automatically available to Angular 2 components. We must use the UpgradeAdapter to make the $routeParams an Angular 2 provider.
       - There is no upgrade adapter method to convert filters into pipes. 
       - Do not register an upgraded Angular 1 provider in the NgModule.
