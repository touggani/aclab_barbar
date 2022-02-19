# Projet AcLab - Master III - BarBar

## A propos

Barbar est un projet d'application mobile permettant de mettre en lien des étudiants avec des bars. Des événements sont alors proposés par les bars selon le BDE auquel l'étudiant appartient et celui-ci peut s'inscrire à l'événement.

Ce projet a été créé dans le cadre du Master III de l'Université Catholique de Lille pour la matière Ac'Lab.

## Technologies

Nous avons divisé le projet en deux en créant un front et une api.

### Symfony couplé à API Platform pour l'API

Symfony est un framework PHP français puissant, sécurisé et possédant une grande communauté.

Son module API Platform permet de créer des API simplement et rapidement via un système d'annotations directement sur les entités créées. L'API se génère donc toute seule avec les routes GET, POST, PUT et DELETE pour chaque table de la base de données.

### React Native pour le front

React Native est un framework javascript permettant la création d'applications mobiles cross-platform simplement et via un système de composants facilement maniables et réutilisables. Ce framework a été créé par Facebook (Meta) et est aujourd'hui un des plus utilisés sur le marché.

## Sécurisation des routes

La configuration d'un token JWT a été mise en place afin d'authentifier l'utilisateur à la connexion et également afin d'empêcher l'appel à certaines routes sans être connecté au préalable.

Lors de la connexion d'un utilisateur, l'API va renvoyer au front un objet semblable à celui ci-dessous :

```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDUyNzAzMTEsImV4cCI6MTY0NTI3MzkxMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiVGVzdCIsImlkIjoxfQ.GfLxcvg23X9nGZ75hGJBzLA5BCCJ-9Oa-MySqGr6dwwoERvoMH2uc_tcJkj05hNz1FG3MoV5xRJP1Xj-4OlZ8DHsaibdLFzQNW-lYnLTf7TryqCJckRwIb2Ez2Rp9Y0hgjoB5PxSkfx3XhQRAxVvu4zxO7ee4VF7srIBG1E8Cd6TDZvFpgDl7fUVmQ0nHFyxHn6YWDK5zFzrTj8qXlB9Te06-eRhzJhuu-qhEKDt-vhMqE0qa-wTW_ieeggdqbVTjreNDyKau_E_PWsuFCneiFyQ67XWHCWJSggIGYNkoqz5RuNekIITdT2rl5CTrWeHa9zo5eKCJhzPYaL-89gMaA"
}
```

Ce token sera alors utilisé pour accéder à certaines ressources, en ajoutant le code ci-dessous dans les Headers de la requête API :

```json
{
  "Auhtorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDUyNzAzMTEsImV4cCI6MTY0NTI3MzkxMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiVGVzdCIsImlkIjoxfQ.GfLxcvg23X9nGZ75hGJBzLA5BCCJ-9Oa-MySqGr6dwwoERvoMH2uc_tcJkj05hNz1FG3MoV5xRJP1Xj-4OlZ8DHsaibdLFzQNW-lYnLTf7TryqCJckRwIb2Ez2Rp9Y0hgjoB5PxSkfx3XhQRAxVvu4zxO7ee4VF7srIBG1E8Cd6TDZvFpgDl7fUVmQ0nHFyxHn6YWDK5zFzrTj8qXlB9Te06-eRhzJhuu-qhEKDt-vhMqE0qa-wTW_ieeggdqbVTjreNDyKau_E_PWsuFCneiFyQ67XWHCWJSggIGYNkoqz5RuNekIITdT2rl5CTrWeHa9zo5eKCJhzPYaL-89gMaA"
}
```

## Accès

Le git de l'API se trouve au lien suivant : https://github.com/vt-gianni/BarbarAPI

Toute son installation est définie dans son READme et l'API a même été hébergée via Heroku.

Les sources du front se trouvent dans le git actuel à l'adresse suivante : https://github.com/touggani/aclab_barbar/tree/main/barbarmobile

### Installation et utilisation du front

#### PREREQUIS

Il vous faudra les outils suivants :

- La commande git
- La commande npm
- L'application expo go sur votre téléphone (application gratuite sur le Play Store et l'App Store)
- Une connexion au même réseau wifi sur votre PC et votre smartphone

#### ETAPES

Récupération du projet

```
git clone git@github.com:touggani/aclab_barbar.git
```

Déplacement dans le dossier du projet

```
cd barbarmobile
```

Installation des dépendances


```
npm i
```

Lancement du projet


```
npm start
```

Test du projet

Veuillez scanner le QRCode via l'application Expo Go si vous êtes sous Android ou via l'appareil photo si vous êtes sous iOS.
