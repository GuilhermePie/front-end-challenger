Número do ADR: 001
Título: Escolha das Tecnoligias de back-end
Status: Aceito

Contexto:
O projeto exige a integração com uma ou mais APIs de terceiros, tornando necessário o desenvolvimento de uma API própria para centralizar e gerenciar essas integrações.

Decisão:
Optamos por utilizar o Express.js devido à sua curva de aprendizado rápida e à simplicidade do framework. O Express oferece uma estrutura minimalista e flexível, facilitando o desenvolvimento de APIs de forma eficiente, com uma ampla comunidade de suporte e vasta documentação disponível.

Justificativa:
Escolhemos o Express.js porque é um framework simples e fácil de aprender, permitindo que a equipe comece a trabalhar rapidamente. Ele é flexível, sem impor muitas regras, o que facilita a personalização da aplicação conforme as necessidades do projeto.

Além disso, o Express tem uma comunidade grande e ativa, com bastante suporte e documentação disponível, o que ajuda a resolver problemas com facilidade. Como faz parte do ecossistema do Node.js, permite o uso de JavaScript em toda a aplicação, simplificando o desenvolvimento.

Por fim, o Express é leve e eficiente, podendo lidar bem com o crescimento e a escalabilidade do projeto.

Consequências:
Escalabilidade complexa: Embora o Express seja eficiente para a maioria das aplicações, em sistemas de grande escala, pode ser necessário adicionar outras camadas de infraestrutura ou ferramentas para lidar com requisitos mais complexos, como alta concorrência ou baixa latência.

Referências:
- Documentação do express.js: https://expressjs.com/pt-br/