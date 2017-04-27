"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
    { path: '**', redirectTo: 'home' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map