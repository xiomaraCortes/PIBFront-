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
  input: string;
  information: string;
  machine: MachineModel;

  constructor(private networkMachineService: NetworkMachineService) { }

  ngOnInit(): void {
  }


  keyup(text: string): void {
    this.input = text;
  }

  clickItem(): void  {

    this.networkMachineService.getMachineNetwork(this.input).subscribe(result => {
      console.log(JSON.stringify(result));
       this.machine = result.data;
    }, error => {
      this.information  = JSON.stringify(error);
    });
  }


  checkInputIsValid(): boolean {
     return this.input !== undefined && this.input.split(';').length == 2 && (Number(this.input.split(';')[0])< 2 && Number(this.input.split(';')[0])> -2)
     && (Number(this.input.split(';')[1])< 2 && Number(this.input.split(';')[1])> -2)
  }

  checkFieldIsValid(input : string): boolean {
    return !isNaN(Number(input));
  }
}
