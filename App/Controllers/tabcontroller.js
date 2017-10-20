app.controller("tabController", ['$scope', 'tabServer', function ($scope, tabServer) {
    tabServer.getFold().then(function (result) {
        $scope.userInfo = result;
    });
    $scope.load = function () {
        $scope.userInfo.push(
            {
                "src":"./Content/img/car5.jpg",
                "tit":"上海大众-全新旅途L",
                "der":"上海大众-全新旅途L享2年0利率",
                "nowmoney":"1",
                "exp":"1.44"
            },
            {
                "src":"./Content/img/car1.jpg",
                "tit":"上海大众-全新旅途L",
                "der":"上海大众-全新旅途L享2年0利率",
                "nowmoney":"1",
                "exp":"1.44"
            }
        );
    }
}]);
