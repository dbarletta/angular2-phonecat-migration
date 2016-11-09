import { UpgradeAdapter } from '@angular/upgrade';
declare var angular: any;
import { AppModule } from './app.module';

const upgradeAdapter = new UpgradeAdapter(AppModule);

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
