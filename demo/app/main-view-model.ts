import { Observable } from 'tns-core-modules/data/observable';
import { SakComponents } from 'nativescript-sak-components';

export class HelloWorldModel extends Observable {
  public message: string;
  private sakComponents: SakComponents;

  constructor() {
    super();

    this.sakComponents = new SakComponents();
    this.message = this.sakComponents.message;
  }
}
