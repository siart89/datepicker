import React from 'react';
import styled from 'styled-components';

import { DayInfo } from '../models';

type Props = {
    dayInfo: DayInfo;
};

const SingleDate: React.FC<Props> = (props) => {
    return (
        <SinglDateWeapper>
            {props.dayInfo.date}
        </SinglDateWeapper>
    )
};

const SinglDateWeapper = styled.div`

`;

export default SingleDate;