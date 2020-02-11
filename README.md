# Projet d'étude - Parking GPS

#Installation:

Etape à suivre:

 - Cloner le git
 - Configurer le fichier ".env"
 - Utiliser la commande "composer install"
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.

## Initialisation de la BDD

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

### file: parking_relais.csv
```bash
php bin/console csv:import
```

### file: parking_saemes
```bash
php bin/console park:saemes
```

### file: gares_idf
```bash
php bin/console csv:gareidf
```

### file: ParkingsList
```bash
php bin/console csv:parklist
```


## Commande utile

Supprimer une migration:
```bash
php bin/console doctrine:migrations:version YYYYMMDDHHMMSS --delete
```



## Côté DEV

### Si vous souhaitez faire du JS / SASS

Pour faire du JS (React), il vous suffit de vous rendre dans: assets/js/app.js

Pour faire du SASS, il vous suffit de vous rendre dans: assets/css/app.scss

Pour utiliser WEBPACK:

```bash
yarn encore dev --watch

## CTRL + C pour arreter le process
```


