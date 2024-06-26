import React from "react";

interface ILongArrowProps {
  color: "yellow" | "red" | "green";
}
enum Colors {
  yellow = "#FFB649",
  red = "#DB4546",
  green = "#25824F",
}
const LongArrow: React.FC<ILongArrowProps> = ({ color }) => {
  return (
    <svg
      width="18.000000"
      height="14.000000"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc></desc>
      <defs />
      <path
        id="Union"
        d="M11.7071 0.292908C11.3166 -0.0976562 10.6834 -0.0976562 10.2929 0.292908C9.90237 0.683411 9.90237 1.31659 10.2929 1.70709L14.5858 6L1 6C0.447723 6 0 6.44769 0 7C0 7.55231 0.447723 8 1 8L14.5858 8L10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071C10.6834 14.0977 11.3166 14.0977 11.7071 13.7071L17.7071 7.70709C18.0976 7.31659 18.0976 6.68341 17.7071 6.29291L11.7071 0.292908Z"
        clipRule="evenodd"
        fill={Colors[color]}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default LongArrow;
