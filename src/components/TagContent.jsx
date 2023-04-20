import styled from 'styled-components';

import Tag from '../components/Tag';

const TagsBody = styled.div`
    position: relative;
    display: flex;
    gap: 5px;
`


function TagContent({ tags }) {
    return (
        <TagsBody>
            {tags.map((tag) => (
                <Tag tagName={tag} />
            ))}
        </TagsBody>
    );
}

export default TagContent;