package aplicacaoArvoreBinarias;

import javax.swing.JOptionPane;

public class mainABB {
  public static void main(String[] args) {
    ArvoreBinaria arv = new ArvoreBinaria();
    for (int i = 1; i <= 5; i++) {
      arv.inserirNo(Double.parseDouble(JOptionPane.showInputDialog("Digite o " + i + "° número real:")));
    }
    arv.exibirNo();
  }
}