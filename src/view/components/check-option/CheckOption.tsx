import "./CheckOption.css";
import { Dispatch, SetStateAction } from "react";
import { TickIcon } from "../../assets/icons/TickIcon";

export const CheckOption = ({
  checked,
  setChecked,
  label,
  ariaLabel,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  label?: string;
  ariaLabel?: string;
}) => {
  return (
    <div className="check-option-container">
      {label && <p>{label}</p>}
      <button
        aria-label={ariaLabel ? ariaLabel : label ? label : ""}
        className={
          "inline-start-margin " + (checked ? "check-active" : "check-inactive")
        }
        onClick={() => {
          setChecked(!checked);
        }}
      >
        {checked && <TickIcon />}
      </button>
    </div>
  );
};
