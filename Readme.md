
# Startup FIAP - Gabriel Viana

Nesse repositório está presente todas as atividades referentes a Startup do curso de ADS.

- Tecnologias utilizadas
![Build Framework](https://img.shields.io/static/v1?label=NestJS&message=framework&color=red&style=for-the-badge&logo=Nestjs) 
![Build Framework](https://img.shields.io/static/v1?label=TypeScript&message=framework&color=blue&style=for-the-badge&logo=TypeScript)
![Build Framework](https://img.shields.io/static/v1?label=Docker&message=framework&color=blue&style=for-the-badge&logo=Docker)
## - Atividade 26/09

## Testando a API na nuvem

Essa API foi hospedada em um serviço de aplicativo na AZURE, tendo como base um container feito utilizando o Docker, podendo ser requisitada de qualquer lugar que possibilita o uso de requisições (postman, navegador) e será usada para a nossa aplicação WEB e Mobile, utilizando as mesmas rotas.

Para fazer o teste, apenas cole a URL abaixo no Postman (ou similar de requisições)

Listar Usuários (GET)

```bash
  http://localhost:5001/data
```

Cadastrar Usuários (POST)

```bash
  http://localhost:5001/data

    --exemplo de body para cadastro

    {
        "name" : "Gabriel Viana",
        "email" : "gabriel@fiap.com",
        "senha" : "gabriel123",
        "datanasc" : "30/06/2003"
    }
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/bielvdm/Startup-FIAP.git
```

Entre no diretório do projeto

```bash
  cd API - Startup
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
Para fazer o GET de usuários, utilize o postman (ou similar) com a URL:

```bash
  http://localhost:5001/data
```


### Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/bielvdm/Startup-FIAP.git
```

Entre no diretório do projeto

```bash
  cd API - Startup
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
Para fazer o GET de usuários, utilize o postman (ou similar) com a URL:

```bash
  http://localhost:5001/data
```


