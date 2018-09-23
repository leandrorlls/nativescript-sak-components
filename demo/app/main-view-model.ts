import { Observable } from 'tns-core-modules/data/observable';
import { ObservableProperty } from "~/observable-property";

export class HelloWorldModel extends Observable {
  @ObservableProperty() public textOne?: string | undefined;
  @ObservableProperty() public textTwo?: string | undefined;

  constructor() {
    super();

  }
}
