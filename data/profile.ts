import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Danillo Coelho Barbosa",
  role: "Desenvolvedor Backend Java Jr.",
  heroStack: "Java | Spring Boot | APIs REST | PostgreSQL",
  availability: "Disponível para oportunidades backend Java",
  email: "Nillocoelho@gmail.com",
  phone: "83 998306184",
  github: "https://github.com/Nillocoelho",
  linkedin: "https://www.linkedin.com/in/nillocoelho/",
  location: "Paraíba, Brasil",
  bio: "Desenvolvedor Backend Java Jr. focado em sistemas corporativos, APIs REST e integração de dados. Trabalho com arquitetura em camadas, Clean Code e entregas consistentes em times ágeis.",
  about:
    "Atuo no desenvolvimento e na evolução de serviços backend com Java e Spring Boot, criando APIs confiáveis, documentadas e preparadas para manutenção contínua. Minha rotina envolve modelagem de dados, integração entre sistemas, testes e colaboração próxima com produto e equipe técnica.",
  focusAreas: [
    "Construção de APIs REST com foco em regras de negócio.",
    "Modelagem SQL e manutenção de dados em PostgreSQL.",
    "Integração entre sistemas e sincronização de informações.",
    "Padrões de código limpo e arquitetura em camadas.",
  ],
  highlights: [
    { label: "Foco principal", value: "Backend Java" },
    { label: "Especialidade", value: "APIs REST" },
    { label: "Banco de dados", value: "PostgreSQL" },
  ],
  workflow: [
    {
      title: "Descoberta técnica",
      description:
        "Mapeamento do problema, entendimento de requisitos e definição de contratos de API para reduzir retrabalho.",
    },
    {
      title: "Implementação robusta",
      description:
        "Desenvolvimento orientado a camadas, tratamento de exceções e validações de domínio para garantir previsibilidade.",
    },
    {
      title: "Qualidade e evolução",
      description:
        "Testes, documentação e melhoria contínua com foco em manutenção simples e escalabilidade progressiva.",
    },
  ],
  technologies: [
    {
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "APIs REST",
        "Microsserviços",
        "Integração de Sistemas",
      ],
    },
    {
      title: "Banco de Dados",
      items: [
        "PostgreSQL",
        "SQL",
        "Modelagem Relacional",
        "Consultas Otimizadas",
      ],
    },
    {
      title: "Ferramentas",
      items: ["Docker", "Git", "Azure DevOps", "Postman", "Swagger/OpenAPI"],
    },
    {
      title: "Frontend/Mobile",
      items: ["Angular", "TypeScript", "JavaScript", "Flutter", "Dart"],
    },
    {
      title: "Boas práticas",
      items: [
        "Clean Code",
        "SOLID",
        "Arquitetura em Camadas",
        "Versionamento",
        "Testes",
      ],
    },
  ],
  projects: [
    {
      title: "FinanTech",
      subtitle: "Aplicativo mobile para gestão de gastos pessoais.",
      description:
        "Aplicativo mobile de controle financeiro pessoal com funcionamento offline, persistência local em SQLite e experiência focada em organização de gastos mensais.",
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
      demo: null,
      category: "Mobile",
      featured: true,
    },
    {
      title: "IFteca_RAD",
      subtitle: "Plataforma full stack para reserva acadêmica.",
      description:
        "Sistema web full stack para gestão e reserva de salas acadêmicas, com autenticação, painel administrativo, APIs REST e validação automática de conflitos.",
      highlights: [
        "Autenticação e perfis de acesso.",
        "CRUD de salas com soft delete.",
        "Reserva com detecção de conflitos.",
        "Dashboard administrativo com KPIs.",
        "APIs REST com Django REST Framework.",
        "Notificações por e-mail.",
        "Docker e testes automatizados.",
      ],
      techs: [
        "Python",
        "Django",
        "Django REST Framework",
        "Docker",
        "SQLite/PostgreSQL",
        "Bootstrap",
        "Chart.js",
      ],
      github: "https://github.com/Nillocoelho/IFteca_RAD",
      demo: null,
      category: "Full Stack",
      featured: true,
    },
  ],
  experiences: [
    {
      company: "Soft Performance",
      role: "Desenvolvedor de Software",
      period: "Experiência Profissional",
      summary:
        "Atuação no desenvolvimento e na manutenção de aplicações corporativas, com foco em backend e integração de dados entre sistemas.",
      highlights: [
        "Implementação e evolução de endpoints REST.",
        "Suporte a rotinas de sincronização de dados.",
        "Colaboração em testes e documentação técnica.",
      ],
    },
    {
      company: "ASSERT",
      role: "Estagiário em Desenvolvimento de Software",
      period: "Experiência de Estágio",
      summary:
        "Participação no ciclo de desenvolvimento com foco em manutenção evolutiva, versionamento e boas práticas de engenharia.",
      highlights: [
        "Apoio na manutenção de sistemas internos.",
        "Evolução de funcionalidades com mentoria técnica.",
        "Participação ativa em ritos de time ágil.",
      ],
    },
  ],
};
