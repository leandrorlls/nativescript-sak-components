import { SakTextInputLayoutBase } from "./sak-textinputlayout.common";
import { View } from "tns-core-modules/ui/core/view";
import { SakTextField } from "../sak-textfield/sak-textfield";
export declare class SakTextInputLayout extends SakTextInputLayoutBase {
    nativeView: any;
    private _textField;
    textField: SakTextField;
    readonly _childrenCount: number;
    _addChildFromBuilder(name: string, child: SakTextField): void;
    eachChildView(callback: (child: View) => boolean): void;
    onLoaded(): void;
    private setupTextView();
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
