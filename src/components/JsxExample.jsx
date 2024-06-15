import React from "react";

export const JsxExample = () => {
    // return (
    //     <div>
    //         <h1>React Jsx Component</h1>
    //     </div>
    // )

    return React.createElement('div',
        { id: "first-id", className: "first-class" },
        React.createElement('h1',
            null,
            "React using pure javascript"))
}