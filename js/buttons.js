function showNotification(name) {
  const notification = document.querySelector('.purchase-notification');
  notification.innerHTML = `<p><strong>${name}</strong> acabou de fazer uma compra!🔥🔥</p>`;
  notification.classList.add('show');
  
  // Esconder a notificação após 5 segundos
  setTimeout(() => {
    notification.classList.remove('show');
  }, 5000);
}

// Simular notificações automáticas
const names = ['Jusara Oliveira', 'Maria Dolores Silva', 'Ana Joyce Costa', 'Matheus Almeida', 'Juliana Santos', 'Rute Batista',  
    'Carla Menezes', 'Patrícia Andrade', 'Fernanda Souza', 'Letícia Barros', 'Gabriela Lima', 'Cláudia Pereira',  
    'Vanessa Teixeira', 'Beatriz Carvalho', 'Sofia Martins', 'Tatiane Ribeiro']
   ;
setInterval(() => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  showNotification(randomName);
}, 10000); // Exibe uma notificação a cada 10 segundos
// Exemplo de como mostrar a notificação
function showPurchaseNotification(name) {
    const notification = document.createElement('div');
    notification.classList.add('purchase-notification', 'show');
    notification.innerText = `${name} acabou de realizar uma compra!`;
  
    document.body.appendChild(notification);
  
    // Remover a notificação após 5 segundos
    setTimeout(() => {
      notification.classList.remove('show');
    }, 5000);
  }
  