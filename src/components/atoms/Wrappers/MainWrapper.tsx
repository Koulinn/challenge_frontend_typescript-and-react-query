import React from 'react';
import ChildrenType from 'types/ChildrenType';

function MainWrapper(props: ChildrenType) {
    return <main>{props.children}</main>;
}

export default MainWrapper;
