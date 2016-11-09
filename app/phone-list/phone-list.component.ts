import { Phone, PhoneData } from '../core/phone/phone.service';
declare var angular: any;

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['phone']; // The dependency injection annotations are attached to the class using a static property $inject

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});

