declare var ios: any;
declare var SkyFloatingLabelTextField: any;
declare var SkyFloatingLabelTextFieldWithIcon: any;

import { Font } from 'tns-core-modules/ui/styling/font';
import { TextField } from 'tns-core-modules/ui/text-field';
import { isEnabledProperty } from 'tns-core-modules/ui/core/view';
import { Color, Property, SakTextInputLayoutBase } from './sak-textinputlayout.common';
import { SakTextField } from '../sak-textfield/sak-textfield';

export const disabledColorProperty = new Property<SakTextInputLayout, Color>({
    name: 'disabledColor',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const hintProperty = new Property<SakTextInputLayout, string>({
    name: "hint",
    affectsLayout: true
});

// note: this is the floating label value 
export const titleProperty = new Property<SakTextInputLayout, string>({
    name: "title", affectsLayout: true
});

export const titleFontProperty = new Property<SakTextInputLayout, UIFont>({
    name: "titleFont",
    affectsLayout: true
});

export const tintColorProperty = new Property<SakTextInputLayout, Color>({
    name: "tintColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const lineColorProperty = new Property<SakTextInputLayout, Color>({
    name: "lineColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedTitleColorProperty = new Property<SakTextInputLayout, Color>({
    name: "selectedTitleColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedLineColorProperty = new Property<SakTextInputLayout, Color>({
    name: "selectedLineColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const lineHeightProperty = new Property<SakTextInputLayout, number>({
    name: "lineHeight",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export const selectedLineHeightProperty = new Property<SakTextInputLayout, number>({
    name: "selectedLineHeight",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export const errorProperty = new Property<SakTextInputLayout, string>({
    name: "error",
    affectsLayout: true
});

export const errorColorProperty = new Property<SakTextInputLayout, Color>({
    name: "errorColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const iconColorProperty = new Property<SakTextInputLayout, Color>({
    name: "iconColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedIconColorProperty = new Property<SakTextInputLayout, Color>({
    name: "selectedIconColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const iconFontProperty = new Property<SakTextInputLayout, UIFont>({
    name: "iconFont",
    affectsLayout: true
});

export const iconTextProperty = new Property<SakTextInputLayout, string>({
    name: "iconText",
    affectsLayout: true
});

export const iconMarginBottomProperty = new Property<SakTextInputLayout, number>({
    name: "iconMarginBottom",
    affectsLayout: true,
    valueConverter: v => parseInt(v)
});

export const iconMarginLeftProperty = new Property<SakTextInputLayout, number>({
    name: "iconMarginLeft",
    affectsLayout: true,
    valueConverter: v => parseInt(v)
});

export const iconRotationDegreesProperty = new Property<SakTextInputLayout, number>({
    name: "iconRotationDegrees",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export class SakTextInputLayout extends SakTextField implements SakTextInputLayoutBase {

    public hint: string;
    public error: string;
    public disabledColor: Color;

    _ios: any;

    createNativeView() {
        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        let nativeView = new SkyFloatingLabelTextField(CGRectMake(0, 0, 0, 0));
        this._ios = this.nativeView = nativeView;
        return nativeView;
    }

    [isEnabledProperty.setNative](value: Boolean) {
        TextField.prototype[isEnabledProperty.setNative].call(this, value);
        this.nativeView.isEnabled = value;
    }

    [disabledColorProperty.setNative](value: Color) {
        this.nativeView.disabledColor = value instanceof Color ? value.ios : value;
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.placeholder = value;
    }

    [errorProperty.setNative](value: string) {
        this.nativeView.errorMessage = value;
    }

    [errorColorProperty.setNative](value: Color) {
        this.nativeView.errorColor = value instanceof Color ? value.ios : value;
    }

    [titleProperty.setNative](value: string) {
        this.nativeView.title = value;
        this.nativeView.titleFormatter = function () { return value; };
    }

    [titleFontProperty.setNative](value: UIFont) {
        this.nativeView.titleFont = value;
    }

    [tintColorProperty.setNative](value: Color) {
        this.nativeView.tintColor = value instanceof Color ? value.ios : value;
    }

    [selectedTitleColorProperty.setNative](value: Color) {
        this.nativeView.selectedTitleColor = value instanceof Color ? value.ios : value;
    }

    [lineColorProperty.setNative](value: Color) {
        this.nativeView.lineColor = value instanceof Color ? value.ios : value;
    }

    [selectedLineColorProperty.setNative](value: Color) {
        this.nativeView.selectedLineColor = value instanceof Color ? value.ios : value;
    }

    [lineHeightProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.lineHeight = value;
        }
    }

    [selectedLineHeightProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.selectedLineHeight = value;
        }
    }

    [iconColorProperty.setNative](value: Color) {
        this.nativeView.iconColor = value instanceof Color ? value.ios : value;
    }

    [selectedIconColorProperty.setNative](value: Color) {
        this.nativeView.selectedIconColor = value instanceof Color ? value.ios : value;;
    }

    [iconFontProperty.setNative](value: UIFont) {
        this.nativeView.iconFont = value;
    }

    [iconTextProperty.setNative](value: string) {
        this.nativeView.iconText = value;
    }

    [iconMarginBottomProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginBottom = value;
        }
    }

    [iconMarginLeftProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginLeft = value;
        }
    }

    [iconRotationDegreesProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconRotationDegrees = value;
        }
    }
}

export class TextInputLayoutWithIcon extends SakTextInputLayout {
    createNativeView() {
        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        let nativeView = new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 0, 0));
        this._ios = this.nativeView = nativeView;
        return nativeView;
    }
}

disabledColorProperty.register(SakTextInputLayout);
hintProperty.register(SakTextInputLayout);
errorProperty.register(SakTextInputLayout);
errorColorProperty.register(SakTextInputLayout);
titleProperty.register(SakTextInputLayout);
tintColorProperty.register(SakTextInputLayout);
lineColorProperty.register(SakTextInputLayout);
selectedTitleColorProperty.register(SakTextInputLayout);
selectedLineColorProperty.register(SakTextInputLayout);
lineHeightProperty.register(SakTextInputLayout);
selectedLineHeightProperty.register(SakTextInputLayout);
iconColorProperty.register(SakTextInputLayout);
selectedIconColorProperty.register(SakTextInputLayout);
iconFontProperty.register(SakTextInputLayout);
iconTextProperty.register(SakTextInputLayout);
iconMarginBottomProperty.register(SakTextInputLayout);
iconMarginLeftProperty.register(SakTextInputLayout);
iconRotationDegreesProperty.register(SakTextInputLayout);