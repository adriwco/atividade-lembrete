package AloMundo;

import javax.swing.JOptionPane;

class progRepeticao{
  public static void main(String[] args) {
    int tabuada;
    char op=0;
    String msg="", msgEnter="Digite 1 repeticao for\nDigite 2 para repeticao while\nDigite 3 para repeticao do/while";
    tabuada=Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
    op=(JOptionPane.showInputDialog(msgEnter)).charAt(0);

    switch(op){
      case '1':{
        msg = msg + "Tabuada do " + tabuada + " pelo for: \n\n";
        for(int i=1; i<=10; i=i+1){
          msg = msg + tabuada + " x " + i + " = " + tabuada*i + "\n";
        }
        break;
      }
      case '2':{
        msg = msg + "Tabuada do " + tabuada + " pelo while: \n\n";
        int i = 1;
        while(i<=10){
          msg = msg + tabuada + " x " + i + " = " + tabuada*i + "\n";
          i=i+1;
        }
        break;
      }
      case '3':{
        msg = msg + "Tabuada do " + tabuada + " pelo do/while: \n\n";
        int i = 1;
        do{
          msg = msg + tabuada + " x " + i + " = " + tabuada*i + "\n";
          i=i+1;
        }while(i<=10);
      }
      default: JOptionPane.showMessageDialog(null, "Opcao invalida!");
    }

    if (op>='1' && op<='3'){
      JOptionPane.showMessageDialog(null, msg);
    }
    System.exit(0);
  }
}