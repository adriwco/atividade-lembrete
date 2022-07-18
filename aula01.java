import javax.swing.*;
class aula01{
  public static void main(String args[]){
    String nome;
    nome = JOptionPane.showInputDialog("Digite o seu nome:");
    JOptionPane.showMessageDialog(null,"Nome digitado:\n"+nome);
    System.exit(0);
  }
}