import React, { useState } from 'react'
import EffectHookMouseMove from './EffectHookMouseMove';

function MouseContainer() {
    const[display,setDisplay]=useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toogle Display</button>
        {display&&<EffectHookMouseMove/>}
    </div>
  )
}

export default MouseContainer