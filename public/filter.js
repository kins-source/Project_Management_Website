// ====================== FILTERING & SORTING FUNCTIONS ======================
    function applyFiltersAndSearch() {
      // Get filtered and sorted tasks
      let filteredTasks = state.tasks.filter(task => {
        // Search filter
        if (state.searchQuery) {
          const query = state.searchQuery.toLowerCase();
          const matchesTitle = task.title.toLowerCase().includes(query);
          const matchesDescription = task.description.toLowerCase().includes(query);
          const matchesAssignee = task.assignees.some(assigneeId => {
            const user = getUserById(assigneeId);
            return user && user.name.toLowerCase().includes(query);
          });
          if (!matchesTitle && !matchesDescription && !matchesAssignee) {
            return false;
          }
        }

        // Status filter
        if (state.filters.status.length > 0) {
          const statusMap = {
            'todo': 'list-todo',
            'progress': 'list-progress',
            'review': 'list-review',
            'done': 'list-done'
          };
          const taskStatus = Object.keys(statusMap).find(key => statusMap[key] === task.listId);
          if (!state.filters.status.includes(taskStatus)) {
            return false;
          }
        }

        // Priority filter
        if (state.filters.priority.length > 0 && !state.filters.priority.includes(task.priority)) {
          return false;
        }

        // Assignee filter
        if (state.filters.assignee.length > 0) {
          const hasAssignee = task.assignees.some(assigneeId => 
            state.filters.assignee.includes(assigneeId)
          );
          if (!hasAssignee) {
            return false;
          }
        }

        // Label filter
        if (state.filters.label.length > 0) {
          const hasLabel = task.labels.some(labelId => 
            state.filters.label.includes(labelId)
          );
          if (!hasLabel) {
            return false;
          }
        }

        return true;
      });

      // Sort tasks
      filteredTasks.sort((a, b) => {
        switch (state.sort) {
          case 'priority':
            const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
            return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
          case 'dueDate':
            // Tasks with no due date go to the end
            if (!a.dueDate && !b.dueDate) return 0;
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return a.dueDate - b.dueDate;
          case 'createdAt':
            return b.createdAt - a.createdAt;
          case 'updatedAt':
            return b.updatedAt - a.updatedAt;
          default:
            return 0;
        }
      });

      return filteredTasks;
    }

    function updateFilterPills() {
      const filterPills = document.getElementById('filter-pills');
      filterPills.innerHTML = '';

      // Status filters
      state.filters.status.forEach(status => {
        const pill = document.createElement('span');
        pill.className = 'filter-pill';
        pill.innerHTML = `
          Status: ${status.charAt(0).toUpperCase() + status.slice(1)}
          <span class="remove-filter" data-filter="status" data-value="${status}">×</span>
        `;
        filterPills.appendChild(pill);
      });

      // Priority filters
      state.filters.priority.forEach(priority => {
        const pill = document.createElement('span');
        pill.className = 'filter-pill';
        pill.innerHTML = `
          Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}
          <span class="remove-filter" data-filter="priority" data-value="${priority}">×</span>
        `;
        filterPills.appendChild(pill);
      });

      // Assignee filters
      state.filters.assignee.forEach(assigneeId => {
        const user = getUserById(assigneeId);
        if (user) {
          const pill = document.createElement('span');
          pill.className = 'filter-pill';
          pill.innerHTML = `
            Assignee: ${user.name}
            <span class="remove-filter" data-filter="assignee" data-value="${assigneeId}">×</span>
          `;
          filterPills.appendChild(pill);
        }
      });

      // Add event listeners to remove buttons
      document.querySelectorAll('.remove-filter').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const filterType = btn.dataset.filter;
          const value = btn.dataset.value;
          
          // Remove from filters
          state.filters[filterType] = state.filters[filterType].filter(v => v !== value);
          
          // Update UI
          updateFilterPills();
          renderCurrentView();
          
          // Update sort dropdown text
          updateSortButtonText();
        });
      });

      // Show/hide filter pills container
      filterPills.style.display = 
        (state.filters.status.length + 
         state.filters.priority.length + 
         state.filters.assignee.length + 
         state.filters.label.length) > 0 ? 'flex' : 'none';
    }

    function updateSortButtonText() {
      const sortButton = document.querySelector('#sort-dropdown button');
      if (sortButton) {
        const sortMap = {
          'priority': 'Priority',
          'dueDate': 'Due Date',
          'createdAt': 'Created Date',
          'updatedAt': 'Updated Date'
        };
        sortButton.innerHTML = `
          <i class="fas fa-sort text-gray-500 dark:text-gray-400 mr-2"></i>
          <span class="text-sm text-gray-700 dark:text-gray-300">Sort: ${sortMap[state.sort]}</span>
          <i class="fas fa-chevron-down text-gray-500 dark:text-gray-400 ml-1 text-xs"></i>
        `;
      }
    }

    // ====================== RENDERING FUNCTIONS ======================
    function renderProjects() {
      const projectList = document.getElementById('project-list');
      projectList.innerHTML = '';
      
      state.projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `
          <button class="w-full flex items-center px-4 py-3 rounded-xl text-left hover:bg-gray-800 transition-colors ${project.active ? 'bg-gray-800 text-white' : 'text-gray-300'}" data-project-id="${project.id}">
            <div class="w-3 h-3 rounded-full ${project.active ? 'bg-blue-500' : 'bg-gray-500'} mr-3"></div>
            <span>${project.name}</span>
          </button>
        `;
        projectList.appendChild(li);
        
        li.querySelector('button').addEventListener('click', () => {
          setActiveProject(project.id);
        });
      });
    }

    function renderTasks() {
      // Get filtered tasks
      const filteredTasks = applyFiltersAndSearch();
      
      // Clear all lists
      ['list-todo', 'list-progress', 'list-review', 'list-done'].forEach(listId => {
        const list = document.getElementById(listId);
        const container = list.querySelector('.space-y-4');
        container.innerHTML = '';
      });
      
      // Group tasks by list
      const tasksByList = {
        'list-todo': [],
        'list-progress': [],
        'list-review': [],
        'list-done': []
      };
      
      filteredTasks.forEach(task => {
        if (tasksByList[task.listId]) {
          tasksByList[task.listId].push(task);
        }
      });
      
      // Render tasks in each list
      Object.entries(tasksByList).forEach(([listId, tasks]) => {
        const list = document.getElementById(listId);
        const container = list.querySelector('.space-y-4');
        const countEl = list.querySelector('p.text-sm');
        
        if (countEl) {
          countEl.textContent = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
        }
        
        tasks.forEach(task => {
          const taskEl = document.getElementById('task-card-template').content.cloneNode(true);
          const card = taskEl.querySelector('.card');
          card.dataset.taskId = task.id;
          
          // Set task data
          taskEl.querySelector('.task-title').textContent = task.title;
          
          // Labels
          const labelsContainer = taskEl.querySelector('.flex.flex-wrap.gap-2.mb-3');
          labelsContainer.innerHTML = '';
          task.labels.forEach(labelId => {
            const label = getLabelById(labelId);
            if (label) {
              const span = document.createElement('span');
              span.className = `px-2.5 py-1.5 rounded-xl text-xs font-medium text-white ${label.color} task-label`;
              span.innerHTML = `<i class="${label.icon} mr-1"></i> ${label.name}`;
              labelsContainer.appendChild(span);
            }
          });
          