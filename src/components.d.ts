/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppOrder {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface DominosHeader {}
  interface DominosTile {
    'description': string;
    'img': string;
    'pizzaTitle': string;
    'price': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppOrderElement extends Components.AppOrder, HTMLStencilElement {}
  var HTMLAppOrderElement: {
    prototype: HTMLAppOrderElement;
    new (): HTMLAppOrderElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDominosHeaderElement extends Components.DominosHeader, HTMLStencilElement {}
  var HTMLDominosHeaderElement: {
    prototype: HTMLDominosHeaderElement;
    new (): HTMLDominosHeaderElement;
  };

  interface HTMLDominosTileElement extends Components.DominosTile, HTMLStencilElement {}
  var HTMLDominosTileElement: {
    prototype: HTMLDominosTileElement;
    new (): HTMLDominosTileElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-order': HTMLAppOrderElement;
    'app-root': HTMLAppRootElement;
    'dominos-header': HTMLDominosHeaderElement;
    'dominos-tile': HTMLDominosTileElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppOrder {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface DominosHeader {}
  interface DominosTile {
    'description'?: string;
    'img'?: string;
    'pizzaTitle'?: string;
    'price'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-order': AppOrder;
    'app-root': AppRoot;
    'dominos-header': DominosHeader;
    'dominos-tile': DominosTile;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-order': LocalJSX.AppOrder & JSXBase.HTMLAttributes<HTMLAppOrderElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'dominos-header': LocalJSX.DominosHeader & JSXBase.HTMLAttributes<HTMLDominosHeaderElement>;
      'dominos-tile': LocalJSX.DominosTile & JSXBase.HTMLAttributes<HTMLDominosTileElement>;
    }
  }
}


