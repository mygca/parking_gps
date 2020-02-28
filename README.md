# Projet HETIC - Hello Parkings

## TEAM

  - Gena Nunes : UX/UI Designer
  - Mathias Vincelet: UX/UI Designer
  - Yannis Rezzoug: Développeur Back
  - Christina Stephan: Développeur Front
  - Amanda Tan: Développeur Front


## BACK

#Installation:

Etape à suivre:

 - Cloner le git
 - Configurer le fichier ".env"
 - Utiliser la commande "composer install"
 
 
 /!\ Ayez une version de PHP décente.
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.

### Initialisation de la BDD

Créer la base de données:
```bash
php bin/console d:d:c
```

Créer les tables:
```bash
php bin/console d:m:m
```


### Importation des données

Concernant l'import des CSV dans la base de données, plusieurs commandes sont à votre disposition:

### Import de tout les CSV de Parking
```bash
php bin/console csv:parking
```

### file: Import des Train / Metro / RER / Tramway (A trier)
```bash
php bin/console csv:gareidf
```


## Commandes utiles

Supprimer une migration:
```bash
php bin/console doctrine:migrations:version YYYYMMDDHHMMSS --delete
```

Reset sa base de données:
```bash
php bin/console doctrine:database:drop --force
php bin/console d:d:c
php bin/console d:m:m
php bin/console c:c

```


## FRONT

### REACT directory

Go to the react directory to check the front-end code

Runs the app in the production mode:

```bash
yarn encore dev --watch

```

