import styled from 'styled-components'

const InputElement = styled.input`
    height:30px;
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius:10px;
    padding: 0px 10px;
    margin-bottom:10px;
    
    &:focus{
        outline:none;
    }
`
export default InputElement