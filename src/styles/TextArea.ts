import styled from 'styled-components'

const TextArea = styled.textarea`
    min-width:300 !important;
    height:70px;
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius:10px;
    padding: 10px;
    margin-bottom:10px;

    &:focus{
    outline:none;
    }
`

export default TextArea