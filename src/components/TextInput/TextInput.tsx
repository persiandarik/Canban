import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useId,
  useState,
} from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  error?: string | null;
};

export default function TextInput({
  className,
  label,
  error,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, "");

    if (cleaned === "") {
      setValue("");
      return;
    }

    const n = Number.parseInt(cleaned);
    setValue(n.toLocaleString());
  };

  return (
    <div
      className={clsx(styles["text-input"], !!error && styles.error, className)}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...otherProps}
        value={value}
        onChange={handleInputChange}
      />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
