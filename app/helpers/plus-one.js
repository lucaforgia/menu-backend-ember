import Ember from 'ember';

export function plusOne(params/*, hash*/) {
  return Number(params) + 1;
}

export default Ember.Helper.helper(plusOne);
