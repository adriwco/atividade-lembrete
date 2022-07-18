package AloMundo;

import javax.swing.*;
class pr15{
  public static void main(String[] args) {
    int n1,n2,soma=0;
    char op=0;
    String msg="", msgEntr="Digite 1 para saber a soma.\nDigite 2 para saber a somatoria (for).\nDigite 3 para saber a somatoria(while).\nDigite 4 para saber a somatoria(do/while)";
    n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero inteiro."));
    n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero inteiro."));
    op = (JOptionPane.showInputDialog(msgEntr)).charAt(0);
    switch(op){
      case '1':{
        if(n1%2==0 && n2%2==0){
          soma = n1+n2;
          msg = msg+"A soma de "+n1+" com "+n2+" = "+soma+"\n\n";
        }else{
          JOptionPane.showMessageDialog(null, "Numero(s) Invalido(s).");
        }
        break;
      }
      case '2':{
        for(int i=0; i<=n2; i=i+1){
          soma = soma + n1;
        }
        msg = msg + "A somatoria de "+n1+" ("+n2+" vezes) = "+soma+"\n\n";
        break;
      }
      case '3':{
        int i=0;
        while(i<=n2){
          soma = soma + n1;
          i=i+1;
        }  
        msg = msg + "A somatoria de "+n1+" ("+n2+" vezes) = "+soma+"\n\n";
        break; 
      }
      case '4':{
        int i=0;
        do{
          soma = soma + n1;
          i=i+1;
        }while(i<=n2);
        msg = msg + "A somatoria de "+n1+" ("+n2+" vezes) = "+soma+"\n\n";
        break;
      }
      default: JOptionPane.showMessageDialog(null, "Opcao invalida.");
    }
    if(op>='1' && op<='4'){
      JOptionPane.showMessageDialog(null, msg);
    }
    System.exit(0);
  }
}