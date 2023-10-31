# Desafio Docker e Docker Compose usando Nginx como Proxy Reverso

Fala pessoal!

Este desafio me permitiu aplicar tudo o que aprendi sobre a utilização do Nginx como um proxy reverso. O objetivo principal aqui é configurar o Nginx para que, quando um usuário acesse nosso servidor, o Nginx faça uma chamada para nossa aplicação Node.js. E o que essa aplicação Node.js registra alguns produtos em nosso banco de dados MySQL na tabela "products". Isso é demais, não é?

Mas há mais! Quando a aplicação Node.js responder, queremos que o retorno seja uma página com a mensagem:

```html
<h1>Full Cycle Rocks!</h1>
<ul>
  <!-- Lista de produtos cadastrados no banco de dados -->
  <li>Produto 1 | SKU: 10001</li>
  <li>Produto 2 | SKU: 10002</li>
  <li>Produto 3 | SKU: 10003/li>
  <!-- E assim por diante -->
</ul>
```

## Pré-requisitos

Precisará ter o Docker e o Docker Compose instalados em sua máquina.

## Como Executar

1. Clone este repositório em sua máquina local.

2. Navegue até o diretório do projeto.

3. Agora vem a parte divertida. Basta executar o seguinte comando:

   ```bash
   docker-compose up -d
   ```

4. Com isso, todo o ambiente será criado e estará pronto para uso na porta 8080.

5. Acesse o Nginx em seu navegador ou use ferramentas como curl ou Postman para testar o aplicativo.

## Contribuição

Este é um desafio de programação usando Docker e Docker Compose em com Node e MySQL e sua contribuição é muito bem-vinda! Sinta-se à vontade para criar um fork deste repositório.