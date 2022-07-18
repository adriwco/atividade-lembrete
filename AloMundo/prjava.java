package AloMundo;

import javax.swing.*;
class prjava{
  public static void somatoria() {
    int s=0, vetor[]= new int [6];
    for(int i=1; i<vetor.length; i++){
      vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero "+i+" de 5 (somatorio)")); 
      s += vetor[i];
    }
    JOptionPane.showMessageDialog(null, "Somatorio: "+s);
  }
  public static int produtorio() {
    int p=1, vetor[]= new int [6];
    for(int i=1; i<vetor.length; i++){
      vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero "+i+" de 5 (produtorio)")); 
      p *= vetor[i];
    }
    return p;
  }
  public static void main(String[] args) {
    int p;
    somatoria();
    p = produtorio();
    JOptionPane.showMessageDialog(null, "Produtorio: "+p);
    System.exit(0);
  }
}