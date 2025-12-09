import { Aluno, DANILO, EMANNUEL, IAD, LUIS } from "./alunos"

export interface Sinal {
    nome: string,
    descricao: string,
    categoria: string,
    link: string,
    aluno: Aluno,
    disciplina?: string
}

export const SINAIS: Sinal[] = [
    {
        nome: "FrontEnd",
        descricao: "É a parte do site ou aplicativo que você vê. Tudo o que aparece na tela: cores, botões, textos, imagens e menus.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/TlsT8AcylKk?si=v3HxHX2tQUC4pOpM",
        aluno: EMANNUEL
    },
    {
        nome: "BackEnd",
        descricao: "É a parte que fica por trás do sistema, que o usuário não vê. Ele cuida das regras, cálculos, verificações, segurança e comunicação com o banco de dados.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/0FLxOfJemlM?si=mwnhLh5oz9lAv6rY",
        aluno: EMANNUEL
    },
    {
        nome: "Fullstack",
        descricao: "É o profissional que trabalha tanto no frontend quanto no backend. Ou seja, mexe em tudo: tela, regras, servidor e banco de dados.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/hH0ZWOB6frw?si=U1qK93vA2VEIa_xD",
        aluno: EMANNUEL
    },
    {
        nome: "Banco de Dados",
        descricao: "É um lugar onde as informações são armazenadas e organizadas. Exemplo: dados de usuários, produtos, mensagens, pagamentos.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/FNu9wk1f3E0?si=AHBoLo32ozCOA11o",
        aluno: EMANNUEL
    },
    {
        nome: "GitHub",
        descricao: "É uma plataforma usada para guardar códigos, trabalhar em equipe e controlar versões. Serve para programadores salvarem seus projetos na nuvem e colaborarem com outras pessoas. É como um “Google Drive” de códigos.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/JyGTgAlapM8?si=gjvLnCVlsybjYshI",
        aluno: EMANNUEL
    },
    {
        nome: "Software",
        descricao: "Software é o conjunto de programas e instruções que dizem ao computador o que fazer.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/uqBWpTV6mO8?si=SROlsqJwSqBow8Kk",
        aluno: DANILO
    },
    {
        nome: "Hardware",
        descricao: "Hardware é a parte física do computador.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/5uAVbA-B86A?si=MyyOA3nvBPjCwJ5D",
        aluno: DANILO
    },
    {
        nome: "Informação",
        descricao: "Informação é um conjunto de dados organizados e com significado.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/XE0KTdaeCaQ?si=94Go36eV7s__epkw",
        aluno: DANILO
    },
    {
        nome: "Programação",
        descricao: "Programação é o processo de escrever instruções para que o computador faça alguma tarefa.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/jppfZhVtNsg?si=pQsnaiJGav9xkIVG",
        aluno: DANILO
    },
    {
        nome: "Dados",
        descricao: "Dados são valores brutos, isolados, sem interpretação.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/qh-clddc-qE?si=kW_TbZaHRQIIGsBq",
        aluno: DANILO
    },
    {
        nome: "Redes de Computadores",
        descricao: "Conjunto de dispositivos conectados entre si que se comunicam por meio de protocolos, permitindo a troca de informações e o compartilhamento de recursos e serviços.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/zWDUzMFNL34?si=pzxQN3KraCj3N2NB",
        aluno: LUIS
    },
    {
        nome: "Servidor",
        descricao: "Computador ou sistema dedicado que armazena, gerencia e disponibiliza dados, aplicações ou serviços para outros dispositivos em uma rede, de forma contínua.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/kZpks1qllas?si=RtyqABmWTVFdGOrW",
        aluno: LUIS
    },
    {
        nome: "Sistema Operacional",
        descricao: "Software fundamental responsável por gerenciar todos os recursos do computador, controlar o hardware e oferecer uma interface para a execução de programas e interação do usuário.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/ZHhGqBGt8kI?si=CY9umFscufyBwP2r",
        aluno: LUIS
    },
    {
        nome: "Criptografia",
        descricao: "Técnica de segurança que transforma dados legíveis em informações cifradas, protegendo-as contra acesso ou leitura não autorizada, usando chaves e algoritmos.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/OOgF1skPKzk?si=QEMjviDiVx5KeL6D",
        aluno: LUIS
    },
    {
        nome: "Nuvem",
        descricao: "Modelo que permite acessar, pela internet, recursos computacionais como armazenamento, processamento, bancos de dados e softwares, sem depender de uma máquina local específica.",
        categoria: "Termos Comuns",
        link: "https://www.youtube.com/embed/K7x4xtZ4FcM?si=rEw4I08QO6pf-r_Z",
        aluno: LUIS
    },
    {
        nome: "Tabela",
        descricao: "É uma estrutura usada para organizar informações. Ela tem colunas e linhas que ajudam a deixar os dados arrumados e fáceis de entender.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/MHHFPm3LyTo?si=x4hObqBgl_IjBfEy",
        aluno: IAD,
        disciplina: "Banco de Dados"
    },
    {
        nome: "Atributo",
        descricao: "É a característica de algo, representada por uma coluna da tabela. Cada coluna indica um tipo de informação sobre os registros, como nome, idade ou data.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/_vPWb3ELi_Y?si=dZ3Sj9nR5ecDhmAJ",
        aluno: IAD,
        disciplina: "Banco de Dados"
    },
    {
        nome: "Registro",
        descricao: "É uma linha completa da tabela. Ele reúne todas as informações sobre um mesmo item, formando um conjunto de dados relacionados.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/azVWu-wi9pI?si=PHb8BjXPq97s5Bp3",
        aluno: IAD,
        disciplina: "Banco de Dados"
    },
    {
        nome: "Chave Primária/ID",
        descricao: "É um identificador único usado para diferenciar um registro dos outros. Funciona como um “código exclusivo” que garante que nenhum item seja confundido com outro.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/Ev38SjRH0FA?si=NZBiLYjU9ZyHhjUC",
        aluno: IAD,
        disciplina: "Banco de Dados"
    },
    {
        nome: "Consulta/Query",
        descricao: "É um pedido feito ao banco de dados para procurar, filtrar ou mostrar informações. As consultas são usadas para encontrar exatamente o que precisa dentro da base de dados.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/Ut-R2SUYjRw?si=6v5wXUoEKqa5pQ05",
        aluno: IAD,
        disciplina: "Banco de Dados"
    },
]

