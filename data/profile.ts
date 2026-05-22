import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Danillo Coelho Barbosa",
  role: "Desenvolvedor Backend Java Jr.",
  heroStack: "Java | Spring Boot | APIs REST | PostgreSQL",
  email: "Nillocoelho@gmail.com",
  phone: "83 998306184",
  github: "https://github.com/Nillocoelho",
  linkedin: "https://www.linkedin.com/in/nillocoelho/",
  location: "Paraiba, Brasil",
  bio: "Desenvolvedor Backend Java Jr. com foco em aplicacoes corporativas, APIs REST e integracao de sistemas. Trabalho com arquitetura em camadas, Clean Code e melhoria continua em times ageis.",
  about:
    "Atuo no desenvolvimento e manutencao de sistemas backend com Java e Spring Boot, criando APIs REST robustas, integracoes entre servicos e rotinas de sincronizacao de dados. Tenho experiencia com PostgreSQL, testes, documentacao tecnica e colaboracao com times multidisciplinares para entregar solucoes confiaveis e escalaveis.",
  technologies: [
    {
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "APIs REST",
        "Microsservicos",
        "Integracao de Sistemas",
      ],
    },
    {
      title: "Banco de Dados",
      items: ["PostgreSQL", "SQL", "Modelagem Relacional", "Consultas Otimizadas"],
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
      title: "Boas praticas",
      items: ["Clean Code", "SOLID", "Arquitetura em Camadas", "Versionamento", "Testes"],
    },
  ],
  projects: [
    {
      title: "API REST para Controle Financeiro Pessoal",
      description:
        "API backend para gestao de receitas, despesas e categorias, com foco em organizacao financeira e regras de negocio claras.",
      highlights: [
        "Endpoints RESTful para CRUD financeiro",
        "Validacoes de negocio e tratamento de excecoes",
        "Documentacao de API para facilitar integracao",
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      github: "https://github.com/Nillocoelho",
      demo: "#",
    },
    {
      title: "Projetos Backend, APIs REST e Microsservicos",
      description:
        "Colecao de estudos e implementacoes praticas voltadas para arquitetura backend, comunicacao entre servicos e padroes de integracao.",
      highlights: [
        "Separacao por camadas e responsabilidade",
        "Boas praticas para evolucao e manutencao",
        "Foco em escalabilidade e observabilidade basica",
      ],
      stack: ["Java", "Spring Boot", "APIs REST", "Azure DevOps"],
      github: "https://github.com/Nillocoelho",
      demo: "#",
    },
  ],
  experiences: [
    {
      company: "Soft Performance",
      role: "Desenvolvedor de Software",
      period: "Experiencia Profissional",
      summary:
        "Participacao no desenvolvimento e manutencao de aplicacoes corporativas com foco em backend e integracao de dados.",
      highlights: [
        "Implementacao de melhorias em APIs REST",
        "Suporte a rotinas de sincronizacao e integracao",
        "Colaboracao em testes e documentacao tecnica",
      ],
    },
    {
      company: "ASSERT",
      role: "Estagiario em Desenvolvimento de Software",
      period: "Experiencia de Estagio",
      summary:
        "Atuacao no suporte ao ciclo de desenvolvimento, aprendendo boas praticas de engenharia, versionamento e entrega continua.",
      highlights: [
        "Apoio na manutencao de sistemas internos",
        "Evolucao de funcionalidades com supervisao tecnica",
        "Participacao em ritos e rotina de time agil",
      ],
    },
  ],
};
