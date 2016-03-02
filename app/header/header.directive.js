(function() {
    "use strict";

    angular.module("app")
        .directive("appHeader", appHeader);

    function appHeader() {
        var headerDirective = {
            restrict: "EA",
            templateUrl: "app/header/header.html"
        };

        return headerDirective;
    }
})();