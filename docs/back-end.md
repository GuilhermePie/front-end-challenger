# Número do ADR: 001
## Título: Escolha das Tecnoligias de back-end
### Status: Aceito

### Contexto:
O projeto exige a integração com uma ou mais APIs de terceiros, tornando necessário o desenvolvimento de uma API própria para centralizar e gerenciar essas integrações.

### Decisão:
Optamos por utilizar o Express.js devido à sua curva de aprendizado rápida e à simplicidade do framework. O Express oferece uma estrutura minimalista e flexível, facilitando o desenvolvimento de APIs de forma eficiente, com uma ampla comunidade de suporte e vasta documentação disponível.

### Justificativa:
Escolhemos o Express.js porque é um framework simples e fácil de aprender, permitindo que a equipe comece a trabalhar rapidamente. Ele é flexível, sem impor muitas regras, o que facilita a personalização da aplicação conforme as necessidades do projeto.

Além disso, o Express tem uma comunidade grande e ativa, com bastante suporte e documentação disponível, o que ajuda a resolver problemas com facilidade. Como faz parte do ecossistema do Node.js, permite o uso de JavaScript em toda a aplicação, simplificando o desenvolvimento.

Por fim, o Express é leve e eficiente, podendo lidar bem com o crescimento e a escalabilidade do projeto.

Consequências:
Escalabilidade complexa: Embora o Express seja eficiente para a maioria das aplicações, em sistemas de grande escala, pode ser necessário adicionar outras camadas de infraestrutura ou ferramentas para lidar com requisitos mais complexos, como alta concorrência ou baixa latência.

### Referências:
- Documentação do express.js: https://expressjs.com/pt-br/

## Como Iniciar o Projeto
Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Pré-requisitos
Certifique-se de que você tenha as seguintes ferramentas instaladas:

Node.js (versão v16.20.2 ou superior)  
Git (para clonar o repositório)

### 2. Clonar o repositório
Primeiro, clone o repositório do projeto para sua máquina local. No terminal, execute o seguinte comando:  
`git clone https://github.com/GuilhermePie/front-end-challenger.git`

### 3. Entrar na pasta do projeto
Navegue até a pasta onde o projeto foi clonado:  
`cd pasta-do-clone`   

`cd back-end`

### 4. Instalar dependências
O projeto usa o gerenciador de pacotes npm. Para instalar todas as dependências necessárias, execute:  
`npm install express --save`

`npm install cors`

### 6. Rodar o projeto
Agora, inicie o servidor de desenvolvimento com o seguinte comando:  
`node --watch app`
