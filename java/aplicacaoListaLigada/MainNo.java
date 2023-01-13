package aplicacaoListaLigada;

import javax.swing.JOptionPane;

public class MainNo {
  public static void main(String[] args) {
    ListaLigada intLista = new ListaLigada();
    int num;
    for (int i = 1; i <= 10; i++) {
      num = Integer.parseInt(JOptionPane.showInputDialog("Digite o " + i + "° número inteiro:"));
      if (num % 3 == 0) {
        intLista.InserirFinal(new No(num));
      }
    }
    intLista.MostrarLista();
    System.exit(0);
  }
}