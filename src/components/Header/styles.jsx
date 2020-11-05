import styled from 'styled-components';

export const HeaderStyled = styled.header `

    background-color: #ddd;
    padding: 0 10px;
    height: 5%;

    & nav {
        height: 100%;

        & ul {
            display: flex;
            align-items: center;
            height: 100%;
            
            & li {

                display: block;
                font-size: 20px;
                font-weight: bold;
                padding: 6px 15px;
                transition: all .2s ease-in-out;

                &:hover {
                    background-color: #c2c2c2;
                }
            }
        }
    }
`
