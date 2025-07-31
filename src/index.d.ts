// TypeScript definitions for nyacat-ui
// Project: https://github.com/Hitoshi-Noborikawa/nyacat-ui
// Definitions by: Hitoshi Noborikawa

declare module 'nyacat-ui' {
  import { PluginCreator } from 'tailwindcss/types/config';
  
  /**
   * Nyacat UI TailwindCSS Plugin
   * Adds cat-themed UI components with adorable animations
   */
  const nyacatUI: PluginCreator;
  export default nyacatUI;
}

declare module 'nyacat-ui/web-components' {
  /**
   * Cat breeds available for Nyacat UI components
   */
  export type CatBreed = 'orange' | 'tuxedo' | 'gray' | 'black' | 'white';
  
  /**
   * Size variants for Nyacat UI components
   */
  export type ComponentSize = 'sm' | 'lg';

  /**
   * NyacatModal Web Component
   * A modal component where cats peek out from cardboard boxes
   */
  export class NyacatModal extends HTMLElement {
    /**
     * Cat breed variant
     */
    variant: CatBreed | 'default';
    
    /**
     * Component size
     */
    size: ComponentSize | 'default';
    
    /**
     * Whether the modal is currently open
     */
    readonly isOpen: boolean;
    
    /**
     * Whether an animation is currently in progress
     */
    readonly animationInProgress: boolean;

    /**
     * Open the modal with cat animation
     */
    open(): void;
    
    /**
     * Close the modal with cat hiding animation
     */
    close(): void;
    
    /**
     * Show the modal (alias for open)
     */
    show(): void;
    
    /**
     * Hide the modal (alias for close)  
     */
    hide(): void;

    /**
     * Event fired when modal opens
     */
    addEventListener(type: 'nyacat-modal-open', listener: (event: CustomEvent<{
      variant: CatBreed | 'default';
      size: ComponentSize | 'default';
    }>) => void): void;
    
    /**
     * Event fired when modal closes
     */
    addEventListener(type: 'nyacat-modal-close', listener: (event: CustomEvent<{
      variant: CatBreed | 'default';
      size: ComponentSize | 'default';
    }>) => void): void;
    
    addEventListener(type: string, listener: EventListener): void;
  }
}

// Global declarations for Web Components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nyacat-modal': {
        id?: string;
        variant?: CatBreed;
        size?: ComponentSize;
        open?: boolean;
        children?: React.ReactNode;
      };
    }
  }
  
  interface HTMLElementTagNameMap {
    'nyacat-modal': NyacatModal;
  }
}

// CSS class name types for better IntelliSense
export interface NyacatUIClasses {
  // Button classes
  buttons: {
    base: 'btn-nyacat';
    breeds: {
      orange: 'btn-nyacat-orange';
      tuxedo: 'btn-nyacat-tuxedo';
      gray: 'btn-nyacat-gray';
      calico: 'btn-nyacat-calico';
      black: 'btn-nyacat-black';
      white: 'btn-nyacat-white';
    };
    parts: {
      tail: 'btn-nyacat-tail';
      paws: 'btn-nyacat-paws';
      pawsCSS: 'btn-nyacat-paws-css';
    };
  };
  
  // Card classes
  cards: {
    base: 'card-nyacat';
    breeds: {
      orange: 'card-nyacat-orange';
      tuxedo: 'card-nyacat-tuxedo';
      gray: 'card-nyacat-gray';
      calico: 'card-nyacat-calico';
      black: 'card-nyacat-black';
      white: 'card-nyacat-white';
    };
    sizes: {
      small: 'card-nyacat-sm';
      large: 'card-nyacat-lg';
    };
    variants: {
      peek: 'card-nyacat-peek';
      family: 'card-nyacat-family';
    };
  };
  
  // Input classes
  inputs: {
    wrapper: 'nyacat-input-wrapper';
    ears: 'neko-ears';
    tail: 'neko-tail';
    states: {
      error: 'nyacat-input-error';
      success: 'nyacat-input-success';
    };
  };
  
  // Loading classes
  loading: {
    spin: 'loading-nyacat';
    groom: 'loading-nyacat-groom';
    sizes: {
      small: 'loading-nyacat-sm';
      large: 'loading-nyacat-lg';
      extraLarge: 'loading-nyacat-xl';
    };
  };
  
  // Animation classes
  animations: {
    tailWag: 'animate-tail-wag';
    purr: 'animate-purr';
  };
  
  // Color classes
  colors: {
    text: {
      pink: 'text-nyacat-pink';
      salmon: 'text-nyacat-salmon';
      cream: 'text-nyacat-cream';
      brown: 'text-nyacat-brown';
      gray: 'text-nyacat-gray';
      black: 'text-nyacat-black';
    };
    background: {
      pink: 'bg-nyacat-pink';
      salmon: 'bg-nyacat-salmon';
      cream: 'bg-nyacat-cream';
      brown: 'bg-nyacat-brown';
      gray: 'bg-nyacat-gray';
      black: 'bg-nyacat-black';
    };
    border: {
      pink: 'border-nyacat-pink';
      salmon: 'border-nyacat-salmon';
      cream: 'border-nyacat-cream';
      brown: 'border-nyacat-brown';
      gray: 'border-nyacat-gray';
      black: 'border-nyacat-black';
    };
  };
  
  // Utility classes
  utilities: {
    borderRadius: {
      paw: 'rounded-paw';
      ear: 'rounded-ear';
    };
    spacing: {
      paw: 'p-paw' | 'm-paw';
      whisker: 'p-whisker' | 'm-whisker';
    };
  };
}

export type CatBreed = 'orange' | 'tuxedo' | 'gray' | 'black' | 'white';
export type ComponentSize = 'sm' | 'lg';
export { NyacatModal } from 'nyacat-ui/web-components';