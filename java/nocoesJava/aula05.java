import javax.swing.JOptionPane;

public class aula05 {
  public static int pot(int base, int exp) {
    if (base == 0) {
      return 0;
    } else if (exp == 0) {
      return 1;
    } else {
      return pot(base, exp - 1) * base;
    }
  }

  public static void main(String[] args) {
    int b, e, p;
    JOptionPane.showMessageDialog(null, "Cálculo da Potência!");
    b = Integer.parseInt(JOptionPane.showInputDialog("Digite a base:"));
    e = Integer.parseInt(JOptionPane.showInputDialog("Digite a expoente:"));
    if (b < 0 || e < 0) {
      JOptionPane.showMessageDialog(null, "Valor digitado incorretamente!");
    } else {
      p = pot(b, e);
      JOptionPane.showMessageDialog(null, b + " elevado a " + e + " é igual a " + p);
    }
    System.exit(0);
  }
}