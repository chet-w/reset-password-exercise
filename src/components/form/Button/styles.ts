import { styled } from "styled-components";

const BaseButton = styled.button`
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.white};
    border-radius: 0.5rem;
    border: solid 2px transparent;
    font-weight: 600;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

    &:hover {
        filter: brightness(1.1);
    }
`;

export const Primary = styled(BaseButton)`
    background: ${({ disabled, theme }) =>
        disabled ? theme.grey : theme.primary};
`;

export const Secondary = styled(BaseButton)`
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primary};
    border: solid 2px ${({ theme }) => theme.primary};
`;
