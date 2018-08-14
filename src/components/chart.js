import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import React from 'react';

function average(data){
    return _.round(_.sum(data)/data.length)
}

export default (props) => {
    return(
        <div>
            <Sparklines svgHeight={80} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color} style={{ strokeWidth: 2 }}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)} 
                {props.units}
            </div>
        </div>
    )
}