# Utilisez l'image Node.js officielle
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel votre application écoute
EXPOSE 3001

# Démarrer l'application
CMD ["node", "index.js"]
