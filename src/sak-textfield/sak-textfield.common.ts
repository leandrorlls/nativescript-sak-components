import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { View, Style, Property, CssProperty, isIOS, booleanConverter } from "tns-core-modules/ui/core/view";

export const placeholderTextProperty = new Property<SakTextFieldBase, string>({ name: "placeholderText", defaultValue: "", affectsLayout: isIOS });
export const placeholderTextColourProperty = new Property<SakTextFieldBase, string>({ name: "placeholderTextColour", defaultValue: "", affectsLayout: isIOS });
export const isPlaceholderAnimatedProperty = new Property<SakTextFieldBase, string>({ name: "isPlaceholderAnimated", defaultValue: "", affectsLayout: isIOS });

export const maxlengthProperty = new Property<SakTextFieldBase, string>({ name: "maxlength", defaultValue: "", affectsLayout: isIOS });
export const ellipsizeProperty = new Property<SakTextFieldBase, boolean>({ name: "ellipsize" });
export const regexProperty = new Property<SakTextFieldBase, string>({ name: "regex" });
export const letterColourProperty = new Property<SakTextFieldBase, string>({ name: "letterColour" });


export abstract class SakTextFieldBase extends View implements SakTextFieldDefinition {
    public placeholderText: string;
    public maxlength: string;
    public ellipsize: boolean;
    public specialChars: string;
}

// Defines 'placeholderText' property on SakTextFieldBase class.
placeholderTextProperty.register(SakTextFieldBase);
placeholderTextColourProperty.register(SakTextFieldBase);
maxlengthProperty.register(SakTextFieldBase);
ellipsizeProperty.register(SakTextFieldBase);
regexProperty.register(SakTextFieldBase);
letterColourProperty.register(SakTextFieldBase);
isPlaceholderAnimatedProperty.register(SakTextFieldBase);