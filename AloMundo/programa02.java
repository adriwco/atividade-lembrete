package AloMundo;

class programa02{
  public static void main(String args[]) {
    int n1, n2, mod, div;
    double raiz, pot;
    String msg = "";
    n1 = Integer.parseInt(args[0]);
    n2 = Integer.parseInt(args[1]);
    mod = n1 % n2;
    div = (int)n1 / (int)n2;
    raiz = Math.sqrt(n1);
    pot = Math.pow(n1, n2);
    msg = "n1 = " + n1 + " n2 = " + n2 + "\n";
    msg = msg + "resto da divisao de n1 por n2 = " + mod + "\n";
    msg = msg + "quociente da divisao de n1 por n2 = " + div + "\n";
    msg = msg + "raiz quadrada de n1 = " + raiz + "\n";
    msg = msg + "potencia de n1 e n2 = " + pot;
    System.out.println(msg);
    System.exit(0);
    //java programa02 9 6
    //n1 = 9 n2 = 6
    //resto da divisao de n1 por n2 = 3
    //quociente da divisao de n1 por n2 = 1
    //raiz quadrada de n1 = 3.0
    //potencia de n1 e n2 = 531441.0
  }
}