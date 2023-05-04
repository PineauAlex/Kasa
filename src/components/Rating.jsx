import styled from 'styled-components';
import { FaStar } from "react-icons/fa";

const RatingDisplay = styled.div`
    display: flex;
    justify-content: left;
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
    return (
        <RatingDisplay>
            <StarIcon className='on' />
            <StarIcon className='on' />
            <StarIcon className='on' />
            <StarIcon className='on' />
            <StarIcon className='on' />
            {/*
            for (let i = 1; i <= 5; i++) {
                if (i <= stars) {
                    <StarIcon className='on' />
                }
                else {
                    <StarIcon className='off' />
                }
            }
            */}
        </RatingDisplay>
    );
}

export default Rating;