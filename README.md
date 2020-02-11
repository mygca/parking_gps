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

### Import de tout les CSV de Parking
```bash
php bin/console csv:parking
```

### file: Import des Train / Metro / RER / Tramway (A trier)
```bash
php bin/console csv:gareidf
```


## Commande utile

Supprimer une migration:
```bash
php bin/console doctrine:migrations:version YYYYMMDDHHMMSS --delete
```

Reset sa base de données:
```bash
php bin/console doctrine:database:drop --force
php bin/console d:d:c
php bin/console d:m:m
```
