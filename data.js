/* Edite este arquivo para trocar integrantes, textos, notícias e contatos.
   Sem fetch ou dependências: o site funciona abrindo index.html no computador. */
window.PNC_DATA = {
  partido: { nome: 'Partido Novo Caminho', sigla: 'PNC', numero: '54' },
  contatos: { email: '', whatsapp: '', instagram: '' },
  carrossel: { intervalo: 6000 },
  candidato: {"nome": "Nosso candidato", "cargo": "Candidato do PNC · 54", "area": "Partido Novo Caminho", "bio": "À frente da candidatura do projeto interdisciplinar, representa a proposta de unir o bem-estar da população ao desenvolvimento da cidade. Nome e apresentação pessoal serão atualizados pela equipe.", "avatar": "assets/people/candidato.webp", "miniatura": "assets/people/candidato-small.webp", "x": "50%", "y": "24%"},
  slides: [
    {
        "tag": "NOSSO CANDIDATO · PNC 54",
        "titulo": "O futuro pede<br>um <em>novo caminho.</em>",
        "texto": "Além dos rótulos, perto das pessoas. Nosso candidato representa o compromisso do PNC com qualidade de vida, oportunidades e desenvolvimento.",
        "botao": "Conheça nosso candidato",
        "destino": "#integrantes/candidato",
        "imagem": "assets/people/candidato.webp",
        "alt": "Retrato do candidato do PNC de terno, diante de bandeiras",
        "formato": "portrait",
        "x": "50%",
        "y": "24%",
        "detalhe": "CANDIDATO DO PARTIDO",
        "legenda": "Pessoas em primeiro lugar.<br>Um novo caminho para a cidade."
    },
    {
        "tag": "DIFERENTES OLHARES · UM MESMO PROPÓSITO",
        "titulo": "Uma equipe.<br><em>Muitos caminhos.</em>",
        "texto": "Pessoas que se unem para ouvir, debater e construir propostas. Conheça quem faz parte do Partido Novo Caminho.",
        "botao": "Conheça a equipe",
        "destino": "#integrantes",
        "imagem": "assets/people/equipe.webp",
        "alt": "Equipe do PNC reunida com a bandeira do partido",
        "formato": "team",
        "x": "50%",
        "y": "50%",
        "detalhe": "QUEM CONSTRÓI ESSE CAMINHO",
        "legenda": "Ideias ganham força<br>quando construídas em conjunto."
    },
    {
        "tag": "OPORTUNIDADES PARA O PRESENTE E O FUTURO",
        "titulo": "Desenvolver.<br>Incluir. <em>Avançar.</em>",
        "texto": "Indústria mais sustentável e escolas abertas à comunidade. Crescimento com qualificação, cultura e novas oportunidades.",
        "botao": "Explore nosso programa",
        "destino": "#sobre/programa",
        "imagem": "assets/people/integrante-01.webp",
        "alt": "Integrante do projeto com traje formal e distintivo do PNC",
        "formato": "portrait",
        "x": "50%",
        "y": "25%",
        "detalhe": "DESENVOLVIMENTO COM PROPÓSITO",
        "legenda": "Mais oportunidades.<br>Mais caminhos possíveis."
    }
],
  propostas: [
    { id: 'moradia', numero: '01', categoria: 'MORADIA', titulo: 'Um lugar seguro<br>para chamar de lar.', curto: 'Proteção e moradia digna para famílias em áreas de risco, com soluções construídas junto aos moradores.', icone: 'home', frase: 'Segurança também depende de onde fica a nova casa.', descricao: 'Combinar obras de proteção onde for possível permanecer com segurança e reassentamento onde o risco não puder ser controlado. A decisão deve contar com avaliação técnica e participação dos moradores.', acoes: ['Mapear os riscos e priorizar a gravidade e a vulnerabilidade das famílias.', 'Oferecer moradia temporária enquanto a solução definitiva é preparada.', 'Buscar novas moradias próximas de transporte, escolas, serviços e trabalho.', 'Recuperar e fiscalizar terrenos desocupados para evitar novas ocupações.'], financiamento: 'Combinar orçamento municipal com recursos estaduais e federais de habitação e prevenção de desastres. Os valores precisam ser definidos após levantamento técnico e análise do orçamento.', resultado: 'Acompanhar famílias atendidas, tempo de espera e acesso a serviços na nova moradia.', pergunta: 'Como conciliar a participação da família com a proteção de vidas diante de um risco comprovado?' },
    { id: 'transporte', numero: '02', categoria: 'MOBILIDADE', titulo: 'Menos barreiras.<br>Mais movimento.', curto: 'Transporte público mais barato, com expansão gradual da gratuidade e compromisso com a qualidade.', icone: 'bus', frase: 'A passagem acessível precisa vir junto de um ônibus que funciona.', descricao: 'Ampliar a gratuidade por etapas, com o objetivo de chegar à tarifa zero, condicionando cada expansão à existência de financiamento e capacidade de atendimento.', acoes: ['Começar pelos grupos para os quais a passagem mais dificulta o acesso a estudo, trabalho e serviços.', 'Publicar os custos do sistema e os pagamentos às operadoras.', 'Vincular os subsídios a metas de frequência, pontualidade, acessibilidade e atendimento aos bairros.', 'Planejar reforço da frota quando a demanda aumentar.'], financiamento: 'Criar previsão permanente no orçamento municipal, com fonte de receita definida antes de ampliar o benefício.', resultado: 'Medir tempo de espera, viagens realizadas, acessibilidade e custo por passageiro.', pergunta: 'Com recursos limitados, como equilibrar descontos, gratuidade e melhoria das linhas?' },
    { id: 'saneamento', numero: '03', categoria: 'SANEAMENTO', titulo: 'Dignidade começa<br>pelo básico.', curto: 'Água, coleta e tratamento de esgoto nos bairros menos atendidos, com acesso à tarifa social.', icone: 'drop', frase: 'Uma rede só cumpre sua função quando as famílias conseguem utilizá-la.', descricao: 'Estabelecer um plano de expansão que priorize necessidade social, risco à saúde e impacto ambiental, com critérios públicos para escolher as primeiras obras.', acoes: ['Divulgar regiões sem atendimento adequado e o cronograma de expansão.', 'Garantir que a ampliação da coleta venha acompanhada de tratamento do esgoto.', 'Prever apoio à ligação das casas de famílias de baixa renda à rede.', 'Facilitar o acesso à tarifa social de água e esgoto.'], financiamento: 'Combinar investimentos do prestador do serviço, recursos públicos e financiamentos para infraestrutura, com metas e fiscalização.', resultado: 'Acompanhar cobertura, ligações realizadas, tratamento do esgoto e alcance da tarifa social.', pergunta: 'Como priorizar bairros de maior necessidade quando a obra custa mais por residência?' },
    { id: 'industria', numero: '04', categoria: 'DESENVOLVIMENTO', titulo: 'Uma indústria forte.<br>Um futuro sustentável.', curto: 'Modernização industrial com metas ambientais, qualificação e proteção dos trabalhadores.', icone: 'factory', frase: 'Apoio público precisa produzir retorno demonstrável para a sociedade.', descricao: 'Oferecer apoio à modernização industrial mediante compromissos ambientais e sociais verificáveis. Crescimento econômico e responsabilidade com quem trabalha devem caminhar juntos.', acoes: ['Apoiar eficiência no uso de energia e água, reaproveitamento de materiais e redução de emissões.', 'Exigir metas proporcionais ao apoio recebido, com prazos e resultados públicos.', 'Prever qualificação durante a jornada e negociação sobre mudanças nas funções.', 'Estabelecer suspensão do benefício ou devolução proporcional de recursos em caso de descumprimento.'], financiamento: 'Combinar participação financeira das empresas, crédito para modernização e apoio municipal limitado à capacidade do município.', resultado: 'Verificar redução do consumo e das emissões, trabalhadores qualificados e cumprimento das contrapartidas.', pergunta: 'Quais compromissos de trabalho, qualificação e redução da poluição devem acompanhar cada apoio?' },
    { id: 'educacao', numero: '05', categoria: 'EDUCAÇÃO & CULTURA', titulo: 'Escolas abertas.<br>Possibilidades também.', curto: 'Esporte, cultura e tecnologia nas escolas, ampliando oportunidades para a comunidade.', icone: 'book', frase: 'Abrir a escola exige equipe, estrutura e cuidado com as aulas regulares.', descricao: 'Começar em escolas de bairros com poucas opções gratuitas e ampliar o programa conforme a participação e os resultados.', acoes: ['Escolher esporte, música, teatro, informática e oficinas junto a estudantes e moradores.', 'Contratar ou remunerar profissionais, incluindo limpeza e segurança.', 'Garantir acessibilidade, materiais e manutenção.', 'Articular com a rede de ensino e buscar acordo com o governo estadual quando necessário.'], financiamento: 'Utilizar recursos municipais de educação, cultura e esporte conforme a finalidade de cada despesa, além de parcerias com instituições de formação.', resultado: 'Acompanhar participação, diversidade de atividades, condições de funcionamento e impacto sobre o uso da escola.', pergunta: 'Como ampliar o uso comunitário sem sobrecarregar os profissionais nem prejudicar as aulas?' }
  ],
  principios: [
    { titulo: 'Pessoas em primeiro lugar', texto: 'Priorizar a dignidade, os direitos e o acesso a serviços, especialmente onde a necessidade é maior.', icone: 'people' },
    { titulo: 'Evidências e resultados', texto: 'Escolher soluções por seus efeitos concretos, ouvir avaliações técnicas e corrigir o que não funcionar.', icone: 'chart' },
    { titulo: 'Desenvolvimento responsável', texto: 'Criar oportunidades com qualificação, inovação e compromissos ambientais e sociais verificáveis.', icone: 'factory' },
    { titulo: 'Transparência e participação', texto: 'Publicar custos, critérios e metas, incluindo os moradores na construção e no acompanhamento das decisões.', icone: 'dialogue' }
  ],
  integrantes: [
    {
        "nome": "Integrante 01",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-01.webp",
        "miniatura": "assets/people/integrante-01-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 02",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-02.webp",
        "miniatura": "assets/people/integrante-02-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 03",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-03.webp",
        "miniatura": "assets/people/integrante-03-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 04",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-04.webp",
        "miniatura": "assets/people/integrante-04-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 05",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-05.webp",
        "miniatura": "assets/people/integrante-05-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 06",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-06.webp",
        "miniatura": "assets/people/integrante-06-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 07",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-07.webp",
        "miniatura": "assets/people/integrante-07-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 08",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-08.webp",
        "miniatura": "assets/people/integrante-08-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 09",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-09.webp",
        "miniatura": "assets/people/integrante-09-small.webp",
        "x": "50%",
        "y": "20%"
    },
    {
        "nome": "Integrante 10",
        "cargo": "Integrante do PNC",
        "area": "Equipe do projeto",
        "bio": "Integrante da equipe do Partido Novo Caminho. O nome, a função e a apresentação pessoal serão incluídos após a confirmação da equipe.",
        "avatar": "assets/people/integrante-10.webp",
        "miniatura": "assets/people/integrante-10-small.webp",
        "x": "50%",
        "y": "20%"
    }
],
  noticias: [
    { id: 'programa', categoria: 'Propostas', titulo: 'Cinco frentes. Um compromisso com a cidade.', resumo: 'Conheça as prioridades que conectam qualidade de vida e desenvolvimento no programa do PNC.', imagem: 'assets/cidade.jpg', alt: 'Vista de edifícios e áreas verdes em uma cidade', leitura: '3 min', destaque: true, paragrafos: ['O programa municipal do PNC se organiza em cinco frentes: moradia segura, transporte acessível, saneamento, modernização industrial e escolas abertas à comunidade.', 'O que une essas propostas é a preocupação com a vida nos bairros e com o retorno social dos investimentos. Cada programa deve ter financiamento definido, critérios públicos, metas e acompanhamento.', 'As propostas são um ponto de partida para o debate interdisciplinar. Custos e cronogramas dependem de levantamento técnico e do orçamento disponível.'], proposta: 'moradia' },
    { id: 'escolas', categoria: 'Educação', titulo: 'Quando a escola abre, a comunidade ganha caminhos.', resumo: 'Esporte, cultura e tecnologia podem ampliar o uso de espaços que já fazem parte dos bairros.', imagem: 'assets/educacao.jpg', alt: 'Estudantes em um ambiente de aprendizado', leitura: '2 min', paragrafos: ['O PNC propõe um programa de atividades em escolas de bairros com poucas opções gratuitas. As oficinas devem ser escolhidas com estudantes e moradores.', 'Abrir o prédio exige profissionais, limpeza, segurança, acessibilidade, materiais e manutenção. O programa deve ter estrutura própria para preservar as aulas e evitar sobrecarga da equipe escolar.', 'A expansão precisa considerar a participação e os resultados. Nas escolas estaduais, a execução depende de articulação com o governo estadual.'], proposta: 'educacao' },
    { id: 'visao', categoria: 'O partido', titulo: 'Além dos rótulos: como o PNC avalia uma proposta.', resumo: 'Ouvir, planejar, executar e avaliar. Uma forma de pensar a política a partir de problemas concretos.', imagem: 'assets/comunidade.jpg', alt: 'Grupo de jovens reunidos ao ar livre', leitura: '2 min', paragrafos: ['O Partido Novo Caminho busca soluções que beneficiem a população e favoreçam o desenvolvimento, sem se limitar à divisão habitual entre esquerda e direita.', 'Para avaliar uma proposta, perguntamos quem será atendido, qual problema será resolvido, quanto custará, como será financiada e quais resultados poderão ser acompanhados.', 'Participação, dignidade, responsabilidade ambiental e transparência são os critérios que orientam esse caminho.'] },
    { id: 'transporte', categoria: 'Propostas', titulo: 'Transporte acessível também precisa de qualidade.', resumo: 'A proposta de gratuidade por etapas depende de financiamento, frota e metas de atendimento.', imagem: 'assets/cidade.jpg', alt: 'Paisagem urbana com ruas e edifícios', leitura: '2 min', paragrafos: ['A passagem pesa no acesso ao trabalho, ao estudo e aos serviços. Por isso, o PNC defende transporte mais barato e a expansão gradual da gratuidade, com o objetivo de chegar à tarifa zero.', 'Cada etapa deve ter fonte de financiamento definida e capacidade de atendimento. Os subsídios precisam estar vinculados à frequência, à pontualidade, à acessibilidade e à cobertura dos bairros.', 'A proposta inclui publicar os custos do sistema e planejar o reforço da frota quando a procura aumentar.'], proposta: 'transporte' },
    { id: 'industria', categoria: 'Desenvolvimento', titulo: 'Modernizar a indústria com retorno para a sociedade.', resumo: 'Eficiência, qualificação e contrapartidas verificáveis precisam acompanhar o apoio público.', imagem: 'assets/cidade.jpg', alt: 'Edifícios em uma área urbana', leitura: '2 min', paragrafos: ['O PNC propõe apoiar a modernização industrial com compromissos ambientais e sociais verificáveis. A prioridade é reduzir consumo de energia e água, reaproveitar materiais e diminuir emissões.', 'O benefício deve exigir metas proporcionais, prazos e divulgação dos resultados. A qualificação durante a jornada e a negociação sobre mudanças nas funções também fazem parte da proposta.', 'O descumprimento deve gerar consequências, como suspensão do benefício ou devolução proporcional de recursos.'], proposta: 'industria' }
  ]
};
