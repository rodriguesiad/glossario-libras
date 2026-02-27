import { Aluno, DANILO, DAVID, EMANNUEL, ERICK, HITALO, IAD, LUIS, MAYSA } from "./alunos"

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
    {
        nome: "Algoritmo",
        descricao: "Conjunto de regras ou instruções que define como a IA aprende, processa dados e toma decisões.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/uerR6s7ESnY?si=FQ0tLgDGkAG70AVG",
        aluno: ERICK,
        disciplina: "Inteligência Artificial"
    },
    {
        nome: "Processamento",
        descricao: "Conjunto de operações matemáticas usadas pela IA para analisar dados e aprender padrões.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/3O3Z1KuiYJ8?si=uistSnTvPJ1coR2X",
        aluno: ERICK,
        disciplina: "Inteligência Artificial"
    },
    {
        nome: "Treinar",
        descricao: "Etapa em que o modelo ajusta seus parâmetros a partir de dados para aprender a realizar uma tarefa.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/sfDtWP8LtfM?si=M-1KyYCb4t5SWebM",
        aluno: ERICK,
        disciplina: "Inteligência Artificial"
    },
    {
        nome: "Placa de Video",
        descricao: "Hardware especializado que executa milhares de cálculos em paralelo, acelerando o treinamento de modelos de IA.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/QTJl1UFurY0?si=Qzi_FQWCKCJFW2EK",
        aluno: ERICK,
        disciplina: "Inteligência Artificial"
    },
    {
        nome: "Decisão",
        descricao: "Resultado gerado pela IA após analisar informações e selecionar a melhor ação ou resposta possível.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/M2sajewZ6eo?si=n3veZY_bUINfe6zN",
        aluno: ERICK,
        disciplina: "Inteligência Artificial"
    },
    {
        nome: "Hacker",
        descricao: "Pessoa com profundo domínio de sistemas computacionais, capaz de explorar, modificar ou criar soluções tecnológicas de maneiras não convencionais.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/ZyHk0NRwHuQ?si=MKE6NTuOW33JbyvS",
        aluno: HITALO,
        disciplina: "Segurança e Auditoria de Sistemas"
    },
    {
        nome: "VPN",
        descricao: "Tecnologia que cria uma conexão segura e criptografada entre o usuário e a rede, protegendo dados e ocultando a localização durante a navegação.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/w_Zkr6SDckI?si=1UyNYKIqm1LLaN2m",
        aluno: HITALO,
        disciplina: "Segurança e Auditoria de Sistemas"
    },
    {
        nome: "Firewall",
        descricao: "Sistema que controla e filtra o tráfego de rede para permitir comunicações seguras e bloquear acessos indesejados.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/L-HPyQ5A5nA?si=koJyCDMvSPyNtgan",
        aluno: HITALO,
        disciplina: "Segurança e Auditoria de Sistemas"
    },
    {
        nome: "Auditoria",
        descricao: "Processo de avaliar sistemas, controles e práticas de segurança para verificar conformidade, identificar falhas e garantir a integridade das operações de TI.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/cfkivuJEUvI?si=JUIlQLdzDf-dVaF2",
        aluno: HITALO,
        disciplina: "Segurança e Auditoria de Sistemas"
    },
    {
        nome: "Malware",
        descricao: "Software malicioso criado para invadir, danificar, explorar ou comprometer sistemas e dados.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/hJHYfuopq24?si=pUPGVkiPt0_HT9Ij",
        aluno: HITALO,
        disciplina: "Segurança e Auditoria de Sistemas"
    },
    {
        nome: "CRUD",
        descricao: "Acrônimo para Create, Read, Update e Delete, que representa as quatro operações fundamentais de manipulação de dados em sistemas de informação.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/ZdXHlFNMzP8?si=fkSOUTP5lWvnNt8C",
        aluno: MAYSA,
        disciplina: "Algoritmos e Programação"
    },
    {
        nome: "Variável",
        descricao: "Elemento utilizado para armazenar informações na memória do computador, podendo assumir diferentes valores durante a execução de um programa.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/tJ0T7iGGoZk?si=We0gOXnqNXDq_XWa",
        aluno: MAYSA,
        disciplina: "Algoritmos e Programação"
    },
    {
        nome: "Java",
        descricao: "Linguagem de programação orientada a objetos amplamente utilizada no desenvolvimento de aplicações web, mobile, desktop e sistemas corporativos.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/JnkzMjYMPag?si=QjjQXLvW7g4pcDWa",
        aluno: MAYSA,
        disciplina: "Algoritmos e Programação"
    },
    {
        nome: "Código-fonte",
        descricao: "Conjunto de instruções escritas por um programador em uma linguagem de programação. É a forma legível pelo ser humano que descreve o funcionamento de um software antes de ser convertido em código executável pelo computador.",
        categoria: "Disciplinas",
        link: "https://www.youtube.com/embed/jXYO7IiQkjk?si=_d5btoZnITilYHk7",
        aluno: MAYSA,
        disciplina: "Algoritmos e Programação"
    }
]