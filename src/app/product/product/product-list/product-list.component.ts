import { Component } from '@angular/core';
import { IProductos } from '../../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }


  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":"marzo 3 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://www.nissanchilpancingo.com.mx/resourcefiles/newvehicleimages/3N1AB8AE9MY332377-resourcefiles-newvehicleimages-nissan-2021-sentra-advance-tm-rojo-burdeos-negro-exterior-v1-d.jpg"
    },
    {
      "productoId":2,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":"julio 1 2020",
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://dealers.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/forte-sd-2022/kia_ForteSD.png"
    },
    {
      "productoId":3,
      "Modelo":"BOCHO",
      "Descripcion":"2 puertas",
      "Precio":150000,
      "Year":"junio 8 2021",
      "Marca":"VOLKSWAGEN",
      "Color":"Azul",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtCAX2nLf1szk9Km0p7BQuH6IPn5Y-JDZAA&s"
    }
  ]

}
