import styled from 'styled-components';
import { FaStar } from "react-icons/fa";

const RatingDisplay = styled.div`
    display: flex;
    justify-content: left;
`

const StarIcon = styled(FaStar)`
    width: 17px;
    height: 17px;
    padding-right: 10px;

    &.on {
        color: #FF6060;
    }
    &.off {
        color: #E3E3E3;
    }
`


function Rating({ stars }) {
    return (
        <RatingDisplay>
            <StarIcon className='on' />
            <StarIcon className='on' />
            <StarIcon className='on' />
            <StarIcon className='off' />
            <StarIcon className='off' />
        </RatingDisplay>
    );
}

export default Rating;