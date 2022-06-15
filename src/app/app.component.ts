import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferData:any = {destiny:undefined  ,ammount:undefined}

  transfer(transferData:any){
    this.transferData = transferData;
  }
}
