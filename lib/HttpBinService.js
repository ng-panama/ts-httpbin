/// <reference path="../typings/angularjs/angular.d.ts" />
System.register(['angular'], function(exports_1) {
    var HttpBinService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            HttpBinService = (function () {
                function HttpBinService($http) {
                }
                return HttpBinService;
            })();
            exports_1("default",HttpBinService);
        }
    }
});
