package aplicacaoPilha;

import javax.swing.JOptionPane;

public class mainPilha {
  public static void main(String[] args) {
    pilha intPilha = new pilha(5);
    int entrada;
    for (int i = 1; i <= 5; i++) {
      entrada = Integer.parseInt(JOptionPane.showInputDialog("Digite um valor inteiro:"));
      intPilha.emplilhar(entrada);
    }
    intPilha.mostrarPilha();
    System.exit(0);
  }
}
