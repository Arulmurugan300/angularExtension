import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HostbindingDirective } from '../../directive/hostbinding';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-host',
  imports: [HostbindingDirective],
  templateUrl: './host.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './host.scss'
})
export class Host {
  @Input() count: any[] = [];
  // @Input() count: any;
  constructor(private http: HttpClient) {

  }
  sendData() {
    this.count = [...this.count, "hai Arul"];
    // this.count = this.count + 1;
  }
  ngDoCheck(): void {
    console.log("Host call", this.count);
  }
}
