const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "OdnacumCode",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Mucando",
  role: "Engenheiro Informático",
  description: "Sou Engenheiro Informático formado pela Universidade Zambeze na Faculdade de Ciências e Tecnologia, curso de Licenciatura em" +
    " Engenharia Informática no ano de 2021! Com este curso, me " +
    "possibilita projectar, gerir, manter redes de" +
    " computadores simples e organizar a manutenção de " +
    "computadores e aparelhos informáticos; Fazer a " +
    "escolha de elementos dum sistema de comunicação," +
    " análise e manutenção de sistemas" +
    " informáticos e de transmissão de dados numa " +
    "organização.",
  resume: "https://drive.google.com/file/d/1Fq9mVzzhDCgpkpj-HFqwQsOJKaTMS3ks/view?usp=sharing",
  social: {
    linkedin:
      "https://www.linkedin.com/in/l%C3%A1zaro-m%C3%A1rio-mucando-98a381222",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Forúm de discussão",
    description:
      "Desenvolvi a App para a empresa LinkTech, para o uso interno do seu pessoal no que tange a descussão de conteúdos",
    liguagens: ["Codeigniter", "JavaScript", "MySql","PHP"],
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/chat/",
  },
  {
    name: "Sistema de COVID-19 da Universidade Zambeze",
    description:
      "Desenvolvi a App para a Universidade Zambeze," +
      " para o registo e controlo de casos de COVID-19!",
    liguagens: ["Codeigniter", "JavaScript", "MySql", "CSS","PHP"],
    sourceCode: "#",
    livePreview: "https://covid19.uzcetic.ac.mz/",
  },
  {
    name: "QUIZ",
    description:
      "Desenvolvi a App para a LinkTech, a aplicação consome dados(Perguntas e respostas) de uma API Restfull",
    liguagens: ["HTML", "JavaScript", "CSS", "API"],
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/Quiz_quiz/",
  },
  {
    name: "Aprender e Jogar",
    description: "Aplicação Mobile Desenvolvida para a empresa LinkTech que consome dados de uma API",
    liguagens: "Flutter",
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/jogaraprender.apk",
  },
  {
    name: "API Springboot Restfull",
    description: "Desenvolvi em java Spring boot, onde lista paises(GET), adiciona(POST), remove(DELETE) e atualiza(PATCH,PUT)",
    liguagens: ["PHP", "Codeigniter"],
    sourceCode: "https://github.com/Mucando/Backend_Developer_Challenge.git",
    livePreview:
      "https://backend-dev-challenge.herokuapp.com/api/v1/paises/listarpaises",
  },
  {
    name: "API Quiz Restfull",
    description: "Desenvolvi em Codeingiter para para fornecer dados como perguntas, respostas de múltiplas escolhas, ",
    liguagens: ["Java", "Spring boot"],
    sourceCode: "#",
    livePreview:
      "#",
  },
];

const skills = [
  "Angular",
  "CI/Codeigniter",
  "C++",
  "CSS",
  "Flutter",
  "Git",
  "GitHub",
  "HTML",
  "Ionic",
  "Java",
  "JavaScript",
  "Office Microsoft",
  "Oracle database",
  "PHP","Python",
  "React","Montagem e Reparação de computadores","Instalação de redes de comunicação"
];

const contact = [
  {
    // email is optional - if left empty Contact section won't show up
    id:1,
    email: "mucando@hotmail.com",
    phone: "+258845457821",
    morada: "Moçambique, Sofala, Beira, 6º Bairro Esturro",
  },
];

export { header, about, projects, skills, contact};
