public class Recursividade {
  public static void main(String[] args) {
    imprimirSequencia(100);
  }

  public static void imprimirSequencia(Integer x) {
    if (x.equals(0))
      return;
    System.out.println(x);
    imprimirSequencia(x - 1);
  }
}
