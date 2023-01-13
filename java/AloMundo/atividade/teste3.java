import java.io.File;
import java.io.IOException;

/*Criar novo arquivo ou verificar a existencia*/

public class teste3 {
  public static void main(String[] args) {
    try {
      File arquivo = new File("teste1.txt");
      if (arquivo.createNewFile()) {
        System.out.println("File created: " + arquivo.getName());
      } else {
        System.out.println("Arquivo já existe.");
      }
    } catch (IOException e) {
      System.out.println("Ops! deu erro.");
      e.printStackTrace();
    }
  }
}
