import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

export default function Button({ title, icon, href, className }: ButtonProps) {
  return (
    <button
      className={` flex items-center py-2 px-8 rounded-[10px] hover:bg-hover text-black ${className} `}
    >
      <Link to={`${href}`} className="flex gap-1 items-center justify-center">
        {icon}
        <span>{title}</span>
      </Link>
    </button>
  );
}
