package AloMundo;

import javax.swing.*;
class ap2{
  public static void somatorio(int vetor[]) {
    int s=0;
    for(int i=0; i<vetor.length; i++){
      s += vetor[i];
    }  
    JOptionPane.showMessageDialog(null, "Somatorio: "+s);
  }
  public static int produtorio(int vetor[]) {
    int p=1;
    for(int i=0; i<vetor.length; i++){
      p *= vetor[i];
    }
    return p;
  }
  public static void main(String[] args) {
    int p=0, vetor[]= new int [5];
    for(int i=0; i<vetor.length; i++){
      vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero "+i+" de 5 (somatorio e produtorio)")); 
    }
    somatorio(vetor); 
    p = produtorio(vetor); 
    JOptionPane.showMessageDialog(null, "Produtorio: "+p);
    System.exit(0);
  }
}