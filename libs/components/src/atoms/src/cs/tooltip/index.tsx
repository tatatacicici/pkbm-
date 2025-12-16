import { FC, ReactElement } from "react";
import { TtoolTip } from "./type";

export const ToolTip: FC<TtoolTip> = ({ children, tooltip, className }): ReactElement => {
  return (
    <div className="group relative inline-block">
      {children}
      <span
        className={`${className} absolute top-full mt-2 p-1 text-xs whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition border-[1px] rounded-[4px]`}
      >
        {tooltip}
      </span>
    </div>
  );
};
