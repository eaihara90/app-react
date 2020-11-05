import React from 'react';
import { HeaderStyled } from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Meat</li>
                    </Link>

                    <Link to="/restaurants">
                        <li>Restaurants</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </HeaderStyled>
    );
}

