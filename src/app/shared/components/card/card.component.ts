import { Component, OnInit } from '@angular/core';
import { ImageProductService } from '../../services/imageProduct/image-product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private imageService:ImageProductService) { }

  ngOnInit(): void {
this.getdata();

  }

  async getdata(){
  (await this.imageService.getImages()).subscribe({
    next:(res)=>{
      console.log(res);
    }
  })
  }

}
