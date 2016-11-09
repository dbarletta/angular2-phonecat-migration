declare var angular: any;

import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

import { Phone } from './core/phone/phone.service';

const upgradeAdapter = new UpgradeAdapter(AppModule);


angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
