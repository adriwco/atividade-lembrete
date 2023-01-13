import javax.swing.JOptionPane;

public class aula03 {
  public static int[] Bolha(int numeros[]) {
    final int n = numeros.length;
    int aux;
    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
          aux = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = aux;
        }
      }
    }
    return numeros;
  }

  public static void main(String[] args) {
    // entrada
    String msg = "";
    int quantArray = 1 + Integer.parseInt(JOptionPane.showInputDialog("Quantos números? "));
    int vet[] = new int[quantArray];

    // processamento
    for (int a = 1; a < vet.length; a++) {
      vet[a] = Integer.parseInt(JOptionPane.showInputDialog(a + "° número?"));
    }

    vet = Bolha(vet);
    for (int i = 0; i < vet.length; i++) {
      if (vet[i] == 0) {
        continue;
      }
      msg += vet[i] + " ";
    }

    // saída
    JOptionPane.showMessageDialog(null, msg);
    JOptionPane.showMessageDialog(null, "Bubble Sort! Tudo ordenado.\nLembre-se, tudo começa com 0.");
    System.exit(0);
  }
}