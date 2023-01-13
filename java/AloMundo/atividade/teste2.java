import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

/*Leitura de arquivos: classes FileReader e BufferedReader */

public class teste2 {
  public static void main(String[] args) {
    try (Scanner scanner = new Scanner(System.in)) {
      System.out.printf("Informe o caminho ansoluto do arquivo text:\n");
      String caminhoArquivo = scanner.nextLine();

      try {
        FileReader arquivo = new FileReader(caminhoArquivo);
        BufferedReader reader = new BufferedReader(arquivo);

        String linha = reader.readLine();// lê a primeira linha
        while (linha != null) {
          System.out.printf("%s\n", linha);
          linha = reader.readLine();// Lê da segunda até a última linha
        }
        arquivo.close();
      } catch (IOException e) {
        System.out.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
      }
    }
    System.out.println();
  }
}
