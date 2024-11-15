import { FC, SVGProps } from 'react';

export interface IIntroCloudDesktopProps {
  progress: number;
}

export const IntroCloudDesktop: FC<
  SVGProps<SVGSVGElement> & IIntroCloudDesktopProps
> = props => {
  const { progress } = props;

  return (
    <svg
      viewBox="0 0 454 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_26_1101)">
        <rect
          x="56.6214"
          y="59.1294"
          width="278.318"
          height="106.724"
          rx="30"
          fill="#0E9EFF"
          fillOpacity="0.5"
        />
      </g>
      <g filter="url(#filter1_f_26_1101)">
        <rect
          x="359.705"
          y="158.08"
          width="44.4565"
          height="41.7589"
          rx="20.8794"
          fill="#0E9EFF"
          fillOpacity="0.3"
        />
      </g>
      <g filter="url(#filter2_f_26_1101)">
        <rect
          x="414.29"
          y="203.811"
          width="19.1328"
          height="17.9718"
          rx="8.98588"
          fill="#0E9EFF"
          fillOpacity="0.3"
        />
      </g>
      <path
        d="M83.6072 112.491C52.7132 112.491 27.6687 87.5115 27.6687 56.6971C27.6687 25.8828 52.7132 0.902832 83.6072 0.902832C114.501 0.902832 139.546 25.8828 139.546 56.6971C139.546 87.5115 114.501 112.491 83.6072 112.491Z"
        fill="#0E9EFF"
      />
      <path
        d="M216.902 84.4239C194.629 84.4239 176.572 66.414 176.572 44.1975C176.572 21.9811 194.629 3.97107 216.902 3.97107C239.176 3.97107 257.233 21.9811 257.233 44.1975C257.233 66.414 239.176 84.4239 216.902 84.4239Z"
        fill="#0E9EFF"
      />
      <path
        d="M393.168 178.959C381.294 178.959 371.668 169.358 371.668 157.515C371.668 145.671 381.294 136.07 393.168 136.07C405.042 136.07 414.668 145.671 414.668 157.515C414.668 169.358 405.042 178.959 393.168 178.959Z"
        fill="#0E9EFF"
        fillOpacity="0.6"
      />
      <path
        d="M424.668 200.903C418.593 200.903 413.668 195.99 413.668 189.931C413.668 183.871 418.593 178.959 424.668 178.959C430.743 178.959 435.668 183.871 435.668 189.931C435.668 195.99 430.743 200.903 424.668 200.903Z"
        fill="#0E9EFF"
        fillOpacity="0.4"
      />
      <path
        d="M44.0897 146.044C20.1084 146.044 0.667702 126.654 0.667702 102.734C0.667702 78.8149 20.1084 59.4243 44.0897 59.4243C68.071 59.4243 87.5117 78.8149 87.5117 102.734C87.5117 126.654 68.071 146.044 44.0897 146.044Z"
        fill="#0E9EFF"
      />
      <path
        d="M151.166 71.6968C135.562 71.6968 122.912 59.0796 122.912 43.5155C122.912 27.9515 135.562 15.3343 151.166 15.3343C166.771 15.3343 179.42 27.9515 179.42 43.5155C179.42 59.0796 166.771 71.6968 151.166 71.6968Z"
        fill="#0E9EFF"
      />
      <path
        d="M264.185 84.5572C248.999 80.9806 239.596 65.8021 243.181 50.6552C246.767 35.5082 261.985 26.1286 277.171 29.7053C292.357 33.2819 301.761 48.4603 298.175 63.6073C294.589 78.7542 279.372 88.1338 264.185 84.5572Z"
        fill="#0E9EFF"
      />
      <path
        d="M310.087 82.0486C292.735 82.0486 278.668 68.0179 278.668 50.7102C278.668 33.4024 292.735 19.3717 310.087 19.3717C327.44 19.3717 341.507 33.4024 341.507 50.7102C341.507 68.0179 327.44 82.0486 310.087 82.0486Z"
        fill="#0E9EFF"
      />
      <rect
        x="18.4388"
        y="39.3203"
        width="363.229"
        height="106.724"
        rx="30"
        fill="#0E9EFF"
      />
      <path
        d="M379.668 122.106C394.579 122.106 406.668 110.049 406.668 95.1755C406.668 80.3023 394.579 68.2451 379.668 68.2451V122.106Z"
        fill="#0E9EFF"
      />
      <path
        d="M379.668 122.106C394.579 122.106 406.668 110.049 406.668 95.1755C406.668 80.3023 394.579 68.2451 379.668 68.2451V122.106Z"
        fill="#0E9EFF"
      />
      <circle cx="74.1668" cy="90.9028" r="12" stroke="white" strokeWidth="4" />
      <circle
        cx="74.1668"
        cy="90.9028"
        r="12"
        stroke="#FE7235"
        strokeWidth="2"
        strokeDasharray="74"
        strokeDashoffset={74 - progress}
        fill="none"
      />
      <path
        d="M377.597 88.4194L384.668 95.4905L377.597 102.562"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_f_26_1101"
          x="36.6214"
          y="39.1294"
          width="318.318"
          height="146.724"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_26_1101"
          />
        </filter>
        <filter
          id="filter1_f_26_1101"
          x="339.705"
          y="138.08"
          width="84.4565"
          height="81.7589"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_26_1101"
          />
        </filter>
        <filter
          id="filter2_f_26_1101"
          x="394.29"
          y="183.811"
          width="59.1328"
          height="57.9718"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_26_1101"
          />
        </filter>
      </defs>
    </svg>
  );
};
