const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) ?? {};

window.onload = renderizarLocalStorageTasks();

function updateLocalStorageTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderizarLocalStorageTasks() {
    for (let [taskTitle, doneStatus] of Object.entries(tasks)) {
        renderizarTask(taskTitle, doneStatus);
    }
}

function markCheckbox(input, span, doneStatus) {
    if (doneStatus) span.style.textDecoration = 'line-through';
    else span.style.textDecoration = 'none';
    input.checked = doneStatus;
}

// Renderizar tarefa no HTML
function renderizarTask(taskTitle, doneStatus) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskTitle;

    const input = document.createElement('input'); // <input />
    input.setAttribute('type', 'checkbox'); // <input type="checkbox" />
    markCheckbox(input, span, doneStatus);
    // adicionar acao ao botao checkbox (poderia ser click tambem?)
    input.addEventListener('change', (event) => {
        const done = event.target.checked;

        // riscar texto da tarefa
        markCheckbox(input, span, done);

        // alterar parametro da task
        tasks[taskTitle] = done;
        updateLocalStorageTasks();
    });

    const button = document.createElement('button');
    button.textContent = 'Remover';
    // adicionar acao ao botao Remover
    button.addEventListener('click', (event) => {
        // remover tag no HTML
        // todoListUl.removeChild(event.target.parentElement) // nao necessario
        todoListUl.removeChild(li);
        // remover item de tasks
        // tasks =  tasks.filter(t => t.title !== taskTitle)  // caso fosse um array
        delete tasks[taskTitle];
        updateLocalStorageTasks();
    });

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    todoListUl.append(li);
}

// Adicionar nova tarefa
form.addEventListener('submit', (event) => {
    event.preventDefault(); // evita comportamento padrao de recarregar pagina ao submeter formulario
    const taskTitle = taskTitleInput.value.trim();

    // Input vazio
    if (!taskTitle) return;

    // Validacao de tamanho de input
    if (taskTitle.length < 3) {
        alert('Sua tarefa deve ter ao menos 3 caracteres');
        return;
    }

    // Ignorar itens duplicados
    // const taskTitles = tasks.map((item) => item.title);
    if (Object.keys(tasks).includes(taskTitle)) {
        alert(`Tarefa "${taskTitle}" ja existe, escolha outro nome`);
        return;
    }

    // Adicionando nova tarefa no array de tasks
    tasks[taskTitle] = false;

    // Salvar no localStorage
    updateLocalStorageTasks();

    // Renderizar task
    renderizarTask(taskTitle);

    // Limpar input
    taskTitleInput.value = '';
});
