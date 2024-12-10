import './ColorPicker.css';
import { ChangeEventHandler } from 'react';
export type ColorPickerProps = {
  label: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const ColorPicker: React.FC<ColorPickerProps> =({
  label,
  value = '#4C87F9',
  onChange,
}) => {
  return (
    <form>
      <label>
        {label}
        <input
          type="color"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default ColorPicker;
