import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from "./component/signal/signal";
import { ComponentAnotomy } from "./component/component-anotomy/component-anotomy";
import { Host } from "./component/host/host";
import { NgContent } from "./component/ng-content/ng-content";
import { NgParentContent } from "./component/ng-parent-content/ng-parent-content";
import { SignalForm } from "./component/signal-form/signal-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signal, ComponentAnotomy, Host, NgContent, NgParentContent, SignalForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularExtension';
  concept=[
    {
      topic : "Component-anotomy",
      routeUrl : "/ng-content"
    },
    {
      topic : "styling",
      routeUrl : "/ng-content"
    },
    {
      topic : "ng-content",
      routeUrl : "/ng-content"
    },
    {
      topic : "signal",
      routeUrl : "/ng-content"
    },
    {
      topic : "host",
      routeUrl : "/ng-content"
    },
  ]
}
