import { Switch as HeadlessSwitch } from "@headlessui/react";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onCheckedChange}
      className={`${checked ? "bg-green-500" : "bg-red-500"}
        relative inline-flex h-6 w-11 items-center rounded-full transition`}
    >
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HeadlessSwitch>
  );
}
