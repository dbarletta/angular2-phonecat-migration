'use strict';

angular.
  module('core').
  filter('checkmark', () => {
    return (input: boolean) => {
      return input ? '\u2713' : '\u2718';
    };
  });
