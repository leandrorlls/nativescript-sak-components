import { Observable } from 'tns-core-modules/data/observable';
import { ObservableProperty } from "~/observable-property";

export class HelloWorldModel extends Observable {
  @ObservableProperty() public simpleText?: string | undefined;
  @ObservableProperty() public textLayoutText?: string | undefined;

  constructor() {
    super();

  }
}
