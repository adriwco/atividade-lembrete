//nome da classe
package AloMundo;

class MeuPrimeiroProgramaJava {
  // módulo principal com a entrada pela linha de comando
  public static void main(String entrada[]) {
    /* public deixa o procedimento público
    // static é porque nunca vai mudar
    // entre os parenteses tem os parametros que é um vetor chamado "entrada" do tipo string (conjunto de caracter), quando é somente um é char
    // declaração de variáveis (tipos primitivos): */
    int inteiro = 21;
    char caracter = 'F';
    double real = 1.77;
    String frase = "Adriano ";
    boolean VF = true;
    if (VF == true) {
      System.out
          .println("Eu sou o " + frase + "tenho " + inteiro + " anos de idade e tenho " + real + " metros de altura.");
    } else {
      System.out.println("Algo deu errado = " + caracter);
    }
    System.exit(0);
  }
}
