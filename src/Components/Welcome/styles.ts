import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    height: 100vh;
    margin: auto;
    max-width: 600px;
    font-family: 'Raleway', sans-serif;
    
    h1 {
        margin-top: 2rem;
    }

    h2 {
        font-weight: bold;
        color: #FFF;
    }

    p {
        color: #8435de;  
    }

    img {
        margin-top: 2rem;
        width: 100%;
    }
    button {
        margin-top: 10px;
        padding: 15px 25px;
        font-size: 18px;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        background: linear-gradient(90deg, rgba(132, 53, 222, 1) 0%, rgba(184, 84, 232, 1) 100%);
        
        &:hover {
            background: linear-gradient(90deg, rgba(184, 84, 232, 1) 0%, rgba(132, 53, 222, 1) 100%);
        }
    }
`;

