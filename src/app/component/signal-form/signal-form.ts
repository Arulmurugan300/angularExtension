import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-form',
  imports: [],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss'
})
export class SignalForm {
name= signal("arul");
age = signal ('20');
private effects=effect(()=>{
  console.log(this.name(),this.age());
})

submit(){
  const formResponse = {
    name: this.name(),
    age : this.age()
  }
  console.log(formResponse);
  this.resetForm()
}

resetForm(){
  this.name.set(''),
  this.age.set('')
}
updateSignal(signalVar: WritableSignal<string>,event: Event) {

    const input = (event.target as HTMLInputElement).value;
    console.log(event,signalVar,input);
  return  signalVar.set(input);

  };

}
