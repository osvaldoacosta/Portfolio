export const translations = {
  en: {
    nav: {
      main: "Main",
      home: "Home",
      services: "Services",
      contact: "Contact",
      theme: "Change Theme",
      language: "Ver em português",
    },
    profile: {
      role: "Full Stack Developer",
      languagesTitle: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced (C1)" },
      ],
      skillGroups: [
        { title: "Programming Languages", items: ["Java", "JavaScript/Typescript", "Python", "SQL"] },
        { title: "Frameworks and Libraries", items: ["React", "Next.js", "Express.js", "Spring Boot", "PostgreSQL", "Puppeteer"] },
        { title: "Extra", items: ["Git", "Docker", "CI/CD Knowledge", "HTML+CSS", "Linux"] },
      ],
      downloadCv: "Download CV",
    },
    hero: {
      headlineStart: "Hello, I'm Osvaldo, a ",
      headlineHighlight: "Full Stack",
      headlineEnd: " Developer",
      description: "I create scalable web applications using technologies like ReactJs, NextJs, Spring Boot, and Node.js. I build responsive UIs and secure backends with relational databases. My work is driven by a strong foundation in software architecture, performance optimization, and security best practices, ensuring efficient, scalable, and reliable applications.",
      contactMe: "Contact me",
      myServices: "My services",
    },
    services: {
      title: "My Services",
      description: "I offer a range of solutions tailored to meet your needs, from creating powerful web applications to documenting your software systems and automating repetitive tasks.",
      web: { title: "Web development", description: "Landing Pages, Blogs, etc" },
      docs: { title: "Software Documentation", description: "Document your codebase following the best practices" },
      automation: { title: "Task Automation", description: "I can automate your tasks using a bot that mimics human actions efficiently." },
    },
    contact: {
      title: "Contact Information",
      email: "Email",
    },
  },
  pt: {
    nav: {
      main: "Principal",
      home: "Início",
      services: "Serviços",
      contact: "Contato",
      theme: "Mudar tema",
      language: "View in English",
    },
    profile: {
      role: "Desenvolvedor Full Stack",
      languagesTitle: "Idiomas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado (C1)" },
      ],
      skillGroups: [
        { title: "Linguagens de Programação", items: ["Java", "JavaScript/Typescript", "Python", "SQL"] },
        { title: "Frameworks e Bibliotecas", items: ["React", "Next.js", "Express.js", "Spring Boot", "PostgreSQL", "Puppeteer"] },
        { title: "Extra", items: ["Git", "Docker", "Conhecimento em CI/CD", "HTML+CSS", "Linux"] },
      ],
      downloadCv: "Baixar currículo",
    },
    hero: {
      headlineStart: "Olá, eu sou o Osvaldo, desenvolvedor ",
      headlineHighlight: "Full Stack",
      headlineEnd: "",
      description: "Crio aplicações web escaláveis com tecnologias como ReactJs, NextJs, Spring Boot e Node.js. Desenvolvo interfaces responsivas e backends seguros com bancos de dados relacionais. Meu trabalho se apoia em uma base sólida de arquitetura de software, otimização de desempenho e boas práticas de segurança, garantindo aplicações eficientes, escaláveis e confiáveis.",
      contactMe: "Fale comigo",
      myServices: "Meus serviços",
    },
    services: {
      title: "Meus Serviços",
      description: "Ofereço soluções sob medida para as suas necessidades, desde a criação de aplicações web robustas até a documentação dos seus sistemas e a automação de tarefas repetitivas.",
      web: { title: "Desenvolvimento web", description: "Landing pages, blogs, etc." },
      docs: { title: "Documentação de software", description: "Documento o seu código seguindo as melhores práticas" },
      automation: { title: "Automação de tarefas", description: "Automatizo as suas tarefas com um bot que imita ações humanas de forma eficiente." },
    },
    contact: {
      title: "Informações de Contato",
      email: "E-mail",
    },
  },
};

export type Language = keyof typeof translations;
