import styled from "styled-components";

const FooterElement = styled.footer`
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.white};
    height: 60px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    margin-top: 50px;
`

export default FooterElement