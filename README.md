# 🐾 PokéSearch - Buscador de Pokémon

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26-orange)
![CSS3](https://img.shields.io/badge/CSS3-1572B6-blue)
![API](https://img.shields.io/badge/Data-PokeAPI-ef5350)

Uma aplicação interativa que consome a **PokeAPI** para buscar e exibir informações detalhadas sobre Pokémons. O projeto foca em uma experiência visual rica, adaptando as cores da interface dinamicamente de acordo com o tipo do Pokémon encontrado.

---

## 🚀 Funcionalidades

- **Busca Dinâmica:** Pesquisa por nome ou ID do Pokémon.
- **Interface Adaptativa:** O plano de fundo e os badges de tipo mudam de cor conforme o elemento principal (Fogo, Água, Planta, etc).
- **Visualização de Stats:** Barras de status animadas para HP, Ataque e Defesa, com lógica de preenchimento proporcional.
- **Suporte a Tipos Múltiplos:** Exibição inteligente para Pokémons com um ou dois elementos.
- **UX Fluida:** Ativação da busca via botão ou tecla "Enter".

---

## 🛠️ Desafios Técnicos Superados

### 1. Manipulação de Estilos Dinâmicos (CSS-in-JS)

Um dos pontos centrais foi a lógica de **reset e aplicação de classes**. Para evitar conflitos visuais ao buscar diferentes Pokémons, implementei a função `resetClass` que utiliza `startsWith('type-')`, garantindo que apenas a estilização temática anterior seja removida antes da nova renderização.

### 2. Tratamento de Dados de API

O código utiliza `async/await` para gerenciar as requisições à PokeAPI. Implementei um bloco `try/catch` para garantir que, caso o usuário digite um nome inválido, a interface informe "Pokémon não encontrado" de forma amigável, em vez de apenas quebrar o script.

### 3. Lógica de UI (Status Bars)

As barras de progresso calculam a largura proporcionalmente. Adicionei uma trava lógica para que valores acima de 100 não quebrem o layout, mantendo a harmonia visual dos cards.

---

## 💻 Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 Avançado:** Uso de Flexbox, gradientes lineares e transições suaves (`ease`).
- **JavaScript (ES6+):**
  - `fetch()` para consumo de API REST.
  - `DOM Manipulation` para atualização em tempo real de elementos.
  - `Event Listeners` globais para captura de teclado.

---

## 📖 Como Executar

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/ViniSoaresDEV/pokedex-search.git](https://github.com/seu-usuario/pokedex-search.git)
    ```
2.  Abra o arquivo `index.html` diretamente no seu navegador ou utilize a extensão **Live Server** no VS Code para uma melhor experiência.

---

**Desenvolvido por Vinicius Soares.**
