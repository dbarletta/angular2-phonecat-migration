import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [
        PhoneListComponent,
    ],
    providers: [
        Phone
    ]
})
export class AppModule {}
