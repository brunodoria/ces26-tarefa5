# ces26-tarefa5

Utilizando React, Node e o módulo Express,
desenvolva uma aplicação com os seguintes
requisitos:

1)Através de um formulário, coleta o nome e
idade de uma pessoa.

2)O formulário verifica se a idade é um número e
é maior que 18 anos.

3)Os dados coletados são armazenados no
servidor em um arquivo no formato JSON.

4)Usando AJAX, implemente um botão que exibe
os dados coletados em uma tabela.

### Executando em ambiente local

O presente projeto foi criado com o *create-react-app* de modo que já é automaticamente inicializada uma estrutura básica de aplicação em react.

Após obter uma cópia do diretório deve-se executar:
```bash
npm i
```
para que as dependências sejam satisfeitas.

Em seguida, basta inicializar a aplicação em ambiente local com:
```bash
npm start
```

Acessando o http://localhost:3007 a página inicial poderá ser visualizada com o browser.

Neste caso, também é necessário utilizar um segundo terminal para rodar o servidor juntamente com esse frontend; executando o comando:
```bash
node server/index.js
```
O servidor se manterá funcionando na porta 3010 do local.

### Estrutura geral
A página inicial da aplicação mostra um formulário simples centralizado para que o usuário submenta um nome e uma idade.
Conforme especificado nos requsiitos existem validações do campo de idade, nos sentido de que sejam obtidos números maiores que 18.

Há um botão para submeter o formulário preenchido. No terminal do servidor é exibida uma mensagem de sucesso no recebimento dos dados. Tais infomrações são salvas no arquivo *server/example.json*.

Existe também um botão para que sejam exibidos o conjunto de dados existentes no servidor. É construída uma tabela, em *src/Components/Table.js*, para exibir as informações presentes no arquivo .json.

### Detalhes adicionais

Maiores informações sobre a atividade podem ser encontradas no relatório e no código comentado.
