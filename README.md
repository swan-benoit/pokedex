# pokedex

### Lancement du projet

Le projet utilise node version 16 avec npm.

Si docker-compose est installé simplement lancer la commande 
```docker-compose up``` depuis le répertoire racine.

Sinon depuis le répertoire back lancer la commande 
``` npm i && npm run start```
et depuis le répertoire front la commande ```npm i && npm run start```

Désormais le back écoute à [http://localhost:5000/graphql](http://localhost:5000/graphql) et le front à [http://localhost:3000](http://localhost:3000)




### Si 5 devs rejoignent ton équipe demain et que ton application est en production, quelles sont les améliorations à apporter à l'environnement de Dev et pourquoi ?

1. Installer un pre-processeur css et une librairie de composant pour ne pas réinventer la roue
2. Mettre en place une CI pour éviter les régressions fonctionnelles
3. Mettre en place graphql codegen pour simplifier la mise à jour du schema graphql
4. Mettre en place un déploiement automatisé pour déployer facilement en prod et en pré prod
5. Installer un outil de qualité de code (SonarLint ou autre) pour limiter l'introduction de bug
6. Créer une configuration d'IDE commune pour s'assurer de l'uniformité du code source

