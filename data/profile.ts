import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Danillo Coelho Barbosa",
  role: "Desenvolvedor Backend Java Jr.",
  heroStack: "Java | Spring Boot | APIs REST | PostgreSQL",
  availability: "Disponível para oportunidades backend Java",
  email: "nillocoelho@gmail.com",
  phone: "+55 83 99830-6184",
  github: "https://github.com/Nillocoelho",
  linkedin: "https://www.linkedin.com/in/nillocoelho/",
  location: "Paraíba, Brasil",
  bio: "Desenvolvedor de software direcionando sua carreira para Backend Java Jr., com foco na construção de APIs REST, integração de sistemas e manutenção de aplicações corporativas. Tenho experiência com desenvolvimento de software, arquitetura em camadas, modelagem de dados e colaboração em times ágeis.",
  about:
    "Atuo no desenvolvimento e manutenção de sistemas corporativos e estou direcionando minha carreira para backend Java, com foco em APIs REST, regras de negócio, integração entre sistemas, arquitetura em camadas e qualidade de código.",
  focusAreas: [
    "Desenvolvimento de APIs REST com Java e Spring Boot em projetos próprios.",
    "Modelagem relacional e consultas SQL em PostgreSQL.",
    "Arquitetura em camadas com separação de responsabilidades.",
    "Integração de sistemas e manutenção evolutiva.",
  ],
  highlights: [
    { label: "Posicionamento", value: "Backend Java Jr." },
    { label: "Especialidade", value: "APIs REST" },
    { label: "Banco de dados", value: "PostgreSQL" },
  ],
  workflow: [
    {
      title: "Análise do problema",
      description:
        "Entendimento de requisitos, definição de regras e desenho de contratos de API.",
    },
    {
      title: "Implementação",
      description:
        "Desenvolvimento em camadas com validações de domínio, tratamento de exceções e documentação.",
    },
    {
      title: "Qualidade e evolução",
      description:
        "Testes, revisão técnica e ajustes contínuos para manter estabilidade e facilidade de manutenção.",
    },
  ],
  technologies: [
    {
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Spring Web",
        "Spring Data JPA",
        "APIs REST",
        "Integração de Sistemas",
        "Arquitetura em Camadas",
      ],
    },
    {
      title: "Banco de Dados",
      items: [
        "PostgreSQL",
        "SQL",
        "Modelagem Relacional",
        "Consultas Otimizadas",
        "SQLite",
      ],
    },
    {
      title: "Ferramentas",
      items: [
        "Docker",
        "Git",
        "GitHub",
        "Azure DevOps",
        "Postman",
        "Swagger/OpenAPI",
      ],
    },
    {
      title: "Boas práticas",
      items: [
        "Clean Code",
        "SOLID",
        "DTOs",
        "Validações de domínio",
        "Tratamento de exceções",
        "Testes unitários",
        "Versionamento",
      ],
    },
    {
      title: "Frontend/Mobile",
      items: ["Angular", "TypeScript", "JavaScript", "Flutter", "Dart"],
    },
  ],
  projects: [
    {
      title: "API de Controle Financeiro",
      subtitle: "Projeto backend Java/Spring Boot (em desenvolvimento).",
      description:
        "API REST em desenvolvimento para controle financeiro pessoal, construída com Java e Spring Boot, com foco em arquitetura em camadas, persistência com PostgreSQL e evolução planejada para autenticação, documentação da API e testes automatizados.",
      highlights: [],
      implementedHighlights: [
        "Estrutura inicial em Spring Boot.",
        "Organização em camadas com controllers, services, repositories e DTOs.",
        "Modelagem das entidades principais.",
        "Persistência com Spring Data JPA e PostgreSQL.",
        "Endpoints iniciais para receitas e despesas.",
      ],
      nextSteps: [
        "Autenticação com JWT.",
        "Categorização de movimentações financeiras.",
        "Filtros por mês, categoria e status.",
        "Validações de regras de negócio.",
        "Documentação com Swagger/OpenAPI.",
        "Testes unitários com JUnit e Mockito.",
        "Configuração com Docker.",
      ],
      techs: [
        "Java",
        "Spring Boot",
        "Spring Web",
        "Spring Data JPA",
        "PostgreSQL",
      ],
      plannedTechs: ["JWT", "Swagger/OpenAPI", "Docker", "JUnit", "Mockito"],
      github: null,
      readme: null,
      apiDocs: null,
      demo: null,
      category: "Backend Java",
      featured: true,
    },
    {
      title: "FinanTech",
      subtitle: "Aplicativo mobile para gestão financeira offline-first.",
      description:
        "Aplicativo mobile de controle financeiro pessoal com funcionamento offline, persistência local em SQLite, filtros de despesas, totalizador mensal e notificações locais.",
      highlights: [
        "CRUD completo de despesas.",
        "Filtros por status e ordenação.",
        "Controle de contas pagas e em aberto.",
        "Totalizador mensal.",
        "Notificações locais.",
        "Persistência offline com SQLite.",
      ],
      techs: [
        "Flutter",
        "Dart",
        "SQLite",
        "SharedPreferences",
        "Local Notifications",
      ],
      github: "https://github.com/Nillocoelho/FinanTech",
      readme: "https://github.com/Nillocoelho/FinanTech#readme",
      apiDocs: null,
      demo: null,
      category: "Mobile / Offline-first",
      featured: false,
    },
  ],
  experiences: [
    {
      company: "Soft Performance",
      role: "Desenvolvedor de Software",
      period: "2025 — Atual",
      summary:
        "Atuação no desenvolvimento e manutenção de aplicações corporativas, com foco em evolução de funcionalidades, integração de dados, endpoints REST, sincronização de informações e colaboração com times de produto, QA e desenvolvimento.",
      highlights: [
        "Implementação e evolução de endpoints REST.",
        "Apoio em rotinas de sincronização de dados.",
        "Manutenção de funcionalidades em sistemas corporativos.",
        "Colaboração com testes, documentação técnica e análise de requisitos.",
        "Participação em fluxos de trabalho com Azure DevOps e sprints.",
      ],
    },
    {
      company: "ASSERT",
      role: "Estagiário em Desenvolvimento de Software",
      period: "2024 — 2025",
      summary:
        "Participação no desenvolvimento e manutenção evolutiva de sistemas internos, com contato com backend, frontend, versionamento, documentação e boas práticas de engenharia.",
      highlights: [
        "Apoio na manutenção de sistemas internos.",
        "Evolução de funcionalidades com acompanhamento técnico.",
        "Participação em ritos de time ágil.",
        "Uso de Git para versionamento.",
        "Apoio em documentação e testes.",
      ],
    },
  ],
};
