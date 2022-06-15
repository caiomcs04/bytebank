import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bytebank-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

//Output serve para se comunicar com outros componentes. no caso propagar para o pai desse componente
  @Output() onTransfer = new EventEmitter<any>();

  ammount!: number;
  destiny!: number;

  constructor() { }

  ngOnInit(): void {
  }

  transfer(){
    const transferData = {ammount:  this.ammount,destiny: this.destiny}
    this.onTransfer.emit(transferData)
    this.cleanInputs();
  }

  cleanInputs(){
    this.ammount = 0;
    this.destiny = 0;
  }

}
