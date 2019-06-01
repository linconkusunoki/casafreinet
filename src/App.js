import React from "react";
import "./App.css";
import { Mobile, Desktop } from "./components/responsive";
import { IoMdColorWand } from "react-icons/io";
import { FaRegLightbulb, FaFlask } from "react-icons/fa";
import { GiPalette } from "react-icons/gi";
import { MdToys } from "react-icons/md";
import { GoBook } from "react-icons/go";
import Boy from "./assets/img/tree-boy.png";
import Girl from "./assets/img/girl-reading.png";
import Features from "./components/Features";
import Button from "./components/Button";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import List from "./components/List";
import About from "./components/About";
import Table from "./components/Table";
import Form from "./components/Form";
import Address from "./components/Address";

function App() {
  return (
    <div className="App">
      <Header title="Casa Freinet" text="O melhor da infância mora aqui" />
      <Banner />
      <Desktop>
        <div className="Features">
          <Features Icon={MdToys} text="Brincadeira Heurística" />
          <Features
            Icon={IoMdColorWand}
            text="Cantos da Brincadeira Faz de conta"
          />
          <Features Icon={GiPalette} text="Canto Ateliê" />
          <Features Icon={FaRegLightbulb} text="Canto dos Materiais" />
          <Features Icon={FaFlask} text="Canto da Experiência e Culinário" />
          <Features Icon={GoBook} text="Literatura Infantil" />
        </div>
        <div className="Section">
          <Section
            image={Girl}
            alt="girl-reading"
            title="O que é?"
            text="É uma casa de brincadeira , cultura e arte infantil. Inspirada na pedagogia Freinet, a casa é organizada em cantos nos quais a criança escolhe o quê, quando e como quer realizar suas atividades."
          />
          <Section
            image={Boy}
            alt="tree-boy"
            title="Como funciona?"
            text="Crianças entre 3 e 7 anos, no contra turno escolar, podem frequentar a casa em horas avulsas ou períodos. Bebês (entre 1 ano) podem participar de sessões de brincadeiras heurísticas agendadas previamente e na companhia de 1 adulto."
          />
        </div>
      </Desktop>
      <Mobile>
        <Section
          title="O que é?"
          text="É uma casa de brincadeira, cultura e arte infantil. Inspirada na pedagogia Freinet, a casa é organizada em cantos nos quais a criança escolhe o quê, quando e como quer realizar suas atividades."
        />
        <Button>Conheça nossos espaços</Button>
        <Section
          title="Como funciona?"
          text="Crianças entre 3 e 7 anos, no contra turno escolar, podem frequentar a casa em horas avulsas ou períodos. Bebês (entre 1 ano) podem participar de sessões de brincadeiras heurísticas agendadas previamente e na companhia de 1 adulto."
        />
        <Features Icon={MdToys} text="Brincadeira Heurística" />
        <Features
          Icon={IoMdColorWand}
          text="Cantos da Brincadeira Faz de conta"
        />
        <Features Icon={GiPalette} text="Canto Ateliê" />
        <Features Icon={FaRegLightbulb} text="Canto dos Materiais" />
        <Features Icon={FaFlask} text="Canto da Experiência e Culinário" />
        <Features Icon={GoBook} text="Literatura Infantil" />
      </Mobile>
      <div className="List">
        <List title="Desenvolve" list={desenvolve} />
        <List title="Amplia" list={amplia} />
        <List title="Aprende" list={aprende} />
      </div>
      <About
        name="Karolyne Kusunoki"
        status="Idealizadora da Casa"
        text="É graduada em Pedagogia pela UNESP - Marília e especialista em Educação Infantil e Pedagogia Freinet. Tem pós-graduação em Educação Especial e é Mestre em Educação. Há 4 anos é professora de Educação Infantil e desenvolve a metodologia Freinet."
      />
      <Table title="Plano de Horas" body="table1" thead={headOne} />
      <Table title="Plano de Mensal" body="table2" thead={headTwo} />
      <div className="Footer">
        <Form url="https://usebasin.com/f/bc9cfe968616" title="Entre em contato" />
        <Address
          latitude="-22.1234094"
          longitude="-51.4140832"
          title="Agende uma visita"
          street="Rua Artur Whitaker"
          number="138"
          bairro="Jardim Campo Belo"
          city="Presidente Prudente"
          state="SP"
          cep="19.060-440"
        />
      </div>
    </div>
  );
}

const headOne = ["Hora avulsa", "Período avulso (4 horas)"];

const headTwo = ["4 horas/mês", "8 horas/mês", "12 horas/mês"];

const desenvolve = [
  "Senso ético",
  "Imaginação e criação",
  "Memória e atenção",
  "Linguagem e pensamento",
  "Autocontrole da conduta"
];

const amplia = [
  "Relações sociais",
  "Brincadeira",
  "Expressão das emoções",
  "Aprendizagem",
  "Formação de vínculos afetivos"
];

const aprende = [
  "Fazer escolhas",
  "Socializar",
  "Pensar conscientemente",
  "Tomar decisões",
  "Conhecer a cultura"
];

export default App;
