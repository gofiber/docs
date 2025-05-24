declare module '@theme/DocCard' {
  import type { ComponentType } from 'react';
  export interface Props {
    item: any;
  }
  const DocCard: ComponentType<Props>;
  export default DocCard;
}

declare module '@theme/Heading' {
  import type { ComponentType } from 'react';
  const Heading: ComponentType<any>;
  export default Heading;
}

declare module '@theme/DocVersionBanner' {
  import type { ComponentType } from 'react';
  const DocVersionBanner: ComponentType<any>;
  export default DocVersionBanner;
}
