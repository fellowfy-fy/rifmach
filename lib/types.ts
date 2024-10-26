interface Country {
  code: string;
  name: string;
  flag: string;
  phoneCode: string;
  format: string;
}

export interface CallToActionProps {
  shadow?: boolean;
  showConsent?: boolean;
  variant?: 'primary' | 'secondary';
}

export interface ContactTypeProps {
  variant?: 'primary' | 'secondary';
}