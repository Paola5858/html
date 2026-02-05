// ===== SISTEMA DE MODAIS PARA EXEMPLOS =====

// Exemplos dos componentes Bootstrap
const componentExamples = {
  navbar: {
    title: 'navbar - barra de navegação',
    html: `
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #198754;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">🚜 AgroTech</a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Máquinas</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Manutenção</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Relatórios</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <p style="margin-top: 1rem; color: #6c757d; font-size: 0.9rem;">
        navbar responsivo com menu hambúrguer em mobile. fundo verde success transmite confiança.
      </p>
    `
  },

  cards: {
    title: 'cards - organização visual',
    html: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="card border-success" style="border-width: 2px;">
          <div class="card-header" style="background-color: #198754; color: white;">
            <h6 style="margin: 0;">Colheitadeira 01</h6>
          </div>
          <div class="card-body">
            <p class="card-text" style="font-size: 2rem; font-weight: 700; color: #198754; margin: 0;">78%</p>
            <p style="color: #6c757d; font-size: 0.85rem; margin-top: 0.5rem;">Combustível</p>
          </div>
        </div>

        <div class="card border-warning" style="border-width: 2px;">
          <div class="card-header" style="background-color: #ffc107; color: #333;">
            <h6 style="margin: 0;">Trator 02</h6>
          </div>
          <div class="card-body">
            <p class="card-text" style="font-size: 2rem; font-weight: 700; color: #ffc107; margin: 0;">12h</p>
            <p style="color: #6c757d; font-size: 0.85rem; margin-top: 0.5rem;">Próxima Manutenção</p>
          </div>
        </div>
      </div>
      <p style="margin-top: 1rem; color: #6c757d; font-size: 0.9rem;">
        cards organizam informação em blocos visuais. border colorida indica status rapidamente.
      </p>
    `
  },

  alerts: {
    title: 'alerts - comunicação instantânea',
    html: `
      <div class="alert alert-success" role="alert" style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: 1.2rem;">✅</span>
        <strong>tudo ok!</strong> máquina operando normalmente. pode seguir o trabalho.
      </div>

      <div class="alert alert-warning" role="alert" style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: 1.2rem;">⚠️</span>
        <strong>atenção:</strong> manutenção programada em 50 horas de operação.
      </div>

      <div class="alert alert-danger" role="alert" style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: 1.2rem;">🚨</span>
        <strong>crítico!</strong> temperatura do motor em 98°C. desligue imediatamente.
      </div>

      <p style="margin-top: 1rem; color: #6c757d; font-size: 0.9rem;">
        cores comunicam urgência instantaneamente. verde = ok, amarelo = cuidado, vermelho = pare agora.
      </p>
    `
  },

  buttons: {
    title: 'buttons - ações claras',
    html: `
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
        <button class="btn btn-success btn-lg">Iniciar Colheitadeira</button>
        <button class="btn btn-outline-info">Configurações</button>
        <button class="btn btn-warning">Agendar Manutenção</button>
        <button class="btn btn-danger">Desligar Motor</button>
      </div>

      <p style="margin-top: 1.5rem; color: #6c757d; font-size: 0.9rem;">
        botões grandes (btn-lg) facilitam uso com luvas. cores indicam importância da ação.
        success = ação positiva, warning = cuidado, danger = ação destrutiva.
      </p>
    `
  },

  tables: {
    title: 'tables - dados estruturados',
    html: `
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead style="background-color: #198754; color: white;">
            <tr>
              <th>Máquina</th>
              <th>Combustível</th>
              <th>Horas Trabalhadas</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Colheitadeira 01</td>
              <td>78%</td>
              <td>245h</td>
              <td><span style="color: #198754; font-weight: 600;">✓ Operando</span></td>
            </tr>
            <tr>
              <td>Trator 02</td>
              <td>45%</td>
              <td>312h</td>
              <td><span style="color: #ffc107; font-weight: 600;">⚠ Manutenção</span></td>
            </tr>
            <tr>
              <td>Pulverizador 03</td>
              <td>92%</td>
              <td>89h</td>
              <td><span style="color: #198754; font-weight: 600;">✓ Operando</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="margin-top: 1rem; color: #6c757d; font-size: 0.9rem;">
        table-striped facilita leitura. table-hover destaca linha ao passar mouse.
        table-responsive garante scroll horizontal em mobile.
      </p>
    `
  }
};

// Abrir modal com exemplo específico
function openExample(componentName) {
  const modal = document.getElementById('exampleModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  const example = componentExamples[componentName];

  if (example) {
    modalTitle.textContent = example.title;
    modalBody.innerHTML = example.html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // previne scroll do body
  }
}

// Fechar modal
function closeModal() {
  const modal = document.getElementById('exampleModal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // restaura scroll
}

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
  const modal = document.getElementById('exampleModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
