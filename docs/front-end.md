# Número do ADR: 001
## Título: Escolha das Tecnologias de Front-end
### Status: Aceito

### Contexto:
No início do projeto de desafio de front-end, foi necessário escolher algumas tecnologias para o front-end, das quais atenderiam às necessidades do projeto. Diversas tecnologias estavam disponíveis, como bibliotecas e frameworks.

### Decisão:
Foi decidido utilizar um framework para o desenvolvimento da aplicação. A tecnologia escolhida foi o Vue.js, devido à sua sintaxe amigável e à curva de aprendizado mais suave, além de ser rápido e eficiente.

### Justificativa:
A decisão de usar um framework, em particular o Vue.js, baseou-se nas seguintes razões:

- Simplicidade: A sintaxe do Vue.js é limpa e amigável para iniciantes, e a curva de aprendizado é mais suave do que a de outros frameworks. 
 
- Desempenho: O Vue.js é rápido e eficiente, com um tamanho pequeno e otimizações internas que garantem uma renderização rápida da interface do usuário. 
 
- Reatividade: O Vue.js permite criar interfaces de usuário altamente interativas, onde as mudanças nos dados são refletidas instantaneamente na interface. 
 
- Flexibilidade: O Vue.js é flexível e permite construir desde SPAs pequenas até grandes e complexas. 
 
- Componentes reutilizáveis: O Vue.js permite o desenvolvimento ágil, pois os componentes podem ser reutilizados. 

### Alternativas Consideradas:
Foram consideradas as seguintes alternativas:

- React.js
- Angular

### Consequências:
A escolha do Vue.js como tecnologia de front-end traz as seguintes consequências:

- Curva de Aprendizado: A equipe precisará se familiarizar com as nuances específicas do Vue.js, mas a ampla documentação e a comunidade ativa são recursos valiosos.

### Referências:
- Documentação do Vue.js: https://vuejs.org/guide/quick-start.html
- Comparativo entre frameworks: https://br.vuejs.org/v2/guide/comparison.html

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
`cd front-end-challenger`   

`cd front-end`

### 4. Instalar dependências
O projeto usa o gerenciador de pacotes npm. Para instalar todas as dependências necessárias, execute:  
`npm install`

### 6. Rodar o projeto (inicie o back-end também, para que o projeto funcione corretamente)
Agora, inicie o servidor de desenvolvimento com o seguinte comando:  
`npm run dev`

