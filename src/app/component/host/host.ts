import { Component } from '@angular/core';
import { HostbindingDirective  } from '../../directive/hostbinding';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-host',
  imports: [HostbindingDirective],
  templateUrl: './host.html',
  styleUrl: './host.scss'
})
export class Host {
  constructor(private http: HttpClient) {

  }
sendData(){
  this.http.post('http://localhost:5678/webhook/nodeTrigger',{'hai':"arul"})
}
}
