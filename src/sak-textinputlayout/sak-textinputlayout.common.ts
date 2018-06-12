import { SakTextInputLayout as SakTextInputLayoutDefinition } from "./sak-textinputlayout";
import { View, Style, Property, CssProperty, isIOS, booleanConverter } from "tns-core-modules/ui/core/view";
export { View } from "tns-core-modules/ui/core/view";

export const hintTextAppearanceProperty = new Property<SakTextInputLayoutBase, string>({ name: "hintTextAppearance", defaultValue: "", affectsLayout: isIOS });

export abstract class SakTextInputLayoutBase extends View implements SakTextInputLayoutDefinition {

}

hintTextAppearanceProperty.register(SakTextInputLayoutBase);