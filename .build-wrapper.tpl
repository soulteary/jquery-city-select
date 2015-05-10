;(function (root, factory) {
    if (typeof define === 'function') {
        define(['city.select'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        factory();
    }
}(this, function () {
    'use strict';
//WRAPPER
<%= contents %>

//WRAPPER
    return cityselect;
}));