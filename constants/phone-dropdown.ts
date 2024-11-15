export interface Country {
  code: string;
  name: string;
  flagIcon: string; 
  phoneCode: string;
  format: string;
}

export const countries: Country[] = [
  {
    code: "RU",
    name: "Россия",
    flagIcon: "/icons/ru.svg",
    phoneCode: "+7",
    format: "### ### ## ##"
  },
  {
    code: "US",
    name: "США",
    flagIcon: "🇺🇸", 
    phoneCode: "+1",
    format: "### ### ####"
  },
];