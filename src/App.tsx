import { useState, useEffect } from 'react';
import './App.css';

import { ColorPicker, ColorChips, NeutralMixRange } from './components';

function App() {
  const [baseColor, setBaseColor] = useState('#4C87F9');
  const [neutralMix, setNeutralMix] = useState(0.03);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-color', baseColor);
  }, [baseColor]);

  return (
    <>
      <h1>Simple Color Palette Generator</h1>
      <p>Pick a base color to get started.</p>

      <ColorPicker
        label="Base Color"
        value={baseColor}
        onChange={(event) => setBaseColor(event.target.value)} />

      <NeutralMixRange 
        label='Neutral Mix' 
        value={neutralMix} 
        onChange={(event) => setNeutralMix(parseFloat(event.target.value))}/>

      <div className='palette-stage'>
        <ColorChips amountOfStops={9} baseColor={baseColor} treatment='tint' />
        <ColorChips amountOfStops={9} baseColor={baseColor} treatment='shade' />
        <ColorChips amountOfStops={9} baseColor={baseColor} treatment='neutral' neutralMixIntensity={neutralMix} />
      </div>
    </>
  );
}

export default App;
