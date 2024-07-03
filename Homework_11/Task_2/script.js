document.getElementById("download").addEventListener("click", async () => {
    try {
        const url = 'http://127.0.0.1:5000/authorslist';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Incorrect response');
        }
        const authors = await response.json();

        const authorList = document.getElementById('authors');
        authorList.innerHTML = ''; 
        document.getElementById("download").style.display = 'none';
        authors.forEach(author => {
            const liElement = document.createElement('li');
            liElement.textContent = author.name;
            authorList.appendChild(liElement);
            
        });
    } catch (error) {
        console.error(error);
    }
});