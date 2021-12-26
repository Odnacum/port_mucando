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
    name: "Forum de discussão",
    description:
      "Desenvolvido para o uso na empresa LinkTech, para o uso interno do seu pessoal no que tange a descussão de conteudos",
    liguagens: ["Codeigniter", "JavaScript", "MySql"],
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/chat/",
  },
  {
    name: "Sistema de COVID-19 da Universidade Zambeze",
    description:
      "Desenvolvido para o uso na Universidade Zambeze, para o registo e controlo de casos de COVID-19!np",
    liguagens: ["Codeigniter", "JavaScript", "MySql", "CSS"],
    sourceCode: "#",
    livePreview: "https://covid19.uzcetic.ac.mz/",
  },
  {
    name: "QUIZ",
    description:
      "Desenvolvido para a empresa LinkTech, a aplicacao consome dados de um API Restfull",
    liguagens: ["HTML", "JavaScript", "CSS", "API"],
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/Quiz_quiz/",
  },
  {
    name: "Aprender e Jogar",
    description: "Aplicação Mobile Desenvolvido para a empresa LinkTech",
    liguagens: "Flutter",
    sourceCode: "#",
    livePreview: "https://jogaraprender.linktec.co.mz/jogaraprender.apk",
  },
  {
    name: "API Springboot",
    description: "Desenvolvida em java Spring boot",
    liguagens: ["Java", "Spring boot"],
    sourceCode: "https://github.com/Mucando/Backend_Developer_Challenge.git",
    livePreview:
      "https://backend-dev-challenge.herokuapp.com/api/v1/paises/listarpaises",
  },
];

const skills = [
  "Angular",
  "CI/Codeigniter",
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
  "PHP",
  "React",
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

export { header, about, projects, skills, contact };
