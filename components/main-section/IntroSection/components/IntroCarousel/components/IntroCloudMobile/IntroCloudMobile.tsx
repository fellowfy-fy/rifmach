import { FC, SVGProps } from 'react';
import { IIntroCloudDesktopProps } from '../IntroCloudDesktop/IntroCloudDesktop';

export const IntroCloudMobile: FC<
  SVGProps<SVGSVGElement> & IIntroCloudDesktopProps
> = props => {
  const { progress } = props;

  return (
    <svg
      viewBox="0 0 335 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_30_3)">
        <rect
          x="46.1047"
          y="47.9775"
          width="229.328"
          height="87.9385"
          rx="30"
          fill="#0E9EFF"
          fillOpacity="0.5"
        />
      </g>
      <path
        d="M68.3403 91.9466C42.8843 91.9466 22.2482 71.3637 22.2482 45.9733C22.2482 20.583 42.8843 0 68.3403 0C93.7963 0 114.432 20.583 114.432 45.9733C114.432 71.3637 93.7963 91.9466 68.3403 91.9466Z"
        fill="#0E9EFF"
      />
      <path
        d="M178.173 68.8197C159.82 68.8197 144.941 53.9799 144.941 35.674C144.941 17.3681 159.82 2.52826 178.173 2.52826C196.526 2.52826 211.404 17.3681 211.404 35.674C211.404 53.9799 196.526 68.8197 178.173 68.8197Z"
        fill="#0E9EFF"
      />
      <path
        d="M35.7788 119.594C16.0187 119.594 0 103.616 0 83.907C0 64.1979 16.0187 48.2205 35.7788 48.2205C55.5389 48.2205 71.5576 64.1979 71.5576 83.907C71.5576 103.616 55.5389 119.594 35.7788 119.594Z"
        fill="#0E9EFF"
      />
      <path
        d="M124.008 58.3328C111.15 58.3328 100.727 47.9366 100.727 35.1121C100.727 22.2876 111.15 11.8914 124.008 11.8914C136.865 11.8914 147.288 22.2876 147.288 35.1121C147.288 47.9366 136.865 58.3328 124.008 58.3328Z"
        fill="#0E9EFF"
      />
      <path
        d="M217.133 68.9293C204.62 65.9823 196.871 53.4755 199.826 40.9948C202.781 28.514 215.32 20.7854 227.833 23.7325C240.346 26.6795 248.094 39.1863 245.14 51.667C242.185 64.1478 229.646 71.8764 217.133 68.9293Z"
        fill="#0E9EFF"
      />
      <path
        d="M254.955 66.8623C240.657 66.8623 229.066 55.3013 229.066 41.0401C229.066 26.7788 240.657 15.2178 254.955 15.2178C269.253 15.2178 280.844 26.7788 280.844 41.0401C280.844 55.3013 269.253 66.8623 254.955 66.8623Z"
        fill="#0E9EFF"
      />
      <rect
        x="14.6431"
        y="31.6553"
        width="299.293"
        height="87.9385"
        rx="30"
        fill="#0E9EFF"
      />
      <path
        d="M312.288 99.8689C324.575 99.8689 334.536 89.9341 334.536 77.6789C334.536 65.4236 324.575 55.4888 312.288 55.4888V99.8689Z"
        fill="#0E9EFF"
      />
      <circle
        cx="60.5618"
        cy="74.1583"
        r="9.88775"
        stroke="white"
        strokeWidth="4"
      />
      <circle
        cx="60.5618"
        cy="74.1583"
        r="9.88775"
        stroke="#FE7235"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="61"
        strokeDashoffset={61 - progress}
        fill="none"
      />
      <path
        d="M310.581 72.1118L316.408 77.9382L310.581 83.7646"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_f_30_3"
          x="26.1047"
          y="27.9775"
          width="269.328"
          height="127.938"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_30_3"
          />
        </filter>
      </defs>
    </svg>
  );
};
