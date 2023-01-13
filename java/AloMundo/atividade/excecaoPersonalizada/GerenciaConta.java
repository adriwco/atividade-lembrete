package excecaoPersonalizada;

import java.util.Scanner;

public class GerenciaConta {
  private float saldoAtual = 15000f;

  public static void main(String[] args) {
    try (Scanner inputDevice = new Scanner(System.in)) {
      System.out.print("Por favor, insira um valor acrescentado no seu saldo: ");
      float novoValor = inputDevice.nextFloat();
      try {
        float valorTotal = new GerenciaConta().AdicionaValor(novoValor);
        System.out.println("Valor total da conta = " + valorTotal);
      } catch (SaldoContaException e) {
        // tratamento da exceçao
        float fdAmount = e.getSaldoConta() - 20000;
        System.out.println("Agora, o saldo da sua conta é superior a 20.000, criando um FD de quantia: " + fdAmount);
        System.out.println("Valor da conta = " + 20000);
      }
      inputDevice.close();
    }
  }

  private float AdicionaValor(float montante) throws SaldoContaException {
    float total = saldoAtual + montante;
    if (total > 20000) {
      throw new SaldoContaException(total);
    }
    return total;
  }
}
