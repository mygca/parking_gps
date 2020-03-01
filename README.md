# Projet d'étude - Parking GPS

# Description du projet:



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
