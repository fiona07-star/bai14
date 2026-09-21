import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", 
      "CateName": "nuoc ngot",
      "Products": [
        {"ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbx1_w0nJgr8N7OJUT2TgD0bvu37VXQHST1Wv0eBJCw&s=10"},
        {"ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLA28kSLmrThgoc-2UtFLdRH-Rm2MrSX_mMv6R658xw&s=10"},
        {"ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bcsaPaRv7RoUFttC5O-tx65gzU7x_69p57cEF8dmsA&s=10"}
      ]
    },
    {
      "Cateid": "cate2", 
      "CateName": "Bia",
      "Products": [
        {"ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "https://cdnv2.tgdd.vn/bhx-static/bhx/production/2025/12/image/Products/Images/2282/201265/bhx/bia-heineken-250ml_202512301337028701.jpg"},
        {"ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx9IDl_AmZqeVlnKRLex70GvAoqhhYtsw8RYbf5I_uA&s=10"},
        {"ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnK6Mc7QP8vI0SF7Vvws9kuUMkS8Ywe6FnqGVU9yd8Nw&s=10"}
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}