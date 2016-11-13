import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
    providers: [ Phone ]
})

export class AppModule {}
