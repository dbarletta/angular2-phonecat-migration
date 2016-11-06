class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone']; // The dependency injection annotations are attached to the class using a static property $inject

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });


