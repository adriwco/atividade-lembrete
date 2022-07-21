import java.io.File;

/*Verifica caractericas do arquivo (dados do arquivo)*/

public class teste4 {
  public static void main(String[] args) {
    File arquivo = new File("teste1.txt");
    if (arquivo.exists()) {
      System.out.println("Nome do Arquivo: " + arquivo.getName());
      System.out.println("Caminho absoluto: " + arquivo.getAbsolutePath());
      System.out.println("Permissao de escrita?: " + arquivo.canWrite());
      System.out.println("Permissao de leitura?: " + arquivo.canRead());
      System.out.println("Tamanho: " + arquivo.length());
    } else {
      System.out.println("Ops! Esse arquivo nao existe.");
    }
  }
}
