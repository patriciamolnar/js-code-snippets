const button = document.getElementById('button');

button.addEventListener('click', async() => {
    const { loadContent } = await import('./app.js');
    loadContent();
});

// use live server to run project to avoid cors issues
// great tool for loading files only when needed, e.g. if user actually uses specific functionality