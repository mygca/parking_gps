# Projet HETIC - Hello Parkings

# **TEAM**

  - Gena Nunes : UX/UI Designer
  - Mathias Vincelet: UX/UI Designer
  - Yannis Rezzoug: Développeur Back
  - Christina Stephan: Développeur Front
  - Amanda Tan: Développeur Front


# **BACK**

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


# **FRONT**

### REACT directory

Go to the react directory to check the front-end code

### Install the project:

```bash
git clone
composer install
```

### Install the database:

```bash
# Configuring the Database .env
# The database connection information is stored as an environment variable called DATABASE_URL. For development, you can find and customize this inside .env
# customize this line!
# DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"
php bin/console d:d:c
php bin/console d:m:m
php bin/console c:c
```

### Import the tables:

Import parkings tables
```bash
php bin/console csv:parking
```

Import gares tables
```bash
php bin/console csv:gareidf
```

### Runs the app in the development mode:
```bash
yarn install

```
Open http://localhost:8000 to view it in the browser.


### Runs the app in the production mode:

```bash
yarn encore dev --watch

```

