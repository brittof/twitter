# Twitter

## RFs (Requisitos Funcionais)

- [x] deve ser possível cadastrar um usuário
- [x] deve ser possível fazer login
- [x] deve ser possível visualizar o perfil do usuário
- [x] deve ser possível editar o perfil do usuário
- [ ] deve ser possível excluir o perfil do usuário

- [x] deve ser possível criar um tweet
- [x] deve ser possível visualizar todos tweet do usuário
- [ ] deve ser possível editar um tweet
- [ ] deve ser possível excluir um tweet

- [ ] deve ser possível visualizar o perfil de um usuário
- [ ] deve ser possível seguir um usuário
- [ ] deve ser possível visualizar os tweets dos seguidores
- [ ] deve ser possível deixar de seguir um usuário

## RNs (Regras de Negócio)

- [x] não deve ser possível cadastrar um usuário com um username já existente
- [ ] não deve ser possível excluir um usuário com um id inválido
- [x] não deve ser possível editar um usuário com um id inválido
- [ ] não deve ser possível excluir um tweet com id inválido

## RNFs (Requisitos Não-Funcionais)

- [ ] arquitetura escalonável
  - [ ] db
  - [ ] controllers
  - [ ] models
  - [ ] routes
  - [ ] tests

stack:
- [x] runtime: bun
- [x] framework: elysia
- [x] authentication: jwt
- [x] db: postgres (docker)
- [x] orm: prisma
