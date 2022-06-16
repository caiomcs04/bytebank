import { Transfer } from './../models/transferModel';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bytebank-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

//Output serve para se comunicar com outros componentes. no caso propagar para o pai desse componente
  @Output() onTransfer = new EventEmitter<any>();

  ammount: number | undefined;
  destiny: string | undefined;

  constructor(private transferService:TransferService) { }

  ngOnInit(): void {
  }

  transfer(){
    const transferData:Transfer = {ammount: this.ammount, destiny: this.destiny}
    // this.onTransfer.emit(transferData)

    this.transferService.addTransfer(transferData).subscribe(res =>{
      console.log(res);
      this.cleanInputs();
    },
      (error) => console.error(error)
    )

  }

  cleanInputs(){
    this.ammount = undefined;
    this.destiny = undefined;
  }

}
