import { styled } from "styled-components";

const BaseButton = styled.button`
    padding: 1rem 2rem;
    color: #ffffff;
    border-radius: 0.5rem;
    border: solid 2px transparent;
    font-weight: 600;
`;

export const Primary = styled(BaseButton)`
    background: ${({ disabled }) => (disabled ? "#bbbbbb" : "#541e4b")};
`;

export const Secondary = styled(BaseButton)`
    background: #ffffff;
    color: #541e4b;
    border: solid 2px #541e4b;
`;
