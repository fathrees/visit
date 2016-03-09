angular.module('app', ['ui.router', 'ui.bootstrap', 'carouselApp']);

angular.module("app")
    .directive("appHeader", appHeader);

function appHeader() {
    var headerDirective = {
        restrict: "EA",
        templateUrl: "app/header/header.html"
    };

    return headerDirective;
}

angular.module('carouselApp', []);

angular.module('carouselApp')
    .controller('carouselCtrl', function() {
        var numPic = 5;
        var vm = this;
        vm.interval = 3000;
        vm.noWrap = false;
        vm.slides = addSlides();

        function addSlides() {
            var slides = [];
            for (var i = 0; i < numPic; i++) {
                slides.push({image: "app/images/" + i + ".jpg", id: i});
            }
            return slides;
        }
});
angular
    .module("app")
    .config(configApp);

//configApp.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configApp ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/home/home.html"
            })
            .state("gallery", {
                url: "/gallery",
                templateUrl: "app/gallery/gallery.html",
                controller: "carouselCtrl as carousel"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "app/contact/contact.html"
            })
            .state("svg", {
                url: "/svg",
                templateUrl: "app/svg_demo/svg.html"
            })

    }
