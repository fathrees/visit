angular
    .module('carouselApp')
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