export const IconLinkedin = ({ size = 40, color = "#fff" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke={color} strokeWidth="1.5"/>
      <path d="M7 10V17" stroke={color} strokeWidth="1.5"/>
      <path d="M7 7H7.01" stroke={color} strokeWidth="1.5"/>
      <path d="M11 17V13C11 11.9 11.9 11 13 11C14.1 11 15 11.9 15 13V17" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
};