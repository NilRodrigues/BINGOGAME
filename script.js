// Função para gerar um array aleatório de números de 1 a 50 (faixa BINGO)
function generateRandomNumbers() {
    const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    return numbers.slice(0, 25);
  }
  
  // Função para criar uma tabela de BINGO com números aleatórios
  function createBingoBoard() {
    const board = document.getElementById('bingo-board');
    board.innerHTML = '';
  
    const numbers = generateRandomNumbers();
  
    for (let i = 0; i < 25; i++) {
      const cell = document.createElement('div');
      cell.classList.add('bingo-cell');
      cell.textContent = numbers[i];
  
      // Adicione um evento de clique para marcar/desmarcar a célula
      cell.addEventListener('click', toggleCell);
      
      board.appendChild(cell);
    }
  }
  
  // Função para alternar o estado selecionado de uma célula
  function toggleCell() {
    this.classList.toggle('selected');
  }
  
  // Função para gerar novos números ao clicar no botão, limpar seleções e atualizar números sorteados
  function generateNumbers() {
    const cells = document.querySelectorAll('.bingo-cell');
    const drawnNumbersTable = document.getElementById('drawn-numbers').getElementsByTagName('tbody')[0];
    
    // Limpar seleções da tabela do BINGO
    cells.forEach(cell => {
      cell.classList.remove('selected');
    });
  
    // Limpar números sorteados anteriores
    drawnNumbersTable.innerHTML = '';
  
    // Gerar novos números sorteados
    const drawnNumbers = generateRandomNumbers().slice(0, 5);
  
    // Atualizar a tabela de números sorteados
    drawnNumbers.forEach(number => {
      const row = drawnNumbersTable.insertRow();
      const cell = row.insertCell(0);
      cell.textContent = number;
    });
  
    // Crie um novo BINGO
    createBingoBoard();
  }
  
  // Criação inicial da tabela
  createBingoBoard();
  