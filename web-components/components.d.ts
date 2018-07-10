/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CobContactForm {
      /**
       * Defaults to `https://contactform.boston.gov/emails` but can be set for development testing.
       */
      'action': string;
      /**
       * Pre-fills the subject field in the form.
       */
      'defaultSubject': string;
      /**
       * Hide the modal.
       */
      'hide': () => void;
      /**
       * Show the modal.
       */
      'show': () => void;
      /**
       * Email address to send the form contents to. Defaults to **feedback@boston.gov**.
       */
      'to': string;
      /**
       * HTTP Authorization header token. Needs to match an API token in the `contactform.boston.gov` database.
       */
      'token': string;
      /**
       * Whether or not the modal is shown. Defaults to hidden.
       */
      'visible': boolean;
    }
  }

  interface HTMLCobContactFormElement extends StencilComponents.CobContactForm, HTMLStencilElement {}

  var HTMLCobContactFormElement: {
    prototype: HTMLCobContactFormElement;
    new (): HTMLCobContactFormElement;
  };
  interface HTMLElementTagNameMap {
    'cob-contact-form': HTMLCobContactFormElement;
  }
  interface ElementTagNameMap {
    'cob-contact-form': HTMLCobContactFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-contact-form': JSXElements.CobContactFormAttributes;
    }
  }
  namespace JSXElements {
    export interface CobContactFormAttributes extends HTMLAttributes {
      /**
       * Defaults to `https://contactform.boston.gov/emails` but can be set for development testing.
       */
      'action'?: string;
      /**
       * Pre-fills the subject field in the form.
       */
      'defaultSubject'?: string;
      /**
       * Email address to send the form contents to. Defaults to **feedback@boston.gov**.
       */
      'to'?: string;
      /**
       * HTTP Authorization header token. Needs to match an API token in the `contactform.boston.gov` database.
       */
      'token'?: string;
      /**
       * Whether or not the modal is shown. Defaults to hidden.
       */
      'visible'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CobMap {
      /**
       * A JSON string or equivalent object that defines the map and layers. The schema for this config comes from VizWiz, so it won’t be documented here.  Any attributes prefixed with `map-` will be passed on to the generated `<cob-map>` component. _E.g._ `map-id` or `map-style`.
       */
      'config': string;
      /**
       * Hides the modal, if the map is in modal mode.
       */
      'hide': () => void;
      /**
       * ID of the HTML element. Used to automatically open the map modal.
       */
      'id': string;
      /**
       * If true, the map starts hidden and, when shown, appears in a full-screen modal dialog.  Note: On the server, this may be the empty string when true, so we need to check against `!== false` to test it.
       */
      'modal': boolean;
      /**
       * Change to true to make the modal appear.
       */
      'modalVisible': boolean;
      /**
       * Test attribute to make the overlay open automatically at mobile widths. Only used so that we can take Percy screenshots of the overlay.
       */
      'openOverlay': boolean;
      /**
       * Shows the modal, if the map is in modal mode.
       */
      'show': () => void;
      /**
       * If the map is in modal mode, toggles whether or not it’s visible.
       */
      'toggle': () => void;
    }
  }

  interface HTMLCobMapElement extends StencilComponents.CobMap, HTMLStencilElement {}

  var HTMLCobMapElement: {
    prototype: HTMLCobMapElement;
    new (): HTMLCobMapElement;
  };
  interface HTMLElementTagNameMap {
    'cob-map': HTMLCobMapElement;
  }
  interface ElementTagNameMap {
    'cob-map': HTMLCobMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cob-map': JSXElements.CobMapAttributes;
    }
  }
  namespace JSXElements {
    export interface CobMapAttributes extends HTMLAttributes {
      /**
       * A JSON string or equivalent object that defines the map and layers. The schema for this config comes from VizWiz, so it won’t be documented here.  Any attributes prefixed with `map-` will be passed on to the generated `<cob-map>` component. _E.g._ `map-id` or `map-style`.
       */
      'config'?: string;
      /**
       * ID of the HTML element. Used to automatically open the map modal.
       */
      'id'?: string;
      /**
       * If true, the map starts hidden and, when shown, appears in a full-screen modal dialog.  Note: On the server, this may be the empty string when true, so we need to check against `!== false` to test it.
       */
      'modal'?: boolean;
      /**
       * Change to true to make the modal appear.
       */
      'modalVisible'?: boolean;
      /**
       * Test attribute to make the overlay open automatically at mobile widths. Only used so that we can take Percy screenshots of the overlay.
       */
      'openOverlay'?: boolean;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
