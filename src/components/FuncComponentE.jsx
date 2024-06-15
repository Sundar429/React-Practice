import React, { useContext } from 'react'
import FuncComponentF from './FuncComponentF'
import { UserContext,ChannelContext } from '../App'

function FuncComponentE() {
   const user= useContext(UserContext);
   const  channel=useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
            {/* <FuncComponentF /> */}
        </div>
    )
}

export default FuncComponentE