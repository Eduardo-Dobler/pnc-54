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

Os oito retratos da equipe seguem a ordem informada: Matheus Vanin (Presidente), Eduardo Dobler (Vice-Presidente), Ana Laura (Coordenadora de Campanha), Theresa Venzon (Especialista Técnica), Vinicius Petry (Assessor), Cristiano Luca (Pesquisador), Mateus Sjlender (Financiador) e Yasmin Guidini (Comunicadora).

Cada perfil tem uma frase de destaque no cartão e uma apresentação completa na janela de detalhes, redigidas a partir da função informada. Para editar, ajuste `nome`, `cargo`, `area`, `resumo` e `bio` na lista `integrantes` de `data.js`.

A foto coletiva aparece no carrossel e na apresentação da equipe. A versão atual, `assets/people/equipe-cavalo.webp`, tem o emblema de cavalo na bandeira; a antiga `equipe.webp` foi removida. A edição foi feita com a ferramenta nativa de imagem, preservando a composição da fotografia. As instruções completas estão em `image-edits/equipe-cavalo.txt`. Os retratos com bebê e na praia foram retirados da seção Integrantes conforme solicitado. As imagens são versões WebP otimizadas; miniaturas menores são usadas nos cartões. Os arquivos originais enviados não foram alterados.

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

- Logo: emblema de cavalo dourado, roxo e branco fornecido pelo usuário, em `assets/logo-pnc-cavalo.png`. O ícone da aba em `assets/favicon-cavalo.png` é derivado dessa imagem.
- Propostas: documento Word fornecido pelo usuário.
- Retratos do candidato, integrantes e foto coletiva: 12 imagens fornecidas pela equipe do projeto.
- Fotografias de ambientação: Unsplash, arquivos disponíveis em `assets`.
- Fonte Manrope: Google Fonts. Licença SIL Open Font License incluída em `assets/OFL-Manrope.txt`.
- Referência de organização: https://missao.org.br/ — navegação institucional e apresentação das ideias. A identidade visual e os textos deste site foram criados para o PNC.

Este partido é fictício e o site se destina a fins educacionais.

## App instalável para celular (PWA)

O app mantém as mesmas cinco abas, o carrossel e o layout responsivo do site, com ícone do cavalo e abertura em janela própria. Não é um APK nem uma publicação em loja.

- Android: abra o endereço HTTPS no Chrome e use **Instalar app PNC 54** no rodapé. Se a instalação automática não aparecer, procure **Instalar app** ou **Adicionar à tela inicial** no menu do navegador.
- iPhone: abra o endereço no Safari, toque em **Compartilhar → Adicionar à Tela de Início**. Ative **Abrir como App da Web**, caso apareça.
- Aguarde **Pronto para consultar sem internet** no rodapé antes de desconectar. A primeira preparação precisa de internet. O navegador pode remover dados offline para liberar espaço; nesse caso, abra online novamente.
- O modo offline inclui páginas, fotos, fontes e o Word. Links externos continuam dependendo de internet. O formulário continua apenas preparando a mensagem.
- Quando surgir **Atualizar app** no rodapé, salve ou copie qualquer mensagem em edição e toque para carregar a nova versão. A atualização não força recarregamentos enquanto você usa o app.
- Instalação e service worker exigem HTTPS (ou localhost para desenvolvimento), e não funcionam abrindo o HTML via `file://`. Restrições de autenticação da hospedagem continuam valendo no primeiro acesso.

Arquivos do app: `manifest.webmanifest`, `pwa.js`, `pwa.css`, `sw.js` e `assets/app/`. O manifesto usa caminhos relativos, incluindo instalação em subdiretórios.

Após qualquer alteração em HTML, CSS, JavaScript ou assets, execute `python3 scripts/build-offline.py` antes de publicar. Isso gera automaticamente uma nova versão do cache. Edite a lógica do service worker em `scripts/sw-template.js`, não em `sw.js`.

Verificação automatizada: `node --test tests/pwa.test.cjs` (Node 18+). Instalação real e comportamento visual devem ser conferidos em um celular após publicar.
