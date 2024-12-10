import './NeutralMixRange.css';
import { ChangeEventHandler } from 'react';

export type NeutralMixRangeProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const NeutralMixRange: React.FC<NeutralMixRangeProps> = ({
  label,
  min = 0,
  max = 0.1,
  step = 0.01,
  value = 0.03,
  onChange,
}) => {
  return (
    <form>
      <label>
        {label}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default NeutralMixRange;
