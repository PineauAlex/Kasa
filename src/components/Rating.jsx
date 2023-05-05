import styled from 'styled-components';
import { FaStar } from "react-icons/fa";

const RatingDisplay = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StarIcon = styled(FaStar)`
    width: 18px;
    height: 18px;
    padding-right: 10px;

    &.on {
        color: #FF6060;
    }
    &.off {
        color: #E3E3E3;
    }
`


function Rating({ stars }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <RatingDisplay>
            {range.map((rangeElem) =>
                rangeElem <= stars
                ? <StarIcon key={rangeElem} className='on' /> 
                : <StarIcon key={rangeElem} className='off' />
            )}
        </RatingDisplay>
    );
}

export default Rating;