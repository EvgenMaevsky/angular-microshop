"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Dart Wader on 18.11.2016.
 */
var core_1 = require('@angular/core');
var Item = (function () {
    function Item(name, desc) {
        this.name = name;
        this.desc = desc;
    }
    return Item;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.cart = (JSON.parse(localStorage.getItem("lItem")) == null) ? [] : JSON.parse(localStorage.getItem("lItem")); //спочатку корзина у нас чомусь Нул, і я так придумав обійти помилку
        this.countItems = this.cart.length; //лічильник продуктів  в корзині
        this.items = [
            { url: "https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name: "Cat 1", desc: "black&white", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://imgflip.com/s/meme/Cute-Cat.jpg", name: "Cat 2", desc: "standing", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "http://www.spring.org.uk/images/cute_cat2.jpg", name: "Cat 3", desc: "cute", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name: "Cat 1", desc: "black&white", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://imgflip.com/s/meme/Cute-Cat.jpg", name: "Cat 2", desc: "standing", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "http://www.spring.org.uk/images/cute_cat2.jpg", name: "Cat 3", desc: "cute", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name: "Cat 1", desc: "black&white", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://imgflip.com/s/meme/Cute-Cat.jpg", name: "Cat 2", desc: "standing", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "http://www.spring.org.uk/images/cute_cat2.jpg", name: "Cat 3", desc: "cute", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name: "Cat 1", desc: "black&white", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "https://imgflip.com/s/meme/Cute-Cat.jpg", name: "Cat 2", desc: "standing", add: "", style: { 'background': '#FFD52B', 'color': 'black' } },
            { url: "http://www.spring.org.uk/images/cute_cat2.jpg", name: "Cat 3", desc: "cute", add: "", style: { 'background': '#FFD52B', 'color': 'black' } }
        ];
    }
    AppComponent.prototype.addLocal = function (item) {
        this.cart.push(item);
        var sCart = JSON.stringify(this.cart);
        localStorage.setItem("lItem", sCart);
        item.add = "[Got It]";
        this.countItems++;
    };
    AppComponent.prototype.refreshLocal = function () {
        var sCart = JSON.stringify(this.cart);
        localStorage.setItem("lItem", sCart);
    };
    AppComponent.prototype.deleteItem = function (item) {
        var count = 0;
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === item) {
                this.cart.splice(i, 1);
            }
            count++;
        }
        this.countItems = this.cart.length;
        this.refreshLocal();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/view.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
