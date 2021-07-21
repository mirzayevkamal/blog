import styled from 'styled-components'

const ButtonElement = styled.button`
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.secondary};
    color:white;
    cursor:pointer;
    border:none;
    font-size:20px;

    &:hover{
    background: ${({ theme }) => theme.primary};
    }
`

export default ButtonElement