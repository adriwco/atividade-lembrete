import javax.swing.JOptionPane;

public class aula02 {
  public static void main(String[] args) {
    // entrada
    int numeros = 1 + Integer.parseInt(JOptionPane.showInputDialog("Quantos números? "));
    double array[] = new double[numeros], soma = 0, media = 0;

    // processamento
    for (int i = 1; i < array.length; i++) {
      array[i] = Double.parseDouble(JOptionPane.showInputDialog(i + "° número?"));
      soma += array[i];
    }
    media = soma / (numeros - 1);
    
    // saída
    JOptionPane.showMessageDialog(null, "A soma é " + soma + " e a média é " + media);
    System.exit(0);
  }
}
