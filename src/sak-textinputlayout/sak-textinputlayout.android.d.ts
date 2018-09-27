import { SakTextInputLayoutBase, Property } from "./sak-textinputlayout.common";
import { View } from "tns-core-modules/ui/core/view";
import { TextView } from 'tns-core-modules/ui/text-view';
import { TextField } from 'tns-core-modules/ui/text-field';
import { SakTextField } from "../sak-textfield/sak-textfield";
export declare const hintAnimationEnabledProperty: any;
export declare const hintTextAppearanceProperty: Property<SakTextInputLayout, string>;
export declare const counterEnabledProperty: Property<SakTextInputLayout, boolean>;
export declare const errorTextAppearanceProperty: Property<SakTextInputLayout, string>;
export declare const errorEnabledProperty: Property<SakTextInputLayout, boolean>;
export declare class SakTextInputLayout extends SakTextInputLayoutBase {
    nativeView: any;
    private _textField;
    textField: SakTextField | TextField | TextView;
    readonly _childrenCount: number;
    _addChildFromBuilder(name: string, child: SakTextField): void;
    eachChildView(callback: (child: View) => boolean): void;
    onLoaded(): void;
    private setupTextView();
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
