import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { View, Style, Property, CssProperty, isIOS, booleanConverter } from "tns-core-modules/ui/core/view";
export { View } from "tns-core-modules/ui/core/view";

export const classProperty = new Property<SakTextFieldBase, string>({ name: "class", defaultValue: "", affectsLayout: isIOS });
export const hintProperty = new Property<SakTextFieldBase, string>({ name: "hint", defaultValue: "", affectsLayout: isIOS });
export const hintColorProperty = new Property<SakTextFieldBase, string>({ name: "hintColor", defaultValue: "", affectsLayout: isIOS });
export const maxlengthProperty = new Property<SakTextFieldBase, string>({ name: "maxlength", defaultValue: "", affectsLayout: isIOS });
export const ellipsizeProperty = new Property<SakTextFieldBase, boolean>({ name: "ellipsize" });
export const regexProperty = new Property<SakTextFieldBase, string>({ name: "regex" });
export const colorProperty = new Property<SakTextFieldBase, string>({ name: "color" });
export const backgroundColorProperty = new Property<SakTextFieldBase, string>({ name: "backgroundColor" });
export const fontProperty = new Property<SakTextFieldBase, string>({ name: "font" });
export const textSizeProperty = new Property<SakTextFieldBase, string>({ name: "textSize" });

export abstract class SakTextFieldBase extends View implements SakTextFieldDefinition {

}

classProperty.register(SakTextFieldBase);
hintProperty.register(SakTextFieldBase);
hintColorProperty.register(SakTextFieldBase);
maxlengthProperty.register(SakTextFieldBase);
ellipsizeProperty.register(SakTextFieldBase);
regexProperty.register(SakTextFieldBase);
colorProperty.register(SakTextFieldBase);
backgroundColorProperty.register(SakTextFieldBase);
fontProperty.register(SakTextFieldBase);
textSizeProperty.register(SakTextFieldBase);