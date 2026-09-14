type IconProps = {
  size?: number;
  className?: string;
};

/** The classic London Buses roundel: solid red disc with a blue bar. */
export function BusRoundelIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id="bus-roundel-clip">
          <circle cx="12" cy="12" r="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#bus-roundel-clip)">
        <circle cx="12" cy="12" r="11" fill="#E32017" />
        <rect x="0" y="9" width="24" height="6" fill="#003688" />
      </g>
    </svg>
  );
}

/** The DLR roundel: a teal ring with a bar, following the TfL rail-family style. */
export function DlrRoundelIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="#00AFAD" strokeWidth="3" />
      <rect x="1" y="10.5" width="22" height="3" fill="#00AFAD" />
    </svg>
  );
}
