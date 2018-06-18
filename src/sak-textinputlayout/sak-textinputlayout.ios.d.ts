import { Color, Property, SakTextInputLayoutBase } from './sak-textinputlayout.common';
import { SakTextField } from '../sak-textfield/sak-textfield';
export declare const disabledColorProperty: any;
export declare const hintProperty: Property<SakTextInputLayout, string>;
export declare const titleProperty: Property<SakTextInputLayout, string>;
export declare const titleFontProperty: Property<SakTextInputLayout, UIFont>;
export declare const tintColorProperty: Property<SakTextInputLayout, Color>;
export declare const lineColorProperty: Property<SakTextInputLayout, Color>;
export declare const selectedTitleColorProperty: Property<SakTextInputLayout, Color>;
export declare const selectedLineColorProperty: Property<SakTextInputLayout, Color>;
export declare const lineHeightProperty: Property<SakTextInputLayout, number>;
export declare const selectedLineHeightProperty: Property<SakTextInputLayout, number>;
export declare const errorProperty: Property<SakTextInputLayout, string>;
export declare const errorColorProperty: Property<SakTextInputLayout, Color>;
export declare const iconColorProperty: Property<SakTextInputLayout, Color>;
export declare const selectedIconColorProperty: Property<SakTextInputLayout, Color>;
export declare const iconFontProperty: Property<SakTextInputLayout, UIFont>;
export declare const iconTextProperty: Property<SakTextInputLayout, string>;
export declare const iconMarginBottomProperty: Property<SakTextInputLayout, number>;
export declare const iconMarginLeftProperty: Property<SakTextInputLayout, number>;
export declare const iconRotationDegreesProperty: Property<SakTextInputLayout, number>;
export declare class SakTextInputLayout extends SakTextField implements SakTextInputLayoutBase {
    hint: string;
    error: string;
    disabledColor: Color;
    _ios: any;
    createNativeView(): any;
}
export declare class TextInputLayoutWithIcon extends SakTextInputLayout {
    createNativeView(): any;
}
