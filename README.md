# Café Aroma Serrano — Site institucional

Projeto acadêmico desenvolvido com HTML5, CSS3 e JavaScript puro.

## Como executar
1. Extraia a pasta `cafe-aroma-serrano`.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador. Se tiver a extensão Live Server, clique em **Go Live**.
4. Navegue pelo menu para testar as quatro páginas.

## Estrutura
- `index.html`: página inicial
- `sobre.html`: história, missão, visão e valores
- `produtos.html`: catálogo com filtro por categoria
- `contato.html`: formulário com validação
- `css/style.css`: folha de estilos compartilhada
- `js/script.js`: interações e validações compartilhadas
- `img/`: ilustrações SVG locais criadas para o projeto

## Funcionalidades
- Menu responsivo com botão hambúrguer em telas menores que 768 px.
- Link da página atual destacado automaticamente.
- Filtro de produtos por categoria.
- Ano do rodapé atualizado automaticamente.
- Validação de nome, e-mail e mensagem; feedback de erro e sucesso.
- Layout adaptável para celular, tablet e computador.

## Observações antes de apresentar
Os dados de telefone, e-mail, endereço, redes sociais, produtos e preços são ilustrativos e devem ser substituídos caso o docente forneça informações reais. O formulário demonstra a validação no navegador; não envia dados para um servidor, conforme o enunciado.

## Sugestão de relato (ajuste para refletir sua experiência real)
Durante o desenvolvimento, organizei o projeto em páginas HTML, uma folha CSS e um arquivo JavaScript compartilhado. Uma das dificuldades foi manter o mesmo menu e rodapé em todas as páginas, resolvida padronizando a estrutura HTML. Também implementei a validação do formulário para impedir campos vazios e e-mails inválidos. Para melhorar a navegação em celulares, utilizei media queries e um menu hambúrguer controlado por JavaScript. Por fim, testei os filtros dos produtos e a navegação entre as páginas.
