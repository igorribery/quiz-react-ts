import styled from "styled-components";

export const Container = styled.div`
    display: block;
    width: 100%;
    height: 40px;
    color: #FFF;
`;

export const QuestionOption = styled.div<{color: string}>`
    background-color: ${props => props.color};
    color: #FFF;
    border: 1px solid #FFF;
    border-radius: 10px;
    padding: 12px;
    margin: 20px 0;
    opacity: 0.8;
    transition: 0.4s;
    cursor: pointer;
    text-align: center;

    &:hover {
        opacity: 1.2;
    }
`;
