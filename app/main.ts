declare var angular: any;

import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';

const upgradeAdapter = new UpgradeAdapter(AppModule);

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

// The as angular.IDirectiveFactory cast tells the TypeScript compiler
// that the return value of the downgrade method is a directive factory
angular.module('phoneList')
.directive(
    'phoneList',
    upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory
);

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
