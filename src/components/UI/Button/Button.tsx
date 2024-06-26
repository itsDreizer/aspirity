import { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className = "" }) => {
  return (
    <button
      className={`${className} tracking-widest bg-[var(--btn-primary)] rounded-[0.250rem] px-4 py-3 text-sm uppercase font-semibold text-[#E1E3E6] text-center`}>
      {children}
    </button>
  );
};

export default Button;
