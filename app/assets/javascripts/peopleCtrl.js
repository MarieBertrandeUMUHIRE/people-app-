(function() {
  "use strict";
  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
    { 
    firstName: "Paul",
    lastName: "Kaneza",
    phone: "082323244"
  },
  { firstName: "Claire",
  lastName: "Mugisha",
  phone: "0244223244"

},
{
  firstName: "Ted",
  lastName: "Mwiza",
  phone: "0962323244"
}];
});
})();