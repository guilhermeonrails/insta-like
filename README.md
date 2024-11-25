# Alura - Imersão back-end

Este é o repositório do front-end do projeto.

**IMPORTANTE:** É necessário ter o [Node.js](https://nodejs.org/) instalado em seu computador antes de executar os comandos de instalação e execução do projeto. Versão recomendada: v20.x.x.

## PASSO 1: Baixe o código do projeto:

### Opção 1 - Clonando o repositório para o seu perfil no GitHub

> Para utilizar essa opção é necessário ter o [Git](https://git-scm.com/downloads) instalado e configurado em seu computador. Caso não esteja instalado ou você não tenha certeza, prossiga com a **opção 2** e baixe o .zip do projeto.

1. Faça o **fork** do projeto clicando no botão **Fork** na parte superior direita da página;
2. Faça o **clone** do repositório para seu computador:
  - Clique no botão **<> Code** e copie o endereço remoto do repositório;
  - Abra o terminal, navegue até a pasta raiz onde deseja baixar o projeto e execute o comando `git clone <endereço remoto>`;
  - Você pode acessar a pasta do projeto direto pelo Visual Studio Code, clicando em File > Open Folder e selecionando a pasta do projeto.

### Opção 2 - Baixando um arquivo .zip

1. clique no botão **<> Code** e, em seguida, no botão **Download ZIP**;
2. uma pasta zipada será baixada para a pasta de downloads determinada pelo seu navegador;
3. descompacte os arquivos clicando no ícone da pasta zipada e transfira os arquivos para a pasta de projetos de sua preferência.


## PASSO 2: Instale o projeto:

### Opção 1 - Utilizando o terminal do Visual Studio Code

1. Abra a pasta do projeto no Visual Studio Code clicando em File > Open Folder e selecionando a pasta do projeto;
2. Clique em Terminal > New Terminal no menu superior do Visual Studio Code. O terminal deve abrir já direcionando para a pasta correta do projeto;
3. Execute o comando `npm install` e aguarde a finalização.

### Opção 2 - Utilizando outros terminais

1. Abra o terminal de sua preferência e navegue até a pasta do projeto, utilizando os comandos de navegação como `cd <pasta>`;
2. Com o prompt apontando para a raiz da pasta do projeto, execute o comando `npm install` e aguarde a finalização.

## PASSO 3: Crie o arquivo `.env` com a variável de ambiente `API_URL`
1. Na raiz do projeto, crie um arquivo chamado `.env`;
2. Insira o seguinte conteúdo no arquivo, substituindo `<URL_DA_SUA_API>` pela URL correta da sua API:
   ```env
   API_URL=<URL_DA_SUA_API>
   ```
> Exemplo: Se sua API estiver em execução no endereço `http://localhost:3000`, o conteúdo do `.env` será:
> API_URL=http://localhost:3000

## PASSO 4: Execute o projeto para subir o servidor local:

Acesse o terminal (do Visual Studio Code ou outro), certifique-se que esteja exibindo a pasta correta do projeto e execute o comando `npm run dev`. O terminal deverá retornar:

```
> dev
> npx parcel --port 8000 index.html

Server running at http://localhost:8000
✨ Built in xxxms
```

O projeto estará disponível no endereço http://localhost:8000 e você poderá acessá-lo no navegador de sua preferência.
