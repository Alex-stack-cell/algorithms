int hauteurTriangleCible = 0;
int hauteurTriangleActuelle = 0;
int ligneNumero = 0;
int largeurTriangle = 0;
Console.WriteLine("Entrez la hauteur de votre triangle");
hauteurTriangleCible = int.Parse(Console.ReadLine());
while (hauteurTriangleCible> hauteurTriangleActuelle)
{
  if (ligneNumero == largeurTriangle)
  {
    Console.WriteLine("A");
  }
  else if (ligneNumero > largeurTriangle)
  {
    largeurTriangle += 1;
    for (int i = 0; i <= ligneNumero; i++)
    {
      if(i< ligneNumero)
      {
        Console.Write("A");
      }
      else
      {
        Console.WriteLine("A");
      }
    }
  }
  hauteurTriangleActuelle += 1;
  ligneNumero += 1;
}
