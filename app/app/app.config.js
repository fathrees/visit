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
