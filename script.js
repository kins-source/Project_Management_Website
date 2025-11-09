    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          },
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            },
            secondary: {
              500: '#8b5cf6',
            },
            success: {
              500: '#10b981',
            },
            warning: {
              500: '#f59e0b',
            },
            danger: {
              500: '#ef4444',
            },
            info: {
              500: '#0ea5e9',
            }
          },
          animation: {
            'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'slide-in-right': 'slideInRight 0.4s ease-out forwards',
            'slide-out-right': 'slideOutRight 0.3s ease-in forwards',
            'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
            'float': 'float 6s ease-in-out infinite'
          },
          keyframes: {
            slideInRight: {
              '0%': { transform: 'translateX(100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' }
            },
            slideOutRight: {
              '0%': { transform: 'translateX(0)', opacity: '1' },
              '100%': { transform: 'translateX(100%)', opacity: '0' }
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }
        }
      }
    }
        // ====================== DATA STORE ======================
    const state = {
      currentView: 'dashboard',
      currentProject: 'p1',
      currentUser: 'u1',
      projects: [
        { id: 'p1', name: 'Nexus Core Engine', workspace: 'Acme Corp', active: true },
        { id: 'p2', name: 'Mobile App v2', workspace: 'Acme Corp', active: false },
        { id: 'p3', name: 'API Gateway', workspace: 'Nexus Labs', active: false },
        { id: 'p4', name: 'Documentation Portal', workspace: 'Open Source', active: false }
      ],
      users: [
        { id: 'u1', name: 'Alex Rivera', initials: 'AR', color: 'bg-blue-500', role: 'admin', status: 'online' },
        { id: 'u2', name: 'Sam Chen', initials: 'SC', color: 'bg-green-500', role: 'member', status: 'online' },
        { id: 'u3', name: 'Taylor Kim', initials: 'TK', color: 'bg-purple-500', role: 'member', status: 'away' },
        { id: 'u4', name: 'Jordan Lee', initials: 'JL', color: 'bg-amber-500', role: 'member', status: 'online' },
        { id: 'u5', name: 'Morgan Smith', initials: 'MS', color: 'bg-cyan-500', role: 'viewer', status: 'offline' }
      ],
      labels: [
        { id: 'l1', name: 'Bug', color: 'bg-red-500', icon: 'fas fa-bug' },
        { id: 'l2', name: 'Feature', color: 'bg-blue-500', icon: 'fas fa-code' },
        { id: 'l3', name: 'Design', color: 'bg-pink-500', icon: 'fas fa-paint-brush' },
        { id: 'l4', name: 'Urgent', color: 'bg-amber-500', icon: 'fas fa-exclamation-triangle' },
        { id: 'l5', name: 'Documentation', color: 'bg-indigo-500', icon: 'fas fa-book' },
        { id: 'l6', name: 'Testing', color: 'bg-emerald-500', icon: 'fas fa-vial' }
      ],
      tasks: [
        {
          id: 't1',
          title: 'Implement real-time sync engine',
          description: 'Design CRDT-based conflict resolution for card movements. Ensure p99 latency < 200ms. Implement optimistic UI updates with rollback capability.',
          assignees: ['u1', 'u2'],
          labels: ['l2', 'l4'],
          dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          comments: 4,
          attachments: 2,
          priority: 'critical',
          checklist: [
            { id: 'cl1', text: 'Research CRDT algorithms', completed: true },
            { id: 'cl2', text: 'Design conflict resolution strategy', completed: true },
            { id: 'cl3', text: 'Implement core sync logic', completed: true },
            { id: 'cl4', text: 'Add rollback capability', completed: false },
            { id: 'cl5', text: 'Write integration tests', completed: false }
          ],
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
          listId: 'list-progress'
        },
        {
          id: 't2',
          title: 'Optimize board rendering for 10k+ cards',
          description: 'Implement virtualization and incremental hydration. Test with synthetic dataset of 10,000 cards.',
          assignees: ['u3'],
          labels: ['l2'],
          dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          comments: 2,
          attachments: 1,
          priority: 'high',
          checklist: [
            { id: 'cl6', text: 'Research virtualization libraries', completed: true },
            { id: 'cl7', text: 'Implement virtualized list component', completed: false },
            { id: 'cl8', text: 'Add incremental hydration', completed: false }
          ],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          listId: 'list-todo'
        },
        {
          id: 't3',
          title: 'Fix race condition in WebSocket reconnection',
          description: 'When client reconnects, ensure no duplicate events or data loss occurs during reconnection handshake.',
          assignees: ['u1'],
          labels: ['l1', 'l4'],
          dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          comments: 7,
          attachments: 0,
          priority: 'critical',
          checklist: [
            { id: 'cl9', text: 'Reproduce race condition', completed: true },
            { id: 'cl10', text: 'Design fix', completed: true },
            { id: 'cl11', text: 'Implement fix', completed: true },
            { id: 'cl12', text: 'Add regression tests', completed: true }
          ],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 30 * 60 * 1000),
          listId: 'list-done'
        },
        {
          id: 't4',
          title: 'Design analytics dashboard',
          description: 'Create burndown charts, velocity tracking, and cycle time metrics for project managers.',
          assignees: ['u2', 'u4'],
          labels: ['l3'],
          dueDate: null,
          comments: 1,
          attachments: 3,
          priority: 'medium',
          checklist: [
            { id: 'cl13', text: 'Define metrics requirements', completed: true },
            { id: 'cl14', text: 'Design chart components', completed: true },
            { id: 'cl15', text: 'Implement burndown chart', completed: false },
            { id: 'cl16', text: 'Implement velocity chart', completed: false },
            { id: 'cl17', text: 'Add export functionality', completed: false },
            { id: 'cl18', text: 'User testing', completed: false }
          ],
          createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
          listId: 'list-todo'
        },
        {
          id: 't5',
          title: 'Implement notification service',
          description: 'Build decoupled notification service that fans out events to different channels (in-app, email, push).',
          assignees: ['u1', 'u3'],
          labels: ['l2'],
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          comments: 3,
          attachments: 1,
          priority: 'high',
          checklist: [
            { id: 'cl19', text: 'Design notification architecture', completed: true },
            { id: 'cl20', text: 'Implement in-app notifications', completed: true },
            { id: 'cl21', text: 'Add email integration', completed: false },
            { id: 'cl22', text: 'Add push notification support', completed: false }
          ],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          listId: 'list-review'
        },
        {
          id: 't6',
          title: 'Write API documentation',
          description: 'Create comprehensive documentation for the new real-time sync API endpoints.',
          assignees: ['u5'],
          labels: ['l5'],
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          comments: 0,
          attachments: 0,
          priority: 'low',
          checklist: [
            { id: 'cl23', text: 'Outline documentation structure', completed: true },
            { id: 'cl24', text: 'Document authentication', completed: false },
            { id: 'cl25', text: 'Document sync endpoints', completed: false },
            { id: 'cl26', text: 'Add code examples', completed: false }
          ],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          listId: 'list-todo'
        },
        {
          id: 't7',
          title: 'Add dark mode support',
          description: 'Implement dark mode across all views with smooth transitions and user preference persistence.',
          assignees: ['u2'],
          labels: ['l2', 'l3'],
          dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
          comments: 2,
          attachments: 1,
          priority: 'medium',
          checklist: [
            { id: 'cl27', text: 'Design dark mode color palette', completed: true },
            { id: 'cl28', text: 'Implement theme toggle', completed: true },
            { id: 'cl29', text: 'Test accessibility', completed: false }
          ],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
          listId: 'list-progress'
        },
        {
          id: 't8',
          title: 'Fix mobile responsiveness',
          description: 'Ensure all views work seamlessly on mobile devices with touch-friendly controls.',
          assignees: ['u3', 'u4'],
          labels: ['l1'],
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          comments: 5,
          attachments: 0,
          priority: 'high',
          checklist: [
            { id: 'cl30', text: 'Audit mobile issues', completed: true },
            { id: 'cl31', text: 'Fix sidebar toggle', completed: true },
            { id: 'cl32', text: 'Optimize board view', completed: false },
            { id: 'cl33', text: 'Test on iOS and Android', completed: false }
          ],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          listId: 'list-todo'
        }
      ],
      comments: [
        { id: 'c1', taskId: 't1', userId: 'u2', text: 'I\'ve started researching CRDTs. The Yjs library looks promising.', createdAt: new Date(Date.now() - 60 * 60 * 1000) },
        { id: 'c2', taskId: 't1', userId: 'u1', text: 'Great! Let\'s also look at Automerge for comparison.', createdAt: new Date(Date.now() - 45 * 60 * 1000) },
        { id: 'c3', taskId: 't1', userId: 'u2', text: 'I think Yjs is better for our use case because of its network protocol.', createdAt: new Date(Date.now() - 30 * 60 * 1000) },
        { id: 'c4', taskId: 't1', userId: 'u1', text: 'Agreed. Let\'s go with Yjs and document our decision.', createdAt: new Date(Date.now() - 15 * 60 * 1000) },
        { id: 'c5', taskId: 't2', userId: 'u3', text: 'I\'m testing react-window for virtualization. Performance is great!', createdAt: new Date(Date.now() - 90 * 60 * 1000) },
        { id: 'c6', taskId: 't2', userId: 'u1', text: 'Nice! Make sure we handle dynamic card heights properly.', createdAt: new Date(Date.now() - 60 * 60 * 1000) },
        { id: 'c7', taskId: 't3', userId: 'u1', text: 'Fixed the race condition! PR is ready for review.', createdAt: new Date(Date.now() - 40 * 60 * 1000) },
        { id: 'c8', taskId: 't5', userId: 'u3', text: 'I\'ve implemented the in-app notification system. Check out the demo!', createdAt: new Date(Date.now() - 120 * 60 * 1000) }
      ],
      activity: [
        { id: 'a1', userId: 'u1', action: 'moved', taskId: 't1', from: 'To Do', to: 'In Progress', timestamp: new Date(Date.now() - 30 * 60 * 1000) },
        { id: 'a2', userId: 'u2', action: 'commented on', taskId: 't1', timestamp: new Date(Date.now() - 25 * 60 * 1000) },
        { id: 'a3', userId: 'u1', action: 'completed', taskId: 't3', timestamp: new Date(Date.now() - 20 * 60 * 1000) },
        { id: 'a4', userId: 'u4', action: 'added', taskId: 't4', timestamp: new Date(Date.now() - 15 * 60 * 1000) },
        { id: 'a5', userId: 'u3', action: 'moved', taskId: 't5', from: 'In Progress', to: 'In Review', timestamp: new Date(Date.now() - 10 * 60 * 1000) },
        { id: 'a6', userId: 'u1', action: 'assigned', taskId: 't2', to: 'u3', timestamp: new Date(Date.now() - 5 * 60 * 1000) }
      ],
      notifications: [
        { id: 'n1', userId: 'u1', taskId: 't3', type: 'task_completed', message: 'Task "Fix race condition" has been marked as done', read: false, timestamp: new Date(Date.now() - 20 * 60 * 1000) },
        { id: 'n2', userId: 'u1', taskId: 't1', type: 'mention', message: 'Sam Chen mentioned you in a comment', read: false, timestamp: new Date(Date.now() - 25 * 60 * 1000) },
        { id: 'n3', userId: 'u1', taskId: 't5', type: 'task_assigned', message: 'You have been assigned to "Implement notification service"', read: false, timestamp: new Date(Date.now() - 120 * 60 * 1000) }
      ],
      // NEW: Filter and sort state
      filters: {
        status: [],
        priority: [],
        assignee: [],
        label: []
      },
      sort: 'priority', // priority, dueDate, createdAt, updatedAt
      searchQuery: ''
    };

    // ====================== UTILITY FUNCTIONS ======================
    function formatTimeAgo(date) {
      const diff = Date.now() - date.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (minutes < 1) return 'just now';
      if (minutes < 60) return `${minutes}m ago`;
      if (hours < 24) return `${hours}h ago`;
      if (days < 7) return `${days}d ago`;
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function formatDate(date) {
      if (!date) return 'No due date';
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function getUserById(id) {
      return state.users.find(u => u.id === id);
    }

    function getLabelById(id) {
      return state.labels.find(l => l.id === id);
    }

    function getTaskById(id) {
      return state.tasks.find(t => t.id === id);
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
          
          // Assignees
          const assigneesContainer = taskEl.querySelector('.flex.-space-x-2');
          assigneesContainer.innerHTML = '';
          task.assignees.slice(0, 3).forEach(assigneeId => {
            const user = getUserById(assigneeId);
            if (user) {
              const div = document.createElement('div');
              div.className = `w-7 h-7 rounded-full flex items-center justify-center text-white font-medium ${user.color} text-xs task-assignee`;
              div.textContent = user.initials;
              assigneesContainer.appendChild(div);
            }
          });
          if (task.assignees.length > 3) {
            const div = document.createElement('div');
            div.className = 'w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs';
            div.textContent = `+${task.assignees.length - 3}`;
            assigneesContainer.appendChild(div);
          }
          
          // Due date
          taskEl.querySelector('.task-due-date').textContent = formatDate(task.dueDate);
          
          // Comments & Attachments
          taskEl.querySelector('.task-comments span:last-child').textContent = task.comments;
          taskEl.querySelector('.task-attachments span:last-child').textContent = task.attachments;
          
          // Checklist
          const completed = task.checklist.filter(item => item.completed).length;
          taskEl.querySelector('.task-checklist span:last-child').textContent = `${completed}/${task.checklist.length}`;
          
          // Add to container
          container.appendChild(taskEl);
          
          // Add event listener
          card.addEventListener('click', () => {
            showTaskDetails(task.id);
          });
        });
      });
    }

    function renderListView() {
      // Get filtered tasks
      const filteredTasks = applyFiltersAndSearch();
      
      const tbody = document.getElementById('list-view-tbody');
      tbody.innerHTML = '';
      
      filteredTasks.forEach(task => {
        const user = getUserById(task.assignees[0]);
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        row.innerHTML = `
          <td class="text-center">
            <input type="checkbox" class="custom-checkbox">
          </td>
          <td>
            <div class="font-medium text-gray-900 dark:text-white">${task.title}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${task.description.substring(0, 60)}${task.description.length > 60 ? '...' : ''}</div>
          </td>
          <td>
            <span class="px-3 py-1 rounded-full text-xs font-medium ${
              task.listId === 'list-todo' ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' :
              task.listId === 'list-progress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' :
              task.listId === 'list-review' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200' :
              'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
            }">
              ${task.listId === 'list-todo' ? 'To Do' :
                task.listId === 'list-progress' ? 'In Progress' :
                task.listId === 'list-review' ? 'In Review' : 'Done'}
            </span>
          </td>
          <td>
            <span class="priority-badge ${
              task.priority === 'low' ? 'priority-low' :
              task.priority === 'medium' ? 'priority-medium' :
              task.priority === 'high' ? 'priority-high' : 'priority-critical'
            }">
              ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          </td>
          <td>
            <div class="flex -space-x-2">
              ${task.assignees.slice(0, 3).map(assigneeId => {
                const u = getUserById(assigneeId);
                return `<div class="w-7 h-7 rounded-full ${u.color} flex items-center justify-center text-white text-xs font-medium" title="${u.name}">${u.initials}</div>`;
              }).join('')}
              ${task.assignees.length > 3 ? `<div class="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">+${task.assignees.length - 3}</div>` : ''}
            </div>
          </td>
          <td class="text-gray-500 dark:text-gray-400">
            ${formatDate(task.dueDate)}
          </td>
          <td class="text-right">
            <span class="flex items-center justify-end">
              <i class="far fa-comment mr-1 text-gray-400"></i>
              <span class="font-medium">${task.comments}</span>
            </span>
          </td>
        `;
        tbody.appendChild(row);
        
        // Add click event to row
        row.addEventListener('click', (e) => {
          if (e.target.tagName !== 'INPUT') {
            showTaskDetails(task.id);
          }
        });
      });
      
      // Update count display
      document.getElementById('tasks-shown-count').textContent = filteredTasks.length;
      document.getElementById('tasks-total-count').textContent = state.tasks.length;
    }

    function renderActivityFeed() {
      const feed = document.getElementById('activity-feed');
      feed.innerHTML = '';
      
      state.activity.slice(0, 8).forEach(activity => {
        const user = getUserById(activity.userId);
        const task = getTaskById(activity.taskId);
        
        const div = document.createElement('div');
        div.className = 'p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors';
        div.innerHTML = `
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-0.5">
              <div class="w-9 h-9 rounded-xl ${user.color} flex items-center justify-center text-white font-medium text-sm">${user.initials}</div>
            </div>
            <div class="ml-3">
              <p class="text-sm">
                <span class="font-medium text-gray-900 dark:text-white">${user.name}</span>
                <span class="mx-1 text-gray-500 dark:text-gray-400">${activity.action}</span>
                <span class="font-medium text-gray-900 dark:text-white">${task ? task.title : 'a task'}</span>
                ${activity.from ? `
                  <span class="mx-1 text-gray-500 dark:text-gray-400">from</span>
                  <span class="font-medium text-gray-900 dark:text-white">${activity.from}</span>
                ` : ''}
                ${activity.to ? `
                  <span class="mx-1 text-gray-500 dark:text-gray-400">to</span>
                  <span class="font-medium text-gray-900 dark:text-white">${activity.to}</span>
                ` : ''}
                ${activity.action === 'assigned' && activity.to ? `
                  <span class="mx-1 text-gray-500 dark:text-gray-400">to</span>
                  <span class="font-medium text-gray-900 dark:text-white">${getUserById(activity.to)?.name || 'someone'}</span>
                ` : ''}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">${formatTimeAgo(activity.timestamp)}</p>
            </div>
          </div>
        `;
        feed.appendChild(div);
      });
    }

    function showTaskDetails(taskId) {
      const task = getTaskById(taskId);
      if (!task) return;
      
      // Show panel
      document.getElementById('right-panel').classList.remove('hidden');
      document.getElementById('task-details-placeholder').classList.add('hidden');
      document.getElementById('task-details').classList.remove('hidden');
      document.getElementById('task-details').dataset.taskId = taskId;
      
      // Set task data
      document.getElementById('task-title').textContent = task.title;
      document.getElementById('task-description').textContent = task.description;
      document.getElementById('task-due-date').textContent = formatDate(task.dueDate);
      
      // Assignees
      const assigneesContainer = document.getElementById('task-assignees');
      assigneesContainer.innerHTML = '';
      task.assignees.forEach(assigneeId => {
        const user = getUserById(assigneeId);
        if (user) {
          const div = document.createElement('div');
          div.className = 'flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg';
          div.innerHTML = `
            <div class="w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-white font-medium text-sm mr-3">${user.initials}</div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">${user.name}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 capitalize">${user.role}</p>
            </div>
            <button class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i class="fas fa-times"></i>
            </button>
          `;
          assigneesContainer.appendChild(div);
        }
      });
      
      // Labels
      const labelsContainer = document.getElementById('task-labels');
      labelsContainer.innerHTML = '';
      task.labels.forEach(labelId => {
        const label = getLabelById(labelId);
        if (label) {
          const span = document.createElement('span');
          span.className = `px-3 py-1.5 rounded-xl text-xs font-medium text-white ${label.color} flex items-center`;
          span.innerHTML = `<i class="${label.icon} mr-1"></i> ${label.name}`;
          labelsContainer.appendChild(span);
        }
      });
      
      // Checklist
      const checklistContainer = document.getElementById('task-checklist');
      checklistContainer.innerHTML = '';
      const completed = task.checklist.filter(item => item.completed).length;
      document.getElementById('checklist-progress').textContent = `${completed}/${task.checklist.length}`;
      
      task.checklist.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex items-start';
        div.innerHTML = `
          <input type="checkbox" class="custom-checkbox mt-1 mr-3" ${item.completed ? 'checked' : ''} data-checklist-id="${item.id}">
          <span class="text-sm ${item.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'} flex-1">${item.text}</span>
          <button class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <i class="fas fa-ellipsis-h text-xs"></i>
          </button>
        `;
        checklistContainer.appendChild(div);
        
        // Add event listener
        div.querySelector('input').addEventListener('change', (e) => {
          toggleChecklistItem(taskId, item.id, e.target.checked);
        });
      });
      
      // Comments
      renderComments(taskId);
    }

    function renderComments(taskId) {
      const commentsContainer = document.getElementById('comments-list');
      commentsContainer.innerHTML = '';
      
      const taskComments = state.comments.filter(c => c.taskId === taskId);
      
      taskComments.forEach(comment => {
        const user = getUserById(comment.userId);
        const div = document.createElement('div');
        div.className = 'p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl';
        div.innerHTML = `
          <div class="flex items-center mb-3">
            <div class="w-9 h-9 rounded-full ${user.color} flex items-center justify-center text-white font-medium text-sm mr-3">${user.initials}</div>
            <div class="flex-1">
              <div class="flex items-center">
                <span class="font-medium text-gray-900 dark:text-white">${user.name}</span>
                <span class="mx-2 text-gray-500 dark:text-gray-400">•</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">${formatTimeAgo(comment.createdAt)}</span>
              </div>
              ${user.id === state.currentUser ? `
                <div class="flex items-center mt-1">
                  <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">You</span>
                </div>
              ` : ''}
            </div>
            <button class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">${comment.text}</p>
          <div class="flex items-center mt-3 space-x-4">
            <button class="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i class="far fa-thumbs-up mr-1"></i>
              <span>2</span>
            </button>
            <button class="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i class="far fa-comment mr-1"></i>
              <span>Reply</span>
            </button>
          </div>
        `;
        commentsContainer.appendChild(div);
      });
    }

    function toggleChecklistItem(taskId, checklistId, completed) {
      const task = getTaskById(taskId);
      if (!task) return;
      
      const item = task.checklist.find(i => i.id === checklistId);
      if (item) {
        item.completed = completed;
        
        // Update task in state
        const taskIndex = state.tasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = { ...state.tasks[taskIndex] };
        }
        
        // Update UI
        renderTasks();
        renderListView();
        
        // Show notification
        showNotification('Checklist Updated', `Checklist item "${item.text}" ${completed ? 'completed' : 'marked incomplete'}`);
      }
    }

    function addComment(taskId, text) {
      if (!text.trim()) return;
      
      const newComment = {
        id: `c${Date.now()}`,
        taskId: taskId,
        userId: state.currentUser,
        text: text,
        createdAt: new Date()
      };
      
      state.comments.push(newComment);
      
      // Update task comment count
      const task = getTaskById(taskId);
      if (task) {
        task.comments += 1;
        task.updatedAt = new Date();
      }
      
      // Add to activity
      state.activity.unshift({
        id: `a${Date.now()}`,
        userId: state.currentUser,
        action: 'commented on',
        taskId: taskId,
        timestamp: new Date()
      });
      
      // Render updates
      renderTasks();
      renderListView();
      renderActivityFeed();
      renderComments(taskId);
      
      // Clear input
      document.getElementById('comment-input').value = '';
      
      // Show notification
      showNotification('Comment Added', 'Your comment has been added to the task');
    }

    function moveTask(taskId, newListId) {
      const task = getTaskById(taskId);
      if (!task) return;
      
      const oldListId = task.listId;
      task.listId = newListId;
      task.updatedAt = new Date();
      
      // Add to activity
      const listNames = {
        'list-todo': 'To Do',
        'list-progress': 'In Progress',
        'list-review': 'In Review',
        'list-done': 'Done'
      };
      
      state.activity.unshift({
        id: `a${Date.now()}`,
        userId: state.currentUser,
        action: 'moved',
        taskId: taskId,
        from: listNames[oldListId],
        to: listNames[newListId],
        timestamp: new Date()
      });
      
      // Render updates
      renderTasks();
      renderListView();
      renderActivityFeed();
      
      // Show notification
      showNotification('Task Moved', `"${task.title}" moved to ${listNames[newListId]}`);
    }

    function showNotification(title, message) {
      const toast = document.getElementById('notification-toast');
      document.getElementById('toast-title').textContent = title;
      document.getElementById('toast-message').textContent = message;
      document.getElementById('toast-time').textContent = 'just now';
      
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }

    function setActiveProject(projectId) {
      // Update active project
      state.projects.forEach(p => p.active = p.id === projectId);
      state.currentProject = projectId;
      
      // Update UI
      renderProjects();
      document.getElementById('current-project-title').textContent = 
        state.projects.find(p => p.id === projectId)?.name || 'Project';
    }

    function switchView(view) {
      // Hide all views
      ['dashboard-view', 'board-view', 'list-view', 'calendar-view', 'timeline-view'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
      });
      
      // Show selected view
      document.getElementById(`${view}-view`).classList.remove('hidden');
      state.currentView = view;
      
      // Update tab states
      document.querySelectorAll('#view-tabs button').forEach(btn => {
        btn.classList.remove('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm');
        btn.classList.add('text-gray-600', 'dark:text-gray-300');
      });
      document.getElementById(`tab-${view}`).classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm');
      
      // Update page title
      const titles = {
        dashboard: 'Dashboard',
        board: 'Board View',
        list: 'List View',
        calendar: 'Calendar',
        timeline: 'Timeline'
      };
      document.getElementById('current-page-title').textContent = titles[view] || view;
      
      // Render view-specific content
      if (view === 'board') {
        renderTasks();
      } else if (view === 'list') {
        renderListView();
      }
    }

    function renderCurrentView() {
      switch (state.currentView) {
        case 'board':
          renderTasks();
          break;
        case 'list':
          renderListView();
          break;
        // Other views don't need re-rendering on filter changes
      }
    }

    // ====================== EVENT HANDLERS ======================
    // Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const icon = document.getElementById('theme-toggle').querySelector('i');
      if (document.documentElement.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });

    // Mobile Menu Toggle
    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('active');
    });

    // View Navigation
    ['dashboard', 'board', 'list', 'calendar', 'timeline'].forEach(view => {
      document.getElementById(`tab-${view}`).addEventListener('click', () => {
        switchView(view);
      });
      
      document.getElementById(`nav-${view}`).addEventListener('click', () => {
        switchView(view);
      });
    });

    // New Task Modal
    document.getElementById('new-task-btn').addEventListener('click', () => {
      document.getElementById('new-task-modal').classList.add('active');
    });

    document.getElementById('fab').addEventListener('click', () => {
      document.getElementById('new-task-modal').classList.add('active');
    });

    document.getElementById('close-new-task-modal').addEventListener('click', () => {
      document.getElementById('new-task-modal').classList.remove('active');
    });

    document.getElementById('cancel-new-task').addEventListener('click', () => {
      document.getElementById('new-task-modal').classList.remove('active');
    });

    document.getElementById('create-task-btn').addEventListener('click', () => {
      const title = document.getElementById('task-title-input').value;
      if (!title.trim()) return;
      
      const newTask = {
        id: `t${Date.now()}`,
        title: title,
        description: document.getElementById('task-description-input').value,
        assignees: ['u1'], // Default to current user
        labels: [],
        dueDate: document.getElementById('task-due-date-input').value ? 
          new Date(document.getElementById('task-due-date-input').value) : null,
        comments: 0,
        attachments: 0,
        priority: 'medium',
        checklist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        listId: 'list-todo'
      };
      
      state.tasks.push(newTask);
      
      // Add to activity
      state.activity.unshift({
        id: `a${Date.now()}`,
        userId: state.currentUser,
        action: 'added',
        taskId: newTask.id,
        timestamp: new Date()
      });
      
      // Render updates
      renderTasks();
      renderListView();
      renderActivityFeed();
      
      // Close modal and reset
      document.getElementById('new-task-modal').classList.remove('active');
      document.getElementById('task-title-input').value = '';
      document.getElementById('task-description-input').value = '';
      document.getElementById('task-due-date-input').value = '';
      
      // Show notification
      showNotification('Task Created', `"${title}" has been added to the board`);
    });

    // Close Panel
    document.getElementById('close-panel-btn').addEventListener('click', () => {
      document.getElementById('right-panel').classList.add('hidden');
    });

    // Post Comment
    document.getElementById('post-comment-btn').addEventListener('click', () => {
      const taskId = document.querySelector('#task-details[data-task-id]')?.dataset.taskId;
      const text = document.getElementById('comment-input').value;
      if (taskId && text.trim()) {
        addComment(taskId, text);
      }
    });

    // Close Toast
    document.getElementById('close-toast').addEventListener('click', () => {
      document.getElementById('notification-toast').classList.remove('show');
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
      if (confirm('Are you sure you want to log out?')) {
        alert('Logged out successfully!');
      }
    });

    // Assignee Dropdown
    document.getElementById('assignee-toggle').addEventListener('click', () => {
      const dropdown = document.getElementById('assignee-dropdown');
      dropdown.classList.toggle('hidden');
    });

    // ====================== FILTER & SORT HANDLERS ======================
    // Filter Dropdown Toggle
    document.getElementById('filter-dropdown').addEventListener('click', function(e) {
      e.stopPropagation();
      const menu = this.querySelector('.dropdown-menu');
      menu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#filter-dropdown')) {
        document.querySelectorAll('#filter-dropdown .dropdown-menu').forEach(menu => {
          menu.classList.remove('show');
        });
      }
      if (!e.target.closest('#sort-dropdown')) {
        document.querySelectorAll('#sort-dropdown .dropdown-menu').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    });

    // Apply Filters Button
    document.getElementById('apply-filters-btn').addEventListener('click', () => {
      // Get selected filters
      state.filters.status = Array.from(document.querySelectorAll('input[data-filter="status"]:checked'))
        .map(el => el.value);
      
      state.filters.priority = Array.from(document.querySelectorAll('input[data-filter="priority"]:checked'))
        .map(el => el.value);
      
      state.filters.assignee = Array.from(document.querySelectorAll('input[data-filter="assignee"]:checked'))
        .map(el => el.value);
      
      // Update UI
      updateFilterPills();
      renderCurrentView();
      
      // Close dropdown
      document.querySelector('#filter-dropdown .dropdown-menu').classList.remove('show');
    });

    // Sort Dropdown
    document.getElementById('sort-dropdown').addEventListener('click', function(e) {
      e.stopPropagation();
      const menu = this.querySelector('.dropdown-menu');
      menu.classList.toggle('show');
    });

    // Sort Options
    document.querySelectorAll('#sort-dropdown .dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        state.sort = item.dataset.sort;
        updateSortButtonText();
        renderCurrentView();
        
        // Close dropdown
        document.querySelector('#sort-dropdown .dropdown-menu').classList.remove('show');
      });
    });

    // List View Filters
    document.getElementById('list-status-filter').addEventListener('change', function() {
      if (this.value) {
        state.filters.status = [this.value];
      } else {
        state.filters.status = [];
      }
      updateFilterPills();
      renderListView();
    });

    document.getElementById('list-priority-filter').addEventListener('change', function() {
      if (this.value) {
        state.filters.priority = [this.value];
      } else {
        state.filters.priority = [];
      }
      updateFilterPills();
      renderListView();
    });

    // View Search
    document.getElementById('view-search').addEventListener('input', function() {
      state.searchQuery = this.value.trim();
      renderCurrentView();
    });

    // Global Search
    document.getElementById('global-search').addEventListener('input', function() {
      state.searchQuery = this.value.trim();
      renderCurrentView();
    });

    // ====================== DRAG AND DROP ======================
    let draggedTask = null;
    let draggedOverList = null;

    // Add drag start event to all tasks
    document.addEventListener('dragstart', (e) => {
      if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        draggedTask = card;
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
          card.style.display = 'none';
        }, 0);
      }
    });

    document.addEventListener('dragend', (e) => {
      if (draggedTask) {
        draggedTask.classList.remove('dragging');
        draggedTask.style.display = 'block';
        draggedTask = null;
      }
      if (draggedOverList) {
        draggedOverList.classList.remove('droppable-over');
        draggedOverList = null;
      }
    });

    // Add drag over/leave/drop to lists
    ['list-todo', 'list-progress', 'list-review', 'list-done'].forEach(listId => {
      const list = document.getElementById(listId);
      
      list.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (draggedTask && !list.classList.contains('droppable-over')) {
          list.classList.add('droppable-over');
          draggedOverList = list;
        }
      });
      
      list.addEventListener('dragleave', () => {
        if (draggedOverList === list) {
          list.classList.remove('droppable-over');
          draggedOverList = null;
        }
      });
      
      list.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedTask) {
          const taskId = draggedTask.dataset.taskId;
          const newListId = list.id;
          
          // Move the task
          moveTask(taskId, newListId);
          
          // Move the DOM element (for immediate feedback)
          const container = list.querySelector('.space-y-4');
          container.appendChild(draggedTask);
        }
        if (draggedOverList) {
          draggedOverList.classList.remove('droppable-over');
          draggedOverList = null;
        }
      });
    });

    // ====================== INITIALIZATION ======================
    document.addEventListener('DOMContentLoaded', () => {
      // Render initial state
      renderProjects();
      renderTasks();
      renderListView();
      renderActivityFeed();
      
      // Set initial active project
      setActiveProject('p1');
      
      // Show welcome notification
      setTimeout(() => {
        showNotification('Welcome to Nexus', 'Enterprise-grade project management platform');
      }, 1000);
      
      // Initialize filters and UI
      updateFilterPills();
      updateSortButtonText();
      
      // Add enter key support for comment input
      document.getElementById('comment-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          document.getElementById('post-comment-btn').click();
        }
      });
      
      // Initialize with dashboard view
      switchView('dashboard');
    });
