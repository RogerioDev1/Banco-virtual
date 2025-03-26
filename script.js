document.addEventListener('DOMContentLoaded', function() {
    // Simula um saldo (pode ser substituído por um valor real)
    const saldo = 3428.90;
    
    // Função para atualizar data e hora
    function atualizarRelogio() {
        const agora = new Date();
        
        // Formata a data completa
        const optionsData = { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric'
        };
        const dataFormatada = agora.toLocaleDateString('pt-BR', optionsData);
        
        // Formata a hora
        const optionsHora = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const horaFormatada = agora.toLocaleTimeString('pt-BR', optionsHora);
        
        // Atualiza os elementos
        document.getElementById('data-atual').textContent = `${dataFormatada} às ${horaFormatada}`;
        document.getElementById('relogio').textContent = horaFormatada;
    }
    
    // Atualiza o ano no footer
    document.getElementById('ano-atual').textContent = new Date().getFullYear();
    
    // Atualiza a página com os dados
    document.getElementById('saldo').textContent = `R$ ${saldo.toFixed(2).replace('.', ',')}`;
    
    // Atualiza o relógio imediatamente e a cada segundo
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
    
    // Efeito de carregamento (opcional)
    setTimeout(() => {
        document.querySelector('.container').style.opacity = 1;
    }, 300);
    
    // Adiciona interação aos botões
    document.getElementById('transferir').addEventListener('click', function() {
        alert('Funcionalidade de transferência será implementada em breve!');
    });
    
    document.getElementById('extrato').addEventListener('click', function() {
        alert('Extrato será exibido aqui em breve!');
    });
});