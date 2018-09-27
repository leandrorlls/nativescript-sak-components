import { SakTextInputLayout as SakTextInputLayoutDefinition } from "./sak-textinputlayout";
import { Color } from "tns-core-modules/color";
import { View } from "tns-core-modules/ui/core/view";
import { Property } from "tns-core-modules/ui/core/properties";

export { Property, Color };

export abstract class SakTextInputLayoutBase extends View implements SakTextInputLayoutDefinition {
    // common
    public hint: string;
    public error: string;

    //ANDROID ONLY
    public hintAnimationEnabled?: boolean;
    public hintTextAppearance?: string;
    public errorTextAppearance?: string;
    public counterEnabled?: boolean;
    public errorEnabled?: boolean;

    //IOS Only
    public disabledColor?: Color;
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

export const errorProperty = new Property<SakTextInputLayoutBase, string>({
    name: "error",
    affectsLayout: true
});
errorProperty.register(SakTextInputLayoutBase);

// NOTE: This is 'placeholder' for ios
export const hintProperty = new Property<SakTextInputLayoutBase, string>({
    name: "hint",
    affectsLayout: true
});
hintProperty.register(SakTextInputLayoutBase);