import styled from 'styled-components'

const Container = styled.div`
        width:70%;
        height: 60px;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:space-between;

        a{
            color: ${({ theme }) => theme.white};
            font-weight:500;
            font-size:20px;
        }

        a:hover{
            color: ${({ theme }) => theme.dark}
        }
`

const MainContainer = styled.div`
        width:70%;
        margin:auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        margin-top: 50px;
`

const BlogContainer = styled.div`
        margin-top: 50px;
        text-align:center;

        h1 {
            margin-top:10px;
            margin-bottom:40px;
        }

        .post-body{
            margin: auto;
            width: 400px;
            display: flex;
            flex-direction: column;
        }
`

export { Container, MainContainer, BlogContainer }