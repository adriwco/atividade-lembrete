package AloMundo;

import javax.swing.*;
class pratica16{
  public static void somatoria() {
    int s=0, vetor[]= new int [5];
    for (int i=0; i<vetor.length; i++){
      vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero "+i+" de 5 (Somatorio)"));
      s += vetor[i];
    }
    JOptionPane.showMessageDialog(null, "A somatoria: "+s);
  }
  public static int produtorio() {
    int p=1, vetor[]= new int [5];
    for (int i=0; i<vetor.length; i++){
      vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero "+i+" de 5 (Produtorio)"));
      p *= vetor [i];
    }
    return p;
  }
  public static void main(String[] args) {
    int a;
    somatoria();
    a = produtorio();
    JOptionPane.showMessageDialog(null, "Produtorio: "+a);
  }
}