declare var angular: any;

import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

const upgradeAdapter = new UpgradeAdapter(AppModule);

// Angular 1 dependencies are not automatically available to Angular 2 components.
// We must use the UpgradeAdapter to make the $routeParams an Angular 2 provider
upgradeAdapter.upgradeNg1Provider('$routeParams');

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

// The as angular.IDirectiveFactory cast tells the TypeScript compiler
// that the return value of the downgrade method is a directive factory
angular.module('phoneList')
.directive(
    'phoneList',
    upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory
);

angular.module('phoneDetail')
.directive(
    'phoneDetail',
    upgradeAdapter.downgradeNg2Component(PhoneDetailComponent) as angular.IDirectiveFactory
);


angular.element(document).ready(() => {
    upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
});
