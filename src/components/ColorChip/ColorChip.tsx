import Color from 'color';
import './ColorChip.css';

export type ColorChipProps = {
  color: string;
  stop: number
  treatment: 'tint' | 'shade' | 'neutral';
  neutralMixIntensity?: number;
  id?: string;
};

const ColorChip: React.FC<ColorChipProps> = ({ color, id, treatment, stop, neutralMixIntensity = 0.03}) => {
  const treatmentValue = treatment === 'tint' ? 'white' : 'black';
  const stopPercentage = (stop + 1) / 10;
  const neutralColorMix = Color().black((stop + 1) * 10).mix(Color(color), neutralMixIntensity).hex();
  const colorMix = treatment === 'neutral' ? neutralColorMix : Color(color).mix(Color(treatmentValue), stopPercentage).hex();

  return (
    <div
      className={['color-chip', treatment].join(' ')}
      style={{ backgroundColor: colorMix}}
      id={id}
    >
      <span className='hex-value'>
        {colorMix}
      </span>
      <span className='stop-value'>
        { color } @ {stopPercentage} { treatmentValue}
      </span>
    </div>
  );
};

export default ColorChip;
