export interface IDataFaq {
    number: string;
    title: JSX.Element;
    content: string;
}

export const dataFaq: IDataFaq[] = [{
    number: '1.',
    title: <strong className="font-bold">Como participar do programa Corporate - Learn & Drive para empresas da FDC?</strong>,
    content: "Para participar do programa, é necessário realizar o cadastro da sua empresa e responder à avaliação de maturidade criada por especialistas da Fundação Dom Cabral. Após concluí-lo, você receberá o raio-x completo da empresa, dividido em 7 dimensões, sendo elas: Liderança & Pessoas, Gestão Estratégica dos Negócios, Marketing & Vendas, Finanças, Governança & Compliance, Inovação & Transformação Digital e Gestão Estratégica de Supply - com uma sugestão de trilha de desenvolvimento elaborada pela FDC especialmente para sua organização.",
}, {
    number: '2.',
    title: <strong className="font-bold">Quanto tempo leva para preencher o raio-x e obter os resultados da minha empresa?</strong>,
    content: "O raio-x leva cerca de 20 minutos para ser concluído. As questões contam com escalas de 0 a 10, dispensando respostas abertas e englobam as 7 dimensões de gestão. O resultado será exibido após o término do preenchimento, no próprio navegador do respondente. Vale ressaltar que o comparativo do raio-x é feito com base em métricas de grandes corporações nacionais e internacionais.",
}, {
    number: '3.',
    title: <strong className="font-bold">Quanto precisarei investir?</strong>,
    content: "O investimento varia de acordo com o número de módulos indicados ou selecionados, sendo 6 o mínimo e 12 o máximo, uma vez que trata-se de um programa sugerido especialmente para sua empresa, diante do resultado do raio-x, com mais de 220 módulos disponíveis para o Learn, além do Drive que conta com metodologia exclusiva da FDC para transposição para a prática. O valor será indicado após as etapas que sucedem o preenchimento do raio-x.",
}, {
    number: '4.',
    title: <strong className="font-bold">Qual é a modalidade do programa?</strong>,
    content: "O Corporate Learn & Drive opera na modalidade Blended Learning (módulos síncronos e assíncronos), oferecendo ainda mais flexibilidade aos executivos e colaboradores da empresa interessada.",
}, {
    number: '5.',
    title: <strong className="font-bold">É possível alterar a trilha sugerida pela FDC?</strong>,
    content: "Sim. A trilha sugerida é criada a partir das respostas fornecidas pela empresa no raio-x. A sugestão da FDC é fruto de centenas de combinações projetadas por nossos especialistas e professores após diversos estudos. Ainda assim, a FDC preza pela vontade do cliente e a empresa participante poderá adicionar ou excluir módulos à trilha de desenvolvimento sugerida ou ainda, formar sua própria trilha a partir das opções de módulos contempladas no Corporate Learn & Drive. Lembrando que o pilar Learn deve conter, no mínimo, 6 módulos, sendo recomendado que a trilha não ultrapasse 12 módulos.",
}, {
    number: '6.',
    title: <strong className="font-bold">Porque o programa se chama Corporate Learn & Drive?</strong>,
    content: "Por se tratar de um programa para empresas baseado principalmente em 2 pilares: o Learn (aprenda), composto por módulos prioritariamente assíncronos de até 3 horas cada que poderão ser consumidos no tempo do participante, e o Drive (direcione), que são 5 aulas síncronas de 4 horas cada, totalizando 20 horas e tem como objetivo transpor o conhecimento para a prática por meio de metodologia exclusiva da FDC.",
}]
