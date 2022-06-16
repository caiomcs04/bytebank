import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transferModel';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];
  private url = "http://localhost:3000/transfer";

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers(){
    return this.transferList;
  }

  addTransfer(transfer:Transfer):Observable<Transfer>{
    transfer.date  = new Date();
    return this.httpClient.post<Transfer>(this.url, transfer)
  }

  getAll():Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url);
  }

}
