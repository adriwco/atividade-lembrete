package AloMundo;

import javax.swing.*;
class progMod{
  public static void soma() {
    int n1, n2;
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero"));
    JOptionPane.showMessageDialog(null, "A soma: "+(n1+n2));
  }
  public static void subtracao(int x, int y) {
    int s;
    s = x - y;
    JOptionPane.showMessageDialog(null, "A diferenca: "+s);
  }
  public static int produto() {
    int n1,n2;
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero"));
    return (n1*n2);
  }
  public static double divisao(int x, int y) {
    double d;
    d =(double)x / (double)y;
    return d;
  }
  public static void main(String[] args) {
    int n1,n2,s;
    double r;
    soma();
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero"));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero"));
    subtracao(n1,n2);
    s = produto();
    JOptionPane.showMessageDialog(null, "O produto: " + s);
    r = divisao(n1,n2);
    JOptionPane.showMessageDialog(null, "A divisao: " + r);
    System.exit(0);
  }
}