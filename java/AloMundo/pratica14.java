package AloMundo;

import javax.swing.*;
class pratica14{
  public static void main(String args[]){
    int n1,quo;
    double n2,pot;
    String msg="";
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero (inteiro):","Data input"));
    n2 = Double.parseDouble(JOptionPane.showInputDialog("Digite um numero(real):","Data input"));
    quo = n1 / (int)n2;
    pot = Math.pow(n1, n2);
    msg = "Quociente da divisao de "+n1+" por "+(int)n2+" = "+quo+"\n";
    msg = msg + "Potencia de "+n1+" pelo "+n2+" = "+pot;
    JOptionPane.showMessageDialog(null,msg);
    System.exit(0);
  }
}