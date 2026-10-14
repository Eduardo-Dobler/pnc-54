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

## Trocar integrantes

Edite `integrantes` em `data.js`. Substitua `nome`, `cargo`, `area` e `bio`.

Para uma foto individual:

1. Coloque a foto na pasta `assets`, com um nome sem espaços, por exemplo `integrante-lucas.jpg`.
2. Troque o valor de `avatar` para `assets/integrante-lucas.jpg`.
3. Use `x: '50%'` e `y: '50%'`.
4. Para esse perfil, acrescente `individual: true` ao objeto. O site ajusta automaticamente o enquadramento de fotos individuais.

As oito fotos iniciais mostram os Poupançudos da CAIXA a partir de uma imagem da coleção. Nomes e cargos são provisórios e não descrevem pessoas reais. A página informa esse caráter demonstrativo.

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
- Foto dos oito Poupançudos: https://www.escorregaopreco.com.br/ofertas/shopee/7340228 — imagem da oferta Shopee. Os personagens pertencem à CAIXA e são usados como fotos ilustrativas provisórias solicitadas pelo projeto. Não há vínculo ou apoio da CAIXA.
- Fotografias de ambientação: Unsplash, arquivos disponíveis em `assets`.
- Fonte Manrope: Google Fonts. Licença SIL Open Font License incluída em `assets/OFL-Manrope.txt`.
- Referência de organização: https://missao.org.br/ — navegação institucional e apresentação das ideias. A identidade visual e os textos deste site foram criados para o PNC.

Este partido é fictício e o site se destina a fins educacionais.
