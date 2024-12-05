// Importer le module HTTP de Node.js
const http = require("http");

// Créer le serveur
const server = http.createServer((req, res) => {
    // Définir le statut HTTP et le type de contenu
    res.writeHead(200, { "Content-Type": "text/plain" });
    
    // Envoyer la réponse
    res.end("Hello world!");
});

// Démarrer le serveur sur le port 3001
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
