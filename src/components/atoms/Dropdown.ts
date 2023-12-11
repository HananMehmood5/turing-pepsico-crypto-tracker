import styled from "styled-components";

export const Dropdown = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.grey[300]};
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;

    &:focus, &:focus-visible, &:hover {
        border-color: ${({theme}) => theme.colors.primary[900]};
    }
`;