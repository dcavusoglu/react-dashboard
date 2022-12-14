import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const changeColor = (arg) => {
  document.getElementById('preview').style.backgroundColor = arg.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Color Picker' />
      <div className='text-center'>
        <div id='preview'/>
          <div className='flex justify-center items-center gap-20 flex-wrap'>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
              <ColorPickerComponent id='inline-palette' mode='Palette' inline showButtons={false} modeSwitcher={false} change={changeColor}/>
            </div>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
              <ColorPickerComponent id='inline-picker' mode='Picker' inline showButtons={false} modeSwitcher={false} change={changeColor}/>
            </div>
          </div>
      </div>




    </div>
  )
}

export default ColorPicker
