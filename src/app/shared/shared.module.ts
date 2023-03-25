import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    CardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule

  ],
  exports:[CardComponent],
  entryComponents:[ModalComponent]
})
export class SharedModule { }
