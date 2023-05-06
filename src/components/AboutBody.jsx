import styled from 'styled-components';

import Dropdown from '../components/Dropdown';

const aboutList = require('../datas/about.json');

const AboutBodyMain = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
`


function AboutBody() {
    return (
        <AboutBodyMain>
            {aboutList.map((aboutCat) => (
                <Dropdown key={aboutCat.id} title={aboutCat.title} text={aboutCat.text} />
            ))}
        </AboutBodyMain>
    );
}

export default AboutBody;