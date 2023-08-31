import React from 'react'
import { BlockPicker, CompactPicker, MaterialPicker } from 'react-color'

const ColorPicker = (props) =>{


    return(
        <div className='Picker' onClick={props.getColor}>
            <BlockPicker
            
            />
        </div>
    )
}

export default ColorPicker;