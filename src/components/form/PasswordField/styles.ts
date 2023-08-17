import { styled } from "styled-components";

export const Input = styled.input`
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #aaaaaa;
    flex: 1;
`;

export const Label = styled.label`
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
`;

export const Toggle = styled.button`
    background: #541e4b;
    border: none;
    padding: 0.25rem;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }
`;
