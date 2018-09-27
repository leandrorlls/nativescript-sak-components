import { Color } from "tns-core-modules/color";
import { View, Property } from "tns-core-modules/ui/core/view";

export class SakTextInputLayout extends View {
    /**
     * Native [android TextInputLayout](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)
     */
    android: any;

    ios: any;

    public hint: string;
    public error: string;

    //ANDROID ONLY
    public hintAnimationEnabled?: boolean;
    public hintTextAppearance?: string;
    public counterEnabled?: boolean;
    public errorEnabled?: boolean;

    //IOS Only
    public title?: string;
    public tintColor?: Color;
    public lineColor?: Color;
    public selectedTintColor?: Color;
    public selectedLineColor?: Color;
    public selectedTitleColor?: Color;
    public lineHeight?: number;
    public selectedLineHeight?: number;
    public errorColor?: Color;
    public iconColor?: Color;
    public selectedIconColor?: Color;
    public iconFont?: string;
    public iconText?: string;
    public iconMarginBottom?: number;
    public iconMarginLeft?: number;
    public iconRotationDegrees?: number;
}

export const errorProperty: Property<SakTextInputLayout, string>;
export const hintProperty: Property<SakTextInputLayout, string>;
export const hintAnimationEnabledProperty: Property<SakTextInputLayout, boolean>;
export const hintTextAppearanceProperty: Property<SakTextInputLayout, string>;
export const counterEnabledProperty: Property<SakTextInputLayout, boolean>;
export const errorEnabledProperty: Property<SakTextInputLayout, boolean>;
export const titleProperty: Property<SakTextInputLayout, string>;
export const tintColorProperty: Property<SakTextInputLayout, Color>;
export const lineColorProperty: Property<SakTextInputLayout, Color>;
export const selectedTitleColorProperty: Property<SakTextInputLayout, Color>;
export const selectedLineColorProperty: Property<SakTextInputLayout, Color>;
export const lineHeightProperty: Property<SakTextInputLayout, number>;
export const selectedLineHeightProperty: Property<SakTextInputLayout, number>;
export const errorColorProperty: Property<SakTextInputLayout, Color>;
export const iconColorProperty: Property<SakTextInputLayout, Color>;
export const selectedIconColorProperty: Property<SakTextInputLayout, Color>;
export const iconFontProperty: Property<SakTextInputLayout, UIFont>;
export const iconTextProperty: Property<SakTextInputLayout, string>;
export const iconMarginBottomProperty: Property<SakTextInputLayout, number>;
export const iconMarginLeftProperty: Property<SakTextInputLayout, number>;
export const iconRotationDegreesProperty: Property<SakTextInputLayout, number>;