const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// trocar fundo
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
})

// preencher os dados da tabela
tarefas.ForEach(tarefas =>{
    const tr = document.createElement('tr');
    const trContent = `
    <td>${tarefas.nomedoproduto}</td>
    <td>${tarefas.númerodoproduto}</td>
    <td class="${tarefas.shipping === 'Declained' ? 'danger' : tarefas.shipping === 'pending' ? 'warning' : 'pimary'}">${tarefas.pagamento}</td>
    <td>${tarefas.estado}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbdody').appendChild(tr);
})