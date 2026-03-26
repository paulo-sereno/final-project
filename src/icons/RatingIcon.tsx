import React from "react";

type RatingIconType = "full" | "half" | "empty";

interface RatingIconProps {
  type: RatingIconType;
}

// autoria do Copilot

const commonSvgProps: React.SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "#FFFF00",
  stroke: "#ffff0031",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "lucide lucide-star-icon lucide-star",
};

const RatingIcon: React.FC<RatingIconProps> = ({ type }) => {
  const pathD =
    "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z";

  if (type === "full")
    return (
      <svg {...commonSvgProps}>
        <path d={pathD} />
      </svg>
    );
  if (type === "half")
    return (
      <svg {...commonSvgProps}>
        <defs>
          <clipPath id="half-clip">
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>
        </defs>
        <path d={pathD} clipPath="url(#half-clip)" />
        <path d={pathD} fill="none" />
      </svg>
    );
  return (
    <svg {...commonSvgProps}>
      <path d={pathD} fill="none" />
    </svg>
  );
};

export default RatingIcon;
