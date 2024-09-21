import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":2000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://static.wikia.nocookie.net/heroe/images/4/44/Rayo_McQueen_CAeeC.png/revision/latest?cb=20231118102622&path-prefix=es"
    },
    {
      "productoId":2,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FTroll_%2528automoci%25C3%25B3n%2529&psig=AOvVaw3YsOSnJLb8gGnWL2ZVQmZd&ust=1726971636459000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOj17On80ogDFQAAAAAdAAAAABAJ"
    },
    {
      "productoId":3,
      "Modelo":"BOCHO",
      "Descripcion":"2 puertas",
      "Precio":1500,
      "Year":2021,
      "Marca":"VOLKSWAGEN",
      "Color":"Azul",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtCAX2nLf1szk9Km0p7BQuH6IPn5Y-JDZAA&s"
    }
  ]

}
