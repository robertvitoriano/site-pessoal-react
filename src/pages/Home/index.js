import React from 'react';

import profilePic from './../../assets/img/profile-picture.jpg'
const Home = () =>{


    return (<div class="home-container">
        <div class="navbar">

            <ul>
                <li id="menu-divider"><a class="menu-link" href="/">Blog</a></li>
                <li><a class="menu-link" href="projects.html">Portifólio</a></li>
            </ul>

        </div>
        <section class="profile">
            <h1>Robert da Silva Vitoriano</h1>
            <div class="information">
                <div class="photo-wrapper">
                    <img src={profilePic} style={{height:"200px"}} alt=""/>
                </div>
                    <div class="about">
                        <p>Cursando o 3º Semestre de Análise e Desenvolvimento de Sistemas na fatec Sorocaba. Embora esteja
                        a relativamento pouco tempo me aventurando na área de T.I. Desenvolvi muitos interesses no ramo
                        ao longo desses 3 semestre. Sendo dentre estes os principais, aos quais foco meus estudos:
                    </p>
                        <div class="skills-list">
                            <ul class="skills">
                                <li>Fullstack(Node.Js e React)</li>
                                <li>Desenvolvimento de aplicativos(React Native)</li>
                                <li>Programação de Jogos(Unity)</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                        <p>Destas áreas citadas, a que mais me despertou paixão pelo estudo foi o <strong>desenvolvimento
                            fullstack</strong>. Ver todos os conhecimentos de um determinado conjunto de tecnologias se
                        encaixando para criar uma aplicação Web é uma experiência incrível. Tão incrível que todas as
                        vezes que me dedico a criar algo, sinto a mesma euforia que senti quando fiz meu primeiro server
                        local.</p>

                    </div>
                </div>

        </section>
              
       
               </div>
    
    )
}

export default Home;

