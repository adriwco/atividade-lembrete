package revisao1a8;

import java.util.Scanner;

public class Superlive2 {
  public static void main(String[] args) {
    double c, l, h, volume;
    try (Scanner sc = new Scanner(System.in)) {
      System.out.println("Entrada:");
      c = sc.nextDouble();
      l = sc.nextDouble();
      h = sc.nextDouble();
    }
    volume = c * l * h;
    System.out.println("Volume: " + volume);
  }
}
