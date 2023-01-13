package AloMundo;

import javax.swing.*;
class progDecisao{
  public static void main(String[] args) {
    int num;
    char op=0;
    String msg="", msgEntr="Digite 1 para par/impar\nDigite 2 para positivo/negativo";
    num = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
    op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);
    switch(op){
      case '1':{
        if(num%2==0){
          msg = msg + num + " numero par.\n";
        }
        else{
          msg = msg + num + " numero impar.\n";
        }
        break;
      }
      case '2':{
        if(num>0){
          msg = msg + num + " numero positivo.\n";
        }
        else{
          msg = msg + num + " numero negativo.\n";
        }
        break;
      }
      default: JOptionPane.showMessageDialog(null, "Opcao invalida!");
    }
    if(op=='1'||op=='2'){
      JOptionPane.showInternalMessageDialog(null, msg);
    }
    System.exit(0);
  }
}