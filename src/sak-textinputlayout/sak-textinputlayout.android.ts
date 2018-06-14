// declare namespace android {
//     namespace graphics {
//         class Color {
//             static parseColor(color: string): Number;
//         }
//     }
//     namespace support {
//         namespace design {
//             namespace widget {
//                 class TextInputLayout {
//                     constructor(context: any);
//                     setHint(hint: string): void;
//                     setError(error: string): void;
//                     setHintAnimationEnabled(value: boolean): void;
//                     setHintTextAppearance(resourceId: number): void;
//                     setErrorTextAppearance(resourceId: number): void;
//                     setErrorEnabled(enabled: boolean): void;
//                     setCounterEnabled(enabled: boolean): void;
//                     addView(child, index: number, params): void;
//                     removeView(child): void;
//                     getEditText(): any;
//                 }
//             }
//         }
//     }
// }

// import { SakTextInputLayoutBase, hintTextAppearanceProperty } from "./sak-textinputlayout.common";
// import { View, booleanConverter } from "tns-core-modules/ui/core/view";
// import { TextView } from 'tns-core-modules/ui/text-view';
// import { TextField } from 'tns-core-modules/ui/text-field';
// import { SakTextField } from "../sak-textfield/sak-textfield";
// import { hintColorProperty } from "../sak-textfield/sak-textfield.common";

// function getStyleResourceId(context: any, name: string) {
//     if (!context || (name || '').length === 0) {
//         return null;
//     }
//     return context.getResources().getIdentifier(name, 'style', context.getPackageName());
// }

// export class SakTextInputLayout extends SakTextInputLayoutBase {

//     nativeView: any;

//     private _textField: SakTextField;

//     get textField(): SakTextField { return this._textField; }
//     set textField(tf: SakTextField) {
//         const old = this._textField;
//         if (old) {
//             this._removeView(old);
//         }

//         this._textField = tf;
//         if (tf) {
//             this._addView(tf);
//         }

//         this.setupTextView();
//     }

//     get _childrenCount(): number {
//         return this._textField ? 1 : 0;
//     }

//     public _addChildFromBuilder(name: string, child: SakTextField): void {
//         if (!(child instanceof SakTextField)) {
//             throw new Error('TextInputLayout may only have a <SakTextField> as a child');
//         }

//         this.textField = child;
//     }

//     public eachChildView(callback: (child: View) => boolean) {
//         if (this._textField) {
//             callback(this._textField);
//         }
//     }

//     public onLoaded(): void {
//         super.onLoaded();
//         this.setupTextView();
//     }

//     private setupTextView() {
//         if (!this.isLoaded) {
//             return;
//         }

//         const textField = this._textField;
//         const nativeView = this.nativeView;
//         const layoutParams = new (<any>android).widget.LinearLayout.LayoutParams(
//             (<any>android).widget.LinearLayout.LayoutParams.MATCH_PARENT,
//             (<any>android).widget.LinearLayout.LayoutParams.WRAP_CONTENT);

//         const current = nativeView.getEditText();
//         const nativeTextField = textField.nativeView;
//         if (current !== nativeTextField) {
//             if (current) {
//                 nativeView.removeView(current);
//             }

//             nativeView.addView(nativeTextField, 0, layoutParams);
//         }

//         const txtValue = textField.nativeView.getText();
//         nativeTextField.setText('');
//         nativeTextField.setText(txtValue);
//     }

//     public createNativeView(): Object {
//         return new android.support.design.widget.TextInputLayout(this._context);
//     }

//     initNativeView(): void {
//         (<any>this.nativeView).owner = this;
//         super.initNativeView();
//     }

//     disposeNativeView(): void {
//         (<any>this.nativeView).owner = null;
//         super.disposeNativeView();
//     }

//     [hintTextAppearanceProperty.setNative](value: string) {
//         const resourceId = getStyleResourceId(this._context, value);
//         if (value && resourceId) {
//             this.nativeView.setHintTextAppearance(resourceId);
//         }
//     }
// }