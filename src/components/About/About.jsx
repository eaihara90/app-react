import React from 'react';
import { AboutStyled } from './styles';

export const About = () => {
    return (
        <AboutStyled>
            <main>
                <section>
                    <h2>Sobre</h2>
                </section>
                
                <section>
                    
                    <p>Meat | Aplicação que demonstra as features do Angular</p>
                    <p>MIT license</p>
                    <p>Copyright 2017 COD3R (<a href="http://www.cod3r.com.br">http://www.cod3r.com.br</a>)</p>
                    <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                    <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                    <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
                    <p>Imagens usadas na aplicação por <a href="http://www.freepik.com" target="_blank">freepik.com</a></p>
            
                </section>
            </main>
        </AboutStyled>
    );
}