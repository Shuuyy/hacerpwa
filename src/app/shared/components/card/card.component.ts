import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageProductService } from '../../services/imageProduct/image-product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private imageService:ImageProductService) { }
  @Input() title="";
  @Input() img="";
  @Input() desc="";
  urlImg = ""
  @Output() events = new EventEmitter; 
  @Output() eventsEdit = new EventEmitter; 
  ngOnInit(): void {

  }

  delete(event:any){
    this.events.emit(event)

  }

  edit(event:any){
    this.eventsEdit.emit(event)
  }
  

}
