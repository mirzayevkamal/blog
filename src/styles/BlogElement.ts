import styled from 'styled-components';

const BlogElement = styled.div`
    width: 300px;
    height: 300px;
    border-radius:10px;
    overflow-wrap:break-word;
    overflow: hidden;
    padding-bottom: 15px;
    margin-bottom:20px;
    text-align:center;
    box-shadow: 0px 0px 14px 3px #2f364030;
    position:relative;

    &:hover .actions{
        display:block !important;
        cursor:pointer;
        transition: 0.8s ease-in-out;
    }

    a {
        text-align: center;
        font-weight: bold;
        padding-top:30px;
        font-size:20px;
        color: ${({ theme }) => theme.secondary}
    }

    p{
        text-align: center;
        margin-top:10px;
        color: gray;
    }

    img{
        width:300px;
    }

    .actions{
         display:none;
         position: absolute;
         top:10px;
         right:10px;
         transition: 0.8s ease-in-out;
     }

    .actions button{
        transition: 0.8s ease-in-out;
        border:none;
        cursor:pointer;
        background:red;
        padding:8px;
        display:flex;
        align-items:center;
        justify-content: center;
        border-radius:55px;
        color:white;
    }
`

export default BlogElement;