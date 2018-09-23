import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { EventData } from 'tns-core-modules/data/observable';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTappedToWrite(args: EventData) {
    const page = <pages.Page>args.object;
    const vm = <HelloWorldModel>page.bindingContext;

    vm.textOne = "textOne";
    vm.textTwo = "textTwo";
}


export function onTappedToRead(args: EventData) {
    const page = <pages.Page>args.object;
    const vm = <HelloWorldModel>page.bindingContext;

    alert(`simpleText: ${vm.textOne} | textLayoutText: ${vm.textTwo}`);
}