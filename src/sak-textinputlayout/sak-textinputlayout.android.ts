declare namespace android {
    namespace graphics {
        class Color {
            static parseColor(color: string): Number;
        }
    }
    namespace support {
        namespace design {
            namespace widget {
                class TextInputLayout {
                    constructor(context: any);
                    setHint(hint: string): void;
                    setError(error: string): void;
                    setHintAnimationEnabled(value: boolean): void;
                    setHintTextAppearance(resourceId: number): void;
                    setErrorTextAppearance(resourceId: number): void;
                    setErrorEnabled(enabled: boolean): void;
                    setCounterEnabled(enabled: boolean): void;
                    addView(child, index: number, params): void;
                    removeView(child): void;
                    getEditText(): any;
                }
            }
        }
    }
}

import { SakTextInputLayoutBase, hintProperty, errorProperty, Property } from "./sak-textinputlayout.common";
import { View, booleanConverter } from "tns-core-modules/ui/core/view";
import { TextView } from 'tns-core-modules/ui/text-view';
import { TextField } from 'tns-core-modules/ui/text-field';
import { SakTextField } from "../sak-textfield/sak-textfield";

function getStyleResourceId(context: any, name: string) {
    if (!context || (name || '').length === 0) {
        return null;
    }
    return context.getResources().getIdentifier(name, 'style', context.getPackageName());
}

/*** android-only properties ***/
export const hintAnimationEnabledProperty = new Property<SakTextInputLayout, boolean>({
    name: "hintAnimationEnabled", valueConverter: booleanConverter
});

export const hintTextAppearanceProperty = new Property<SakTextInputLayout, string>({
    name: "hintTextAppearance"
});

export const counterEnabledProperty = new Property<SakTextInputLayout, boolean>({
    name: "counterEnabled", affectsLayout: true, valueConverter: booleanConverter
});

export const errorTextAppearanceProperty = new Property<SakTextInputLayout, string>({
    name: "errorTextAppearance"
});

export const errorEnabledProperty = new Property<SakTextInputLayout, boolean>({
    name: "errorEnabled", affectsLayout: true, valueConverter: booleanConverter
});


export class SakTextInputLayout extends SakTextInputLayoutBase {

    nativeView: any;

    private _textField: SakTextField | TextField | TextView;

    get textField(): SakTextField | TextField | TextView { return this._textField; }
    set textField(tf: SakTextField | TextField | TextView) {
        const old = this._textField;
        if (old) {
            this._removeView(old);
        }

        this._textField = tf;
        if (tf) {
            this._addView(tf);
        }

        this.setupTextView();
    }

    get _childrenCount(): number {
        return this._textField ? 1 : 0;
    }

    public _addChildFromBuilder(name: string, child: SakTextField): void {
        if (!(child instanceof SakTextField) || !(child instanceof TextView || child instanceof TextField)) {
            throw new Error('TextInputLayout may only have a <SakTextField> as a child');
        }

        this.textField = child;
    }

    public eachChildView(callback: (child: View) => boolean) {
        if (this._textField) {
            callback(this._textField);
        }
    }

    public onLoaded(): void {
        super.onLoaded();
        this.setupTextView();
    }

    private setupTextView() {
        if (!this.isLoaded) {
            return;
        }

        const textField = this._textField;
        const nativeView = this.nativeView;
        const layoutParams = new (<any>android).widget.LinearLayout.LayoutParams(
            (<any>android).widget.LinearLayout.LayoutParams.MATCH_PARENT,
            (<any>android).widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        const current = nativeView.getEditText();
        const nativeTextField = textField.nativeView;
        if (current !== nativeTextField) {
            if (current) {
                nativeView.removeView(current);
            }

            nativeView.addView(nativeTextField, 0, layoutParams);
        }

        const txtValue = textField.nativeView.getText();
        nativeTextField.setText('');
        nativeTextField.setText(txtValue);
    }

    public createNativeView(): Object {
        return new android.support.design.widget.TextInputLayout(this._context);
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.setHint(value);
    }

    [hintAnimationEnabledProperty.setNative](value: boolean) {
        this.nativeView.setHintAnimationEnabled(value);
    }

    [hintTextAppearanceProperty.setNative](value: string) {
        const resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setHintTextAppearance(resourceId);
        }
    }

    [errorTextAppearanceProperty.setNative](value: string) {
        const resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setErrorTextAppearance(resourceId);
        }
    }

    [errorEnabledProperty.setNative](value: boolean) {
        if (!value && (this.error || '').length > 0) {
            this.error = '';
        }
        this.nativeView.setErrorEnabled(value);
    }

    [errorProperty.setNative](value: string) {
        // NOTE: Android natively sets errorEnabled to true if this is not null
        this.nativeView.setError(value || '');
        if ((value || '').length > 0) {
            this.errorEnabled = true;
        }
    }

    [counterEnabledProperty.setNative](value: boolean) {
        this.nativeView.setCounterEnabled(value);
    }
}

hintAnimationEnabledProperty.register(SakTextInputLayout);
hintTextAppearanceProperty.register(SakTextInputLayout);
errorTextAppearanceProperty.register(SakTextInputLayout);
counterEnabledProperty.register(SakTextInputLayout);
errorEnabledProperty.register(SakTextInputLayout);