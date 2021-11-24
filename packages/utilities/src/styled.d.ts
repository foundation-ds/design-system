import "styled-components";

import { DefaultTheme as Theme } from "@foundation-ds/tokens/dist/styles";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
