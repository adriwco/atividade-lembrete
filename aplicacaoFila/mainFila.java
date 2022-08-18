package aplicacaoFila;

import javax.swing.JOptionPane;

public class mainFila {
  public static void main(String[] args) {
    fila intFila = new fila(5);
    int entrada = 0;
    for (int i = 1; i <= 5; i++) {
      entrada = Integer.parseInt(JOptionPane.showInputDialog("Digite o " + i + "° valor inteiro: "));
      intFila.enfileirar(entrada);
    }
    intFila.mostrarFila();
    System.exit(0);
  }
}