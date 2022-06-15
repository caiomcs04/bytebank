import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferData:any[] = [];

  transfer(transferData:any){
    const transfer ={...transferData, date: new Date()};
    this.transferData.push(transfer);
  }
}
