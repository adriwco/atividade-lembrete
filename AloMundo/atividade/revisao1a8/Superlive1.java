package revisao1a8;

import java.util.Scanner;

public class Superlive1 {
  public static void main(String[] args) {
    float salario;
    try (Scanner sc = new Scanner(System.in)) {
      System.out.println("Digite o salario: ");
      salario = sc.nextFloat();
    }
    salario = salario * 1.15f;

    System.out.println("Novo salario: " + salario);
  }
}
