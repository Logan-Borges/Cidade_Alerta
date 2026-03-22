export const IconInstagram = ({ size = 40, color = "#fff" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="17" cy="7" r="1" fill={color} />
    </svg>
  );
};