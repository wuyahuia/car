app.factory("tabServer", ['baseServer', function (baseServer) {
    var tabServer = {
        getFold: function () {
            return baseServer.ajax("get", "./Data/data.json");
        }
    };
    return tabServer;
}]);