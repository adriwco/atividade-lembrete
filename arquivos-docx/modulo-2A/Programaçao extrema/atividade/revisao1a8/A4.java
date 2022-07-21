package revisao1a8;

import java.util.Scanner;

public class A4 {
  public static void main(String[] args) {
    String email;
    String usuario, dominio;
    try (Scanner sc = new Scanner(System.in)) {
      System.out.println("Entrada");
      email = sc.nextLine();
    }
    int indice = email.indexOf('@');
    int indice2 = email.lastIndexOf('@');
    if (indice > 0 && indice == indice2) {
      usuario = email.substring(0, indice);
      dominio = email.substring(indice + 1);
      System.out.println("Usuario: " + usuario);
      System.out.println("Dominio: " + dominio);
      if (email.contains(".br")) {

      }
    }
  }
}
