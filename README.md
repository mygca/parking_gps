# Projet d'étude - Parking GPS

# Description du projet:

Tout d'abord je tiens à préciser les membres de l'équipe, ainsi que leur fonction:

### Composition de l'équipe 10 : 
- Gena Nunes: UX/UI designer
- Mathias Vincelet: UX/UI designer
- Christina Stephan: Développeur Front-End
- Amanda Tan: Développeur Front-End
- Yannis Rezzoug: Développeur Back-End

### Objectif du projet:

Mise en place d'une plateforme afin d'indiquer des parkings en banlieue parisienne durant les JO 2024 qui auront lieu à Paris.
Le but étant de désengorger les routes de Paris et de privilégier les transports en commun.

### Technologie utilisée:

- PHP (Symfony 4)
- API Platform
- Javascript (ReactJS)
- HTML (Twig)
- CSS (SASS)

### Architecture (temporaire) de la BDD: 

![Image description](https://zupimages.net/up/20/09/6sk2.png)

**Table "Parking":**
*Tous les champs compris proviennent de nos CSV comprennant les données de parking*

**Table "Gares_IDF":**
*Tous les champs compris proviennent de notre CSV comprennant les données de tous les réseaux féroviaires proposés par la RATP et la SNCF.*

**Table "Favorite":**
*Cette table permet de stocker l'ID du Parking et l'ID du user.*

**Table "User":**
*Cette table permet de stocker les données d'un utilisateur lors de son inscription.*


Toutes ces données sont susceptibles d'être modifié selon leurs pertinences.
# Installation:

Etape à suivre:

 - Cloner le git
 - Configurer le fichier ".env"
 - Utiliser les commande:
 ```bash
 composer install
 yarn install
 ```
 
 /!\ Ayez une version de PHP décente.
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.
 
## Démarrer le serveur
```bash
symfony server:start
```

## Créer et inserer les datas (Optionnel)

J'ai synthétisé toute les commandes afin d'en utiliser qu'une seule.
Les étapes:
- Drop de la DB
- Création de la DB
- Insertion des données via les CSV

La commande:
```bash
php bin/console reset:db
```

## Initialisation de la BDD (Manuellement)

Créer la base de données:
```bash
php bin/console d:d:c
```

Créer les tables:
```bash
php bin/console d:m:m
```

## Importation des données

Concernant l'import des CSV dans la base de données, plusieurs commandes sont à votre disposition:

### file: Import des Trains et RER
```bash
php bin/console csv:gareidf
```

### Import de tout les CSV de Parking associés aux Gares
```bash
php bin/console csv:parking
```


## Commande utile

Supprimer une migration:
```bash
php bin/console doctrine:migrations:version YYYYMMDDHHMMSS --delete
```


# Expertise Back-End 


