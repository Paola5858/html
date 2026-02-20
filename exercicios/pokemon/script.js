// Cores dos tipos de Pokémon
const tiposCores = {
    normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
    grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
    ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
    rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', dark: '#705848',
    steel: '#B8B8D0', fairy: '#EE99AC'
};

let carregando = false;
let historico = JSON.parse(localStorage.getItem('pokedex-historico')) || [];

// Som de pokébola (Web Audio API)
function tocarSomCaptura() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.3;
    
    oscillator.start();
    
    setTimeout(() => {
        oscillator.frequency.value = 400;
    }, 100);
    
    setTimeout(() => {
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.stop(audioCtx.currentTime + 0.1);
    }, 200);
}

// Inicializar ao carregar página
window.addEventListener('DOMContentLoaded', () => {
    atualizarContador();
    renderizarHistorico();
});

// Buscar Pokémon por nome ou ID
async function buscarPokemon() {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    if (!input) {
        mostrarErro('Digite um nome ou ID válido');
        return;
    }
    await carregarPokemon(input);
}

// Sortear Pokémon aleatório
async function sortearPokemon() {
    const idAleatorio = Math.floor(Math.random() * 1010) + 1;
    await carregarPokemon(idAleatorio);
}

// Função principal de carregamento
async function carregarPokemon(identificador) {
    if (carregando) return;
    
    carregando = true;
    desabilitarBotoes(true);
    esconderElementos();
    mostrarLoading(true);
    
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${identificador}`);
        
        if (!resposta.ok) {
            throw new Error('Pokémon não encontrado');
        }
        
        const pokemon = await resposta.json();
        exibirPokemon(pokemon);
        
    } catch (erro) {
        mostrarErro(erro.message === 'Pokémon não encontrado' 
            ? 'Pokémon não encontrado. Tente outro nome ou ID.' 
            : 'Erro ao carregar. Verifique sua conexão.');
    } finally {
        carregando = false;
        desabilitarBotoes(false);
        mostrarLoading(false);
    }
}

// Exibir dados do Pokémon
function exibirPokemon(pokemon) {
    const img = document.getElementById('poke-img');
    
    // Tocar som e animação
    tocarSomCaptura();
    img.classList.remove('reveal-animation');
    void img.offsetWidth; // Force reflow
    img.classList.add('reveal-animation');
    
    document.getElementById('poke-nome').textContent = pokemon.name;
    document.getElementById('poke-id').textContent = pokemon.id.toString().padStart(3, '0');
    img.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    document.getElementById('poke-altura').textContent = (pokemon.height / 10).toFixed(1) + 'm';
    document.getElementById('poke-peso').textContent = (pokemon.weight / 10).toFixed(1) + 'kg';
    
    // Exibir tipos com badges coloridas
    const tiposContainer = document.getElementById('poke-tipos');
    tiposContainer.innerHTML = pokemon.types
        .map(t => `<span class="type-badge" style="background: ${tiposCores[t.type.name] || '#777'}">${t.type.name}</span>`)
        .join('');
    
    // Salvar no histórico
    salvarNoHistorico(pokemon);
    
    document.getElementById('card-pokemon').classList.remove('d-none');
    document.getElementById('search-input').value = '';
}

// Salvar no histórico
function salvarNoHistorico(pokemon) {
    const captura = {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
        timestamp: Date.now()
    };
    
    // Evitar duplicatas consecutivas
    if (historico[0]?.id !== pokemon.id) {
        historico.unshift(captura);
        historico = historico.slice(0, 20); // Manter apenas 20
        localStorage.setItem('pokedex-historico', JSON.stringify(historico));
        atualizarContador();
        renderizarHistorico();
    }
}

// Atualizar contador
function atualizarContador() {
    const unicos = new Set(historico.map(p => p.id)).size;
    document.getElementById('contador').textContent = unicos;
}

// Renderizar histórico
function renderizarHistorico() {
    const lista = document.getElementById('historico-lista');
    const container = document.getElementById('historico');
    
    if (historico.length === 0) {
        container.classList.add('d-none');
        return;
    }
    
    container.classList.remove('d-none');
    lista.innerHTML = historico.map(p => `
        <div class="history-item" onclick="carregarPokemon(${p.id})">
            <img src="${p.img}" class="history-img" alt="${p.name}">
            <div class="history-info">
                <div class="history-name">${p.name}</div>
                <div class="history-id">#${p.id.toString().padStart(3, '0')}</div>
            </div>
        </div>
    `).join('');
}

// Limpar tela
function limpar() {
    esconderElementos();
    document.getElementById('search-input').value = '';
}

// Limpar histórico (opcional - adicionar botão se quiser)
function limparHistorico() {
    if (confirm('Deseja limpar todo o histórico?')) {
        historico = [];
        localStorage.removeItem('pokedex-historico');
        atualizarContador();
        renderizarHistorico();
    }
}

// Mostrar/esconder loading
function mostrarLoading(mostrar) {
    document.getElementById('loading').classList.toggle('d-none', !mostrar);
}

// Mostrar erro
function mostrarErro(mensagem) {
    const errorEl = document.getElementById('error');
    errorEl.textContent = mensagem;
    errorEl.classList.remove('d-none');
    setTimeout(() => errorEl.classList.add('d-none'), 4000);
}

// Esconder elementos
function esconderElementos() {
    document.getElementById('card-pokemon').classList.add('d-none');
    document.getElementById('error').classList.add('d-none');
}

// Desabilitar botões durante carregamento
function desabilitarBotoes(desabilitar) {
    document.getElementById('btn-buscar').disabled = desabilitar;
    document.getElementById('btn-sortear').disabled = desabilitar;
    document.getElementById('btn-limpar').disabled = desabilitar;
}
