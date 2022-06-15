import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bytebank-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //Input para receber valores de outro componente
  @Input()transferData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
