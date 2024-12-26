let toolsData = [];

  function applyTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();

    fetchTools();

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (event) => {
      searchTools(event.target.value);
    });

    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        searchInput.focus();
      }
    });
  });

  async function fetchTools() {
    const response = await fetch('tools.json');
    toolsData = await response.json();
    renderTools(toolsData);
  }

  function renderTools(data) {
    const container = document.getElementById('tools-container');
    container.innerHTML = '';
    data.forEach(tool => {
      const toolCard = document.createElement('a');
      toolCard.href = tool.link;
      toolCard.target = "_blank";
      toolCard.classList.add('flex', 'mb-6', 'tool-card', 'rounded-lg', 'shadow', 'hover', 'transition');

      const cardContent = document.createElement('div');
      cardContent.classList.add('p-6', 'items-baseline', 'flex', 'flex-col', 'rounded-lg');
      
      const toolTitle = document.createElement('h3');
      toolTitle.classList.add('text-lg', 'font-semibold', 'leading-none', 'tracking-tight', 'mb-3');
      toolTitle.textContent = tool.name;
      
      const toolDesc = document.createElement('p');
      toolDesc.classList.add('mb-5', 'flex-1', 'text-base', 'font-light', 'text-muted');
      toolDesc.textContent = tool.description;
      
      const button = document.createElement('button');
      button.classList.add('inline-flex', 'items-center', 'justify-center', 'whitespace-nowrap', 'rounded-md', 'text-sm', 'font-medium', 'ring-offset-background', 'transition-colors', 'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-blue-500', 'focus-visible:ring-offset-2', 'disabled:pointer-events-none', 'disabled:opacity-50', 'border', 'border-input', 'bg-background', 'hover:bg-blue-100', 'hover:text-blue-800', 'h-8', 'px-4', 'py-2');
      button.textContent = 'Try it';

      cardContent.appendChild(toolTitle);
      cardContent.appendChild(toolDesc);
      cardContent.appendChild(button);
      toolCard.appendChild(cardContent);
      
      container.appendChild(toolCard);
    });
  }

  function searchTools(query) {
    if (!toolsData.length) return;
    const filteredTools = toolsData.filter(tool =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
    );
    renderTools(filteredTools);
  }
