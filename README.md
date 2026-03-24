🐾 PokéSearch - Buscador de Pokémon
Uma aplicação interativa que utiliza a PokeAPI para buscar e exibir informações detalhadas sobre Pokémons. O projeto foca em uma experiência visual rica, adaptando as cores da interface de acordo com o tipo do Pokémon encontrado.

🚀 Funcionalidades
Busca Dinâmica: Pesquisa por nome ou ID do Pokémon.

Interface Adaptativa: O plano de fundo e os emblemas de tipo mudam de cor dinamicamente com base no elemento principal do Pokémon (ex: fogo, água, planta).

Visualização de Stats: Barras de status animadas para HP, Ataque e Defesa, com lógica para limitar o preenchimento visual a 100% mesmo para status superiores.

Suporte a Tipos Múltiplos: Exibição inteligente de um ou dois tipos, dependendo do Pokémon.

Experiência do Usuário: Ativação da busca tanto pelo clique no botão quanto pela tecla "Enter".

🛠️ Desafios Técnicos Superados

1. Manipulação de Classes Dinâmicas
   Um dos pontos fortes deste projeto é a lógica de reset e aplicação de classes. Para evitar que as cores de Pokémons buscados anteriormente persistissem na interface, implementei uma função de limpeza que utiliza startsWith('type-') para remover apenas as classes de estilização temática antes de aplicar a nova.

2. Tratamento de Dados de API
   O código lida com o retorno assíncrono da PokeAPI usando async/await, garantindo que a interface informe ao usuário caso um Pokémon não seja encontrado através de um bloco try/catch.

3. Lógica de UI (Status Bars)
   As barras de progresso não apenas recebem o valor numérico, mas possuem uma lógica condicional para garantir que o layout não quebre caso um status ultrapasse o valor base de 100, mantendo a harmonia visual da Pokedex.

💻 Tecnologias Utilizadas
HTML5 Semântico

CSS3 Avançado: Uso de Flexbox, variáveis de cores por tipo e gradientes lineares para barras de status.

JavaScript (ES6+):

fetch() para consumo de API REST.

DOM Manipulation para atualização de textos, imagens e estilos.

Arrow Functions e Conditional (ternary) operators.

📖 Como Executar
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/pokedex-search.git
Abra o arquivo index.html diretamente no seu navegador ou utilize a extensão Live Server no VS Code.
