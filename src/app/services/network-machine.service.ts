import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NetworkMachineService {

  constructor(private communicatorService: CommunicatorService) { }

  getMachineNetwork(consumption: number, investment: number, exports: number, importsItem:number, publicSpending:number): Observable<any>  {
    const body: any = {
      consumption,
      investment,
      exports,
      importsItem,
      publicSpending
    };
    return this.communicatorService.http_post(environment.URL_PRODUCTION + 'getPIB/', body);
  }

}
