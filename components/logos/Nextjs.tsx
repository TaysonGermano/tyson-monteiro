const Nextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full ${props.className ?? ""}`}
  >
    <defs>
      <linearGradient
        id="nextjs_icon_dark__b"
        x1="109"
        y1="54"
        x2="144"
        y2="123"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="nextjs_icon_dark__c"
        x1="121"
        y1="54"
        x2="120.799"
        y2="106.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask
        id="nextjs_icon_dark__a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
    </defs>
    <g mask="url(#nextjs_icon_dark__a)">
      <circle
        cx="90"
        cy="90"
        r="87"
        fill="black"
        stroke="white"
        strokeWidth="6"
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#nextjs_icon_dark__b)"
      />
      <rect
        x="115"
        y="54"
        width="12"
        height="72"
        fill="url(#nextjs_icon_dark__c)"
      />
    </g>
  </svg>
);

export default Nextjs;
