import { customElement } from "@microsoft/fast-element";
import { SectionHeader } from "./section-header";
import { SectionHeaderTemplate as template } from "./section-header.template";
import { SectionHeaderStyles as styles } from "./section-header.styles";

@customElement({
    name: "site-section-header",
    template,
    styles,
})
export class SiteSectionHeader extends SectionHeader {}
export * from "./section-header.template";
export * from "./section-header.styles";
export * from "./section-header";
