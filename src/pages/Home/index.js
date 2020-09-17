import React from "react";
import Header from "./../../components/Header";
import Footer from './../../components/Footer'
import profilePic from "./../../assets/img/Mask Group 1.png";
const Home = ({match,history}) => {
  return (
    <div>
      <Header match={match} history={history}></Header>
      <section class="home-container container">
        <h1>Olá!<br/> me chamo Robert. Seja bem-vindo(a) ao meu portifólio.</h1>
        <div class="information">
          <div class="photo-wrapper">
            <img src={profilePic} style={{ height: "200px" }} alt="" />
          </div>
          <div class="about">
            <p>
              Cursando o 4º Semestre de Análise e Desenvolvimento de Sistemas na
              fatec Sorocaba. Embora esteja a relativamento pouco tempo me
              aventurando na área de T.I. Desenvolvi muitos interesses no ramo
              ao longo desses 4 semestres. Meus <strong>estudos atuais</strong> se concentram  em :
            </p>
            <div class="skills-list-container">
              <ul class="skills">
                <li>Fullstack(Node.Js e React)</li>
                <li>Desenvolvimento mobile(React Native)</li>
                <li>Programação de Jogos(Unity)</li>
              </ul>
            </div>
            <p>
              Destas áreas citadas, a que mais me despertou paixão pelo estudo
              foi o <strong>desenvolvimento fullstack</strong>. Ver todos os
              conhecimentos de um determinado conjunto de tecnologias se
              encaixando para criar uma <strong>aplicação Web</strong> é uma experiência
              incrível. Tão incrível que todas as vezes que me dedico a criar
              algo, sinto a mesma euforia que senti quando fiz meu primeiro
              server local.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
