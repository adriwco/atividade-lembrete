package aplicacaoFila;

import javax.swing.JOptionPane;

//Situação: algoritmo que recebe do usuário dez números inteiros para armazenar apenas os números pares numa Fila com capacidade de dez elementos e mostra os números da Fila.

public class mainFila {
  public static void main(String[] args) {
    fila intFila = new fila(10);
    int entrada = 0;
    for (int i = 1; i <= 10; i++) {
      entrada = Integer.parseInt(JOptionPane.showInputDialog("Digite o " + i + "° valor inteiro: "));
      if (entrada % 2 == 0) {
        intFila.enfileirar(entrada);
      }
    }
    intFila.mostrarFila();
    System.exit(0);
  }
}