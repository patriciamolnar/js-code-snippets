export const loadContent = () => {
    const app = document.getElementById('app');
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Hello World!';
    app.appendChild(paragraph);
}