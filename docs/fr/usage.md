# Manuel d'utilisation
## 1 Pour commencer
Visitez [Bing](https://bing.com/search?q=pagetual) et faites défiler la page, la page suivante sera automatiquement assemblée.

## 2 Séparateur de page
Lorsque vous tournez les pages, il y aura des barres d'espacement entre les pages. L'icône Tai Chi à gauche de la barre d'espacement permet de revenir en haut de la page, et l'icône à droite permet d'aller à la fin de la page. Le mot "Page" au milieu est le lien de la page suivante.
### 2.1 Expérience immersive sans couture
La barre de séparation de page peut être masquée sur la page de configuration. Des expériences immersives peuvent être obtenues en masquant les séparateurs et en ajoutant des barres latérales.
### 2.2 Numéro de page personnalisé
S'il y a un `pageNum` défini dans la règle actuelle. Vous pouvez cliquer sur le numéro après `Page` pour saisir un numéro de page afin de sauter à cette page.
### 2.3 Arrêter le téléavertisseur
Cliquer sur la barre de séparation de page peut arrêter la pagination.

## 3 Menu de commandes
Cliquez sur l'icône Tampermonkey et vous verrez trois options sous "Pagetual".
### 3.1 Configurer
Cliquez pour accéder à la page de configuration, où se trouvent toutes les configurations personnelles et la personnalisation des règles.
### 3.2 Désactiver sur le site
Cliquez pour désactiver Pagetual sur le site web actuel.
### 3.3 Forcer à joindre
Cliquez ici si la règle intelligente est incorrecte. Le script activera le mode de fusion forcée, tout le contenu de la page suivante sera fusionné au pied de page si vous choisissez `join full body`, sinon Pagetual chargera le contenu dynamique dans un iframe et les renverra.
### 3.4 Mettre à jour les règles en ligne
Cliquez pour mettre à jour les éléments de règle que vous avez importés en ligne, et Pagetual mettra automatiquement à jour les règles en ligne tous les deux jours par défaut.

## 4 Paramètres de Personnalisation
Après être allé sur la page de configuration, vous pouvez effectuer des réglages personnels, tels que la valeur de transparence du séparateur, l'écriture de l'historique, l'ouverture d'une nouvelle page d'onglet, et si un double-clic doit masquer le séparateur, etc.

Vous pouvez importer des liens de règles écrits par d'autres personnes, ou vous pouvez simplement personnaliser les règles dans la boîte de saisie par vous-même. Les règles provenant d'un lien supportent le tri et la mise à jour à chaud. Cliquez sur les flèches haut et bas devant le lien pour trier, et cliquez sur l'heure de mise à jour pour actualiser les règles.
### 4.1 Écrire l'historique
Une fois cette option activée, Pagetual écrira l'URL de la page suivante dans l'historique à chaque fois que la page est tournée, de sorte que lorsque vous cliquez sur le lien et revenez à la page précédente, il reviendra au numéro de page que vous avez consulté la dernière fois.
### 4.2 Ouvrir un nouvel onglet
Après avoir activé cette option, tous les liens ajoutés à la page actuelle seront ouverts dans de nouveaux onglets.
### 4.3 Pré-charger la page suivante pour accélérer la navigation
Une fois ouverte, lors de la lecture de la page actuelle, Pagetual pré-chargera à l'avance toutes les images de la page suivante.

## 5 [Règles personnalisées](/rule.html)
![Règles personnalisées](https://s3.bmp.ovh/imgs/2024/01/10/fa4f00c3e9f77878.gif)
### 5.1 Capture visuelle
Après avoir cliqué sur `Modifier la règle pour l'actuel`, une boîte bleue apparaîtra sur la page actuelle en suivant la souris. À ce moment, cliquez sur l'élément correspondant pour capturer le contenu que vous souhaitez assembler et le convertir en code sélecteur.
### 5.2 Ajuster le sélecteur
Après avoir sélectionné le contenu du corps, survolez le code du sélecteur pour développer le texte entier, vous pouvez cliquer pour passer au nœud parent. Lorsque vous saisissez manuellement un sélecteur dans la zone de saisie, vérifiez l'élément correspondant du sélecteur en cliquant sur le bouton de vérification `√`.
### 5.3 Commencer l'édition
Lorsque vous êtes prêt, cliquez simplement sur l'icône en forme de crayon pour accéder à la page de configuration et commencer à modifier la règle.
### 5.4 Votre première règle personnalisée
Par exemple
```json
   {
     "name":"beauty", // nom de la règle
     "url":"^https://www\.beautyxxx\.com/", // régularité de correspondance correspondant à l'URL de la page
     "pageElement":"p>img" // L'élément que vous souhaitez insérer dans la page suivante
   }
```
D'autres éléments peuvent être ajoutés au besoin, tels que "sélecteur pour le bouton de page suivante", "méthode de capture des éléments", "intervalle de temps de changement de page", etc.
### 5.5 Déplacer la fenêtre du menu
Faites glisser le titre du menu pour déplacer la fenêtre du menu.
### 5.6 Mettre en pause l'exploration visuelle
Cliquez sur l'icône Tai Chi sur le côté gauche de la barre de titre du menu pour mettre en pause l'exploration visuelle.
### 5.7 Édition rapide
Cliquez sur l'icône 🔽 ci-dessous pour ouvrir la fonction d'édition rapide, vérifiez et copiez le sélecteur via la zone de saisie du sélecteur ci-dessus, collez-le à l'attribut correspondant, et cliquez sur l'icône de sauvegarde une fois terminé.
