import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Logo.module.css";

export function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.logo)} {...props}>
      <svg
        className={styles.mark}
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        fill="none"
        {...props}
      >
        <g filter="url(#a)">
          <path
            fill="url(#b)"
            d="M180.667 126.667 191.905 107l-11.238-19.667h-22.476L146.952 107l11.239 19.667h22.476Z"
          />
          <path
            fill="url(#c)"
            d="m203.143 87.333 11.238-19.666L203.143 48h-22.476l-11.238 19.667 11.238 19.666h22.476Z"
          />
          <path
            fill="url(#d)"
            d="M225.619 126.667 236.857 107l-11.238-19.667h-22.476L191.905 107l11.238 19.667h22.476Z"
          />
          <path
            fill="url(#e)"
            d="m203.143 166 11.238-19.667-11.238-19.666h-22.476l-11.238 19.666L180.667 166h22.476Z"
          />
          <path
            fill="url(#f)"
            d="m158.191 166 11.238-19.667-11.238-19.666h-22.477l-11.238 19.666L135.714 166h22.477Z"
          />
          <path
            fill="url(#g)"
            d="M135.714 126.667 146.952 107l-11.238-19.667h-22.476L102 107l11.238 19.667h22.476Z"
          />
          <path
            fill="url(#h)"
            d="m158.191 87.333 11.238-19.666L158.191 48h-22.477l-11.238 19.667 11.238 19.666h22.477Z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="c"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="d"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="e"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="f"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="g"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <linearGradient
            id="h"
            x1={169.429}
            x2={169.429}
            y1={48}
            y2={166}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="red" />
            <stop offset={1} stopColor="#FF2E2E" />
          </linearGradient>
          <filter
            id="a"
            width={338.857}
            height={322}
            x={0}
            y={-50}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={51} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_18" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_18"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <span className={styles.wordmark}>The Swarm Corporation</span>
    </div>
  );
}
