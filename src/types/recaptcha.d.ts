
interface Window {
  grecaptcha: {
    ready: (callback: () => void) => void;
    render: (container: string, options: {
      sitekey: string;
      callback: (response: string) => void;
      'expired-callback': () => void;
    }) => void;
    reset: () => void;
  };
}
