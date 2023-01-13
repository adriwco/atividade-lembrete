package AloMundo;

import javax.swing.JOptionPane;

class pratica15 {
  public static void main(String[] args) {
    int n1, n2, multi = 1;
    char op = 0;
    String msg = "",
        msgEntr = "Digite 1 para saber o produto.\nDigite 2 para saber o produtorio (for).\nDigite 3 para saber o produtorio(while).\nDigite 4 para saber o produtorio(do/while)";
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero inteiro."));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero inteiro."));
    op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);
    switch (op) {
      case '1': {
        if (n1 >= 0 && n2 >= 0) {
          multi = n1 * n2;
          msg = msg + "Produto de " + n1 + " com " + n2 + " = " + multi + "\n\n";
        } else {
          JOptionPane.showMessageDialog(null, "Numero(s) Invalido(s).");
        }
        break;
      }
      case '2': {
        for (int i = 0; i <= n2; i = i + 1) {
          multi = multi * n1;
        }
        msg = msg + "Produtorio de " + n1 + " (" + n2 + " vezes) = " + multi + "\n\n";
        break;
      }
      case '3': {
        int i = 0;
        while (i <= n2) {
          multi = multi * n1;
          i = i + 1;
        }
        msg = msg + "Produtorio de " + n1 + " (" + n2 + " vezes) = " + multi + "\n\n";
        break;
      }
      case '4': {
        int i = 0;
        do {
          multi = multi * n1;
          i = i + 1;
        } while (i <= n2);
        msg = msg + "Produtorio de " + n1 + " (" + n2 + " vezes) = " + multi + "\n\n";
        break;
      }
      default:
        JOptionPane.showMessageDialog(null, "Opcao invalida.");
    }
    if (op >= '1' && op <= '4') {
      JOptionPane.showMessageDialog(null, msg);
    }
    System.exit(0);
  }
}