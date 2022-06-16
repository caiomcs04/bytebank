import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transferModel';

@Component({
  selector: 'bytebank-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //Input para receber valores de outro componente
  //@Input()transferData!: any[];

  transferData:any;

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.getAll().subscribe((transferList:Transfer[])=>{
      this.transferData = transferList;
    })
  }

}
