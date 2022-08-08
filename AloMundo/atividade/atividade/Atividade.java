package atividade;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Scanner;

public class Atividade {
  public static void main(String[] args) {
    // entrda de dados
    try (Scanner scanner = new Scanner(System.in)) {
      System.out.printf("Informe o nome do arquivo:\n");
      String caminhoArquivo = scanner.nextLine();
      // 2 streams de dados: entrada e saída (classes abstratas)
      InputStream is = null;
      OutputStream os = null;
      // cláusula try-catch-finally.
      try {
        // tribuir aos streams novas instâncias de FileStreams
        is = new FileInputStream(caminhoArquivo);
        os = new FileOutputStream("Copia de " + caminhoArquivo);
        // buffer de leitura com 1024 bytes
        byte[] buffer = new byte[1024];
        // método read() dentro de um loop de iteração para ler do arquivo fonte e
        // escrever na cópia
        int length;
        while ((length = is.read(buffer)) > 0) {
          os.write(buffer, 0, length);
        }
      } catch (Exception e) {
        // caso um erro seja encontrado
        System.out.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
      } finally {
        // fechar os 2 streams
        is.close();
        os.close();
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
