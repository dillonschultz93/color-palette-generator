import './ColorChips.css';

import { ColorChip } from '../ColorChip';
import { ColorChipProps } from '../ColorChip/ColorChip';

export type ColorChipsProps = {
  baseColor: string;
  amountOfStops: number;
  treatment: ColorChipProps['treatment'];
  neutralMixIntensity?: ColorChipProps['neutralMixIntensity'];
};

const ColorChips: React.FC<ColorChipsProps> = ({ amountOfStops, baseColor, treatment, neutralMixIntensity }) => {
  return (
    <div className="color-chips" style={{gridTemplateRows: `repeat(${amountOfStops}, 1fr)`}}>
      {Array.from({ length: amountOfStops }).map((_, index) => (
        <ColorChip key={index} color={baseColor} id={(index + 1).toString()} treatment={treatment} stop={index} neutralMixIntensity={neutralMixIntensity} />
      ))}
    </div>
  );
};

export default ColorChips;
