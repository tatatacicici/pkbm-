import { FC, ReactElement } from "react";
import { TOptionFieldProps } from "./types";

const OptionField: FC<TOptionFieldProps> = ({ className, value, label }): ReactElement => {
  return (
    <option value={value} className={className}>
      {label}
    </option>
  );
};

export default OptionField;
