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
          <Features Icon={MdToys} text="Brincadeira Eurística" />
          <Features Icon={IoMdColorWand} text="Cantos da Brincadeira Faz-de-Conta" />
          <Features Icon={GiPalette} text="Canto Ateliê" />
          <Features Icon={FaRegLightbulb} text="Canto dos Materiais" />
          <Features
            Icon={FaFlask}
            text="Canto da Experiência e Culinário"
          />
          <Features Icon={GoBook} text="Literatura Infatil" />
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
            text="Crianças entre 3 e 7 anos, no contraturno escolar, podem frequentar a casa em horas avulsas ou períodos. Bebês (entre 1 ano) poodem participar de sessões de brincadeiras eurísticas agendadas previamente e na companhia de 1 adulto "
          />
        </div>
      </Desktop>
      <Mobile>
        <Section
          title="O que é?"
          text="É uma casa de brincadeira , cultura e arte infantil. Inspirada na pedagogia Freinet, a casa é organizada em cantos nos quais a criança escolhe o quê, quando e como quer realizar suas atividades."
        />
        <Button>Conheça nossos espaços</Button>
        <Section
          title="Como funciona?"
          text="Crianças entre 3 e 7 anos, no contraturno escolar, podem frequentar a casa em horas avulsas ou períodos. Bebês (entre 1 ano) poodem participar de sessões de brincadeiras eurísticas agendadas previamente e na companhia de 1 adulto "
        />
        <Features Icon={MdToys} text="Brincadeira Eurística" />
        <Features Icon={IoMdColorWand} text="Cantos da Brincadeira Faz-de-Conta" />
        <Features Icon={GiPalette} text="Canto Ateliê" />
        <Features Icon={FaRegLightbulb} text="Canto dos Materiais" />
        <Features
          Icon={FaFlask}
          text="Canto da Experiência e Culinário"
        />
        <Features Icon={GoBook} text="Literatura Infatil" />
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
        <Form title="Entre em contato" />
        <Address
          title="Agende uma visita"
          street="Rua Exemplo, n° 123, Bairro"
          city="Cidade - SP"
          cep="00.000-000"
        />
      </div>
    </div>
  );
}

const headOne = ["Hora avulsa", "Período avulso (4horas)"];

const headTwo = ["4 horas/mês", "8 horas/mês", "12 horas/mês"];

const desenvolve = [
  "Senso etético",
  "Imaginação e criação",
  "Memória e atenção",
  "Liguagem e pensamento",
  "Autocontrole da conduta"
];

const amplia = [
  "Relações sociais",
  "Brincadeira",
  "Expressãodas emoções",
  "Aprendizagem",
  "Formação de vínculos afetivos"
];

const aprende = [
  "Fazer escolhas",
  "Socializar",
  "Pensar conscientemente",
  "Tomar decições",
  "Conhecer a cultura"
];

export default App;
