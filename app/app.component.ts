/**
 * Created by Dart Wader on 18.11.2016.
 */
import { Component } from '@angular/core';

class Item{ //класс продукту, в даному випадку кота
    public url:string; //адреса картинки
    public name:string;//ім'я кота
    public desc:string;//описання кота
    public add:string;//це був напис на кнопці, а потім чтав допис при додаванні до корзини
    public style:any;// стиль продукту

    constructor(name, desc){
        this.name = name;
        this.desc = desc;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/view.html'
})
export class AppComponent {

    public cart:Item[] = (JSON.parse(localStorage.getItem("lItem"))==null)?[]:JSON.parse(localStorage.getItem("lItem"));//спочатку корзина у нас чомусь Нул, і я так придумав обійти помилку
    countItems:number = this.cart.length; //лічильник продуктів  в корзині
    items:Item[] = [//список продуктів, що можна купити(потім треба все в БД забити)
        {url:"https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name:"Cat 1",desc:"black&white" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://imgflip.com/s/meme/Cute-Cat.jpg", name:"Cat 2",desc:"standing" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"http://www.spring.org.uk/images/cute_cat2.jpg", name:"Cat 3",desc:"cute" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name:"Cat 1",desc:"black&white" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://imgflip.com/s/meme/Cute-Cat.jpg", name:"Cat 2",desc:"standing" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"http://www.spring.org.uk/images/cute_cat2.jpg", name:"Cat 3",desc:"cute" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name:"Cat 1",desc:"black&white" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://imgflip.com/s/meme/Cute-Cat.jpg", name:"Cat 2",desc:"standing" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"http://www.spring.org.uk/images/cute_cat2.jpg", name:"Cat 3",desc:"cute" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg", name:"Cat 1",desc:"black&white" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"https://imgflip.com/s/meme/Cute-Cat.jpg", name:"Cat 2",desc:"standing" , add : "", style:{'background':'#FFD52B', 'color':'black'}},
        {url:"http://www.spring.org.uk/images/cute_cat2.jpg", name:"Cat 3",desc:"cute" , add : "", style:{'background':'#FFD52B', 'color':'black'}}
    ] ;

    addLocal(item):void{ //додаємо продукт в корзину
        this.cart.push(item);
        var sCart = JSON.stringify(this.cart);
        localStorage.setItem("lItem", sCart);
        item.add = "[Got It]";
        this.countItems++;
    }
    refreshLocal():void{ //обновляємо локалсторедж після видалення(наприклад)
        var sCart = JSON.stringify(this.cart);
        localStorage.setItem("lItem", sCart);
    }


    deleteItem(item):void{ //видаляємо продукти з корзини
        let count = 0;
        for(let i=0;i<this.cart.length;i++){
            if(this.cart[i]===item){
                this.cart.splice(i,1);
            }
            count++;
        }

        this.countItems = this.cart.length;
        this.refreshLocal();
    }
}
