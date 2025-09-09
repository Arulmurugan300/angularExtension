import { Component, effect, Input , Signal  } from '@angular/core';

@Component({
  selector: 'app-component-anotomy',
  imports: [],
  // templateUrl: './component-anotomy.html',
    template: `
    <div style="border: 1px solid #ccc; width: 300px; margin: 10px 0;">
      <div [style.width.%]="percentage" style="background: green; color: black; padding: 5px 0; text-align: center;">
        {{ percentage }}%
      </div>
    </div>
   {{ demo()}}
    {{getInput.name}}
  `,
  styleUrl: './component-anotomy.scss',
  inputs: ['myInput']
})
export class ComponentAnotomy  {
  @Input() current = 0;
  @Input() total = 100;
@Input() getInput!:any;
private effectValue = effect(()=>{
  // console.log(this.getInput());
})
  get percentage(): number {
    if (this.total === 0) return 0;
    return Math.round((this.current / this.total) * 100);
  }

   ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.getInput());

  }
  ngOnChanges(changes: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }
  demo() {
   console.log("checking")
  }
}
