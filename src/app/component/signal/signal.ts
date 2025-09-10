import { Component, computed, Input, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Signal {
  name = signal("arul");
  @Input() myInput!: string;
  signalValue = computed(() => this.name())
  ngOnInit(): void {
    console.log(this.signalValue(), this.name())
    this.name.set("bharath");
    console.log(this.signalValue(), this.name())
    // setTimeout(() => {
    //   console.log(this.myInput);

    // }, 5000)

  }
  ngDoCheck(): void {
    console.log("signal call");
  }
}
