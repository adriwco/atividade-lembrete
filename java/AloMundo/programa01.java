package AloMundo;

class programa01{
  public static void main(String args[]) {
    int NumInt;
    double NumReal, soma;
    char caracter;
    NumInt = Integer.parseInt(args[0]);
    NumReal = Double.parseDouble(args[1]);
    caracter = (args[2]).charAt(0);
    soma = (double)NumInt + NumReal;
    System.out.println((double)NumInt + " + " + NumReal + " = " + soma + " sinal " + caracter);
    System.exit(0);
  }
}