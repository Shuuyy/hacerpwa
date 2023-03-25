import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageProductService } from 'src/app/shared/services/imageProduct/image-product.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})


export class ShowProductsComponent implements OnInit {
  data:any;
   form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    desc: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
  });
  constructor(private service:ImageProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    (await this.service.getImages()).subscribe({
      next:(res:any)=>{
        this.data=res.products;
      },
      complete:()=>{
        console.log(this.data)
      }
      
    })
  }

  async delete(event:any){
    console.log(event);
   (await this.service.delete(event)).subscribe({
    next:(res)=>{
      this.getData()
    }
   });
    
  }

  async save(form:any){
if(form.value.id == ''){


    const xml = `
    <prestashop>
    <product>
      <name><language id="1" ><![CDATA[${form.value.name}]]></language></name>
      <description><language id="1"><![CDATA[${form.value.desc}]]></language></description>
      <price><![CDATA[${form.value.price}]]></price>
    </product>
    </prestashop>
  `;

    (await this.service.save(xml)).subscribe({
      next:(res)=>{
    this.getData();
    this.form.reset();
      }
    })
  }
  if(form.id!=''){
    console.log("editr")
    const xml = `
    <prestashop>
    <product>
      <id>${form.value.id}</id>
      <name>${form.value.name}</name>
      <description>${form.value.desc}</description>
      <price>${form.value.price}</price>
      <id_default_image>NONE</id_default_image>
    </product>
  </prestashop>
  `;
    (await this.service.edit(xml,form.value.id)).subscribe({
      next:(res)=>{
        this.form.reset();
        this.getData();
      }
    })
  }
  }
  
  edit(product:any){
 
    this.form.setValue({
      id:product.id,
      name:product.name,
      desc:product.description_short,
      price:product.price
    })
   
  }




}
