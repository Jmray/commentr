import React from 'react';





export function conditionalRender (content, onNonRender, isLoading){
    const contentToRender = isLoading ? content : <div>{onNonRender}</div>;

    return(
        contentToRender
    )
};


