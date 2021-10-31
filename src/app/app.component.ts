import {Component, Input, OnInit} from '@angular/core';
import {NetworkMachineService} from './services/network-machine.service';
import {MachineModel} from './model/MachineModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netowrk-machine';
  consumo: string;
  inversiones: string;
  exportaciones: string;
  importaciones: string;
  gasto: string;
  information: string;
  machine: MachineModel;

  constructor(private networkMachineService: NetworkMachineService) { }

  ngOnInit(): void {
  }


  keyup(text: string, item : number): void {
    if(item === 0) {
      this.consumo = text;
    }
    if(item === 1) {
      this.inversiones = text;
    }

    if(item === 2) {
      this.exportaciones = text;
    }

    if(item === 3) {
      this.importaciones = text;
    }

    if(item === 4) {
      this.gasto = text;
    }
  }

  clickItem(): void  {
     console.log('Ento');
    this.networkMachineService.getMachineNetwork(Number(this.consumo), Number(this.inversiones), Number(this.exportaciones), Number(this.importaciones),
     Number(this.gasto)).subscribe(result => {
       this.machine = result.data;
    }, error => {
      this.information  = JSON.stringify(error);
    });
  }

  checkFieldIsValid(input : string): boolean {
    return !isNaN(Number(input));
  }
}
