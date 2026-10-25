// types/google.d.ts
export { };

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: {
            client_id: string;
            callback: (response: { credential: string }) => void | Promise<void>;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
            use_fedcm_for_button?: boolean;
          }) => void;
          prompt: () => void;
          renderButton?: (
            parent: HTMLElement,
            options: {
              theme?: 'outline' | 'filled_black' | 'filled_blue';
              size?: 'large' | 'medium' | 'small';
              type?: 'standard' | 'icon';
              shape?: 'rectangular' | 'pill' | 'circle' | 'square';
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'standard';
              logo_alignment?: 'left' | 'center';
              width?: string | number;
            }
          ) => void;
        };
      };
    };
  }
}