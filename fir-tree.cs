const char TRONC = '|';
const char ETOILE = '*';
int nbEspace = 0;
int nbEtoile = 0;
int hauteurSapin = 0;
Console.WriteLine("Entrez la hauteur du sapin");
hauteurSapin = int.Parse(Console.ReadLine());
Console.ForegroundColor = ConsoleColor.Green;
for (int hauteurActuelle = 1; hauteurActuelle<= hauteurSapin; hauteurActuelle++)
{
  // Construction des niveaux jusqu'au tronc non inclus 
  if(hauteurActuelle<hauteurSapin)
  {
    nbEspace = hauteurSapin - hauteurActuelle; 
    nbEtoile = 2 * (hauteurSapin - (hauteurSapin-hauteurActuelle)) - 1; 
    for (int i = 0; i <= nbEtoile; i++)
    {
      if (i == 0)
      {
        for (int j = 0; j < nbEspace; j++)
        {
          Console.Write(" ");
        }
      }
      else if (i < nbEtoile)
      {
        Console.Write(ETOILE);
      }
      else
      {
        Console.WriteLine(ETOILE);
      }
    }
  } 
  else
  {
    //niveau associé au TRONC
    nbEspace = (nbEtoile / 2) + 1 ; 
    for (int i = 0; i <= nbEspace; i++) // espace à gauche et à droite donc il faut au total 6
    {
      if(i==nbEspace)
      {
        Console.Write(TRONC);
      }
      else
      {
        Console.Write(" ");
      }
    }
  }
}