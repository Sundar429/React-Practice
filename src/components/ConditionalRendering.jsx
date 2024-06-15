import React from 'react'

export const ConditionalRendering = () => {

    const IsLoggedIn=true;
    // const IsLoggedIn=false;

    //if/else condition rendering 

    // if(IsLoggedIn){
    //     return(
    //         <div>
    //             Welcome Sundar
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }


    //Element Variable
    // let message;

    // if(IsLoggedIn){
    //     message=<div> Welcome Sundar</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //Using Teranry Operator
    // return(
    //     IsLoggedIn?<div> Welcome Sundar</div>:<div>Welcome Guest</div>
    // )

    //short cricuit operator

    return IsLoggedIn && <div>Welcome Sundar</div>
}
