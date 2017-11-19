app.directive('uploadfile', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {

            element.bind('click', function (e) {
                angular.element(e.target).siblings('#upload').trigger('click');
            });
        }
    };
});