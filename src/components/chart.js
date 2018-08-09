import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import React from 'react';

function average(data){
    return 
}

export default (props) => {
    return(
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
}