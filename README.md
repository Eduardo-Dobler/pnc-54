# Partido Novo Caminho — PNC 54

Site em HTML, CSS e JavaScript puro para um projeto interdisciplinar do SENAC.

## Abrir no computador

1. Extraia o ZIP inteiro.
2. Abra `index.html` em um navegador atualizado.
3. Mantenha `styles.css`, `data.js`, `app.js` e a pasta `assets` junto do HTML.

Não precisa instalar Node.js nem iniciar um servidor. Imagens, fonte e propostas em Word estão incluídas. Os links externos de créditos e de contato dependem de internet.

## Arquivos

| Arquivo | O que contém |
| --- | --- |
| `index.html` | Estrutura das cinco abas e formulário |
| `styles.css` | Glassmorphism, cores, responsividade e animações |
| `data.js` | Integrantes, propostas, princípios, notícias, destaques e contatos |
| `app.js` | Navegação, carrossel, modais, busca e preparação de mensagens |
| `assets/` | Logo, fotos, fonte, ícone e Word original |

Todos os arquivos do site ficam na raiz deste repositório. A pasta `assets/` contém as imagens, fontes e o documento original das propostas.

## Candidato, integrantes e imagens

A primeira foto enviada está em `assets/people/candidato.webp` e aparece na abertura do carrossel e no destaque da aba Integrantes. Edite `candidato` em `data.js` para acrescentar o nome e a apresentação pessoal.

Os dez demais retratos estão nos perfis `Integrante 01` a `Integrante 10`, na ordem dos anexos, excluindo a fotografia coletiva. Os nomes e as funções aguardam confirmação, sem atribuir biografias fictícias às fotos. Edite `nome`, `cargo`, `area` e `bio` na lista `integrantes`.

A foto coletiva aparece no carrossel e na apresentação da equipe. Todos os 12 anexos foram incorporados. As imagens são versões WebP otimizadas; miniaturas menores são usadas nos cartões. Os arquivos originais enviados não foram alterados.

Para trocar um retrato, ajuste `avatar` (imagem completa), `miniatura` (cartão), `x` e `y` (posição do enquadramento, em porcentagem). As fotos ficam em `assets/people/`.

## Carrossel e animações

- A troca automática começa ao abrir a página, com intervalo de 6 segundos, transição suave e barra de progresso. Ajuste `carrossel.intervalo` em `data.js`, em milissegundos.
- Setas, indicadores, teclado e deslize horizontal permitem navegação manual.
- A pausa manual e as pausas por ponteiro, foco, janela oculta, rolagem para fora do carrossel, outra aba e modal conservam o tempo restante.
- A preferência de movimento reduzido do sistema desativa a troca automática e as animações; as setas continuam disponíveis.
- Cartões e seções aparecem suavemente durante a rolagem. Modais, menus e botões têm transições discretas, com conteúdo acessível por teclado.

## Configurar contatos

Preencha apenas os canais verdadeiros no começo de `data.js`:

```js
contatos: {
  email: '',
  whatsapp: '', // número completo com país e DDD, somente dígitos
  instagram: '' // URL completa do perfil: https://www.instagram.com/SEU_PERFIL/
},
```

Enquanto esses campos estiverem vazios, a página mostra “Em breve · canal oficial”.

O formulário valida os campos e prepara uma mensagem que pode ser revisada, copiada ou baixada. Ele não envia nem armazena os dados. Com um e-mail oficial preenchido, também aparece “Abrir no e-mail”, para o próprio usuário enviar pelo aplicativo dele. Para envio direto pelo site, será necessário integrar um serviço ou backend.

## Editar conteúdo

- As cinco propostas foram adaptadas do Word fornecido. Cada proposta inclui ações, financiamento, acompanhamento e pergunta para o debate.
- A aba “Sobre” desenvolve a orientação informada: ir além da divisão esquerda/direita e unir bem-estar da população e desenvolvimento. Os princípios são uma redação inicial para revisão da equipe.
- As publicações são textos demonstrativos sobre o programa. Nenhuma delas anuncia conquistas, eventos ou resultados reais.
- Para criar novas notícias, adicione objetos na lista `noticias`; as categorias e a busca se atualizam automaticamente.
- Títulos de destaques e propostas aceitam apenas `<br>` e `<em>` para formatação. Os demais textos devem ser texto simples.
- A paleta está nas variáveis do início de `styles.css`.

## Navegação

As abas usam endereços com hash, por exemplo `index.html#integrantes` e `index.html#sobre/programa`, o que permite abrir o site localmente e usar o botão Voltar do navegador.

O carrossel possui controles, indicadores, pausa, teclado e gesto horizontal. A troca automática pausa quando o ponteiro ou o foco estão na área e respeita a preferência de movimento reduzido do sistema.

## Fontes e créditos

- Logo e propostas: anexos fornecidos pelo usuário.
- Retratos do candidato, integrantes e foto coletiva: 12 imagens fornecidas pela equipe do projeto.
- Fotografias de ambientação: Unsplash, arquivos disponíveis em `assets`.
- Fonte Manrope: Google Fonts. Licença SIL Open Font License incluída em `assets/OFL-Manrope.txt`.
- Referência de organização: https://missao.org.br/ — navegação institucional e apresentação das ideias. A identidade visual e os textos deste site foram criados para o PNC.

Este partido é fictício e o site se destina a fins educacionais.
