public class aula04 {
  public static int soma1(int nro, int soma) {
    int s;
    if (nro == 100) {
      s = nro + soma;
    } else {
      s = soma1(nro + 1, nro + soma);
    }
    return s;
  }

  public static void main(String[] args) {
    int soma = soma1(1, 0);
    System.out.println("Soma: " + soma);
  }
}
