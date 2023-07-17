document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const taskDetails = document.getElementById('task-details');
  
  
    const tasks = [
      {
        id: 1,
        title: 'Task 1',
        deadline: '2023-07-18',
        priority: 'high'
      },
      {
        id: 2,
        title: 'Task 2',
        deadline: '2023-07-20',
        priority: 'medium'
      },
      {
        id: 3,
        title: 'Task 3',
        deadline: '2023-07-22',
        priority: 'low'
      }
    ];
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      li.dataset.id = task.id;
      li.dataset.priority = task.priority;
      taskList.appendChild(li);
    });
  
    taskList.addEventListener('click', function(event) {
      const selectedTask = event.target;
      const taskId = selectedTask.dataset.id;
  
      const tasks = Array.from(taskList.children);
      tasks.forEach(task => task.classList.remove('selected'));
  
      selectedTask.classList.add('selected');
  
      const task = tasks.find(t => t.dataset.id === taskId);
      const taskDetailHtml = `
        <div>
          <h3>${task.textContent}</h3>
          <p><strong>Deadline:</strong> ${task.dataset.deadline}</p>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
          <span class="priority-label ${task.dataset.priority}-priority">${task.dataset.priority}</span>
        </div>
      `;
      taskDetails.innerHTML = taskDetailHtml;
    });
  });
  