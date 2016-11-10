import { Component, Inject } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
  moduleId: module.id,
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html',
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(@Inject('$routeParams')
                  $routeParams: angular.route.IRouteParamsService,
              phone: Phone) {
    phone.get($routeParams['phoneId']).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}