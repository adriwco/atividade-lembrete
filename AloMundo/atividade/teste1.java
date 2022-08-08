import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

/*Escrita de arquivos: classes FileWriter e PrintWriter */

public class teste1 {
  public static void main(String[] args) throws IOException {
    try (Scanner scanner = new Scanner(System.in)) {
      System.out.println("Informe o número de linhas do arquivo:\n");
      int numeroLinhas = scanner.nextInt();

      FileWriter arquivo = new FileWriter("teste1.txt");
      PrintWriter writer = new PrintWriter(arquivo);

      for (int i = 1; i <= numeroLinhas; i++) {
        writer.printf("Esta e a linha de numero " + i + "%n");
      }
      arquivo.close();
    }
    System.out.printf("Arquivo escrito com sucesso!");
  }
}