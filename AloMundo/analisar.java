package AloMundo;

import javax.swing.JOptionPane;
class ap{
  public static void main(String[] args) {
    String nomes="", vetor[]=new String[6];
    for(int i=1; i<vetor.length; i++){
      vetor[i] = JOptionPane.showInputDialog("Titulo "+i+" de 5 :");
      nomes += "Titulo ("+i+" de 5) : " + vetor[i] +"\n";
    }
    JOptionPane.showMessageDialog(null,nomes);
    System.exit(0);
  }
}