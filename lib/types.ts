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
  consentBreak?: boolean;
  consentAlign?: 'left' | 'center' | 'right';
  consentColor?: 'gray' | 'white';
  consentMobileAlign?: 'left' | 'center' | 'right';
  consentMobileColor?: 'gray' | 'white';
}

export interface ContactTypeProps {
  variant?: 'primary' | 'secondary';
}