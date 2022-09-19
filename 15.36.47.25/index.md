Bienvenue sur l'application "images.bananapiano.be"

Ce serveur écoute sur les requetes entrantes sur le port 80.

Quand une requete entre sur ce serveur:
- Si l'url correspond au format "images.bananapiano.be/42"
  - Recuperer l'id de l'image depuis l'url images.bananapiano.be/:id
    - images.bananapiano.be/42 -> id = 42
  - Ouvrir la base de donnée (_database.csv) et chercher l'enregistrement correspondant à l'id
  - Si l'url contient des parametres supplémentaires "images.bananapiano.be/images/42?height=150&width=100"
    - Redimensionner l'image et la renvoyer dans la bonne taille