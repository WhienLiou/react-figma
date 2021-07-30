import * as React from "react";
import { convertToJSON } from 'react-json-renderer'

export const renderer = (jsx: React.ReactNode) => {
    const renderedTree = convertToJSON(jsx);

    console.log(renderedTree);
};
