package aplicacaoFila;

import javax.swing.JOptionPane;

class fila {
  int tamanho, inicio, fim, total;
  int vetor[];

  fila(int tam) {
    inicio = 0;
    fim = 0;
    total = 0;
    tamanho = tam;
    vetor = new int[tam];
  }

  public boolean filaVazia() {
    if (total == 0) {
      return true;
    } else {
      return false;
    }
  }

  public boolean filaCheia() {
    if (total >= tamanho) {
      return true;
    } else {
      return false;
    }
  }

  public void enfileirar(int elemento) {
    if (!filaCheia()) {
      vetor[fim] = elemento;
      fim = fim + 1;
      total = total + 1;
      if (fim >= tamanho) {
        fim = 0;
      }
    } else {
      System.out.println("Fila Cheia!");
    }
  }

  public int desenfileirar() {
    int desenfileirado = 0;
    if (filaVazia()) {
      System.out.println("Fila Vazia.");
    } else {
      desenfileirado = vetor[inicio];
      inicio = inicio + 1;
      total = total - 1;
      if (inicio >= tamanho) {
        inicio = 0;
      }
    }
    return desenfileirado;
  }

  public void elementoInicio() {
    if (!filaCheia()) {
      System.out.println("O primeiro elemento é " + vetor[inicio]);
    } else {
      System.out.println("Fila Vazia.");
    }
  }

  public void mostrarFila() {
    int aux;
    aux = inicio;
    for (int i = 1; i <= total; i++) {
      JOptionPane.showMessageDialog(null, "Elemento " + vetor[aux] + " posição " + i);
      aux = aux + 1;
      if (aux >= tamanho) {
        aux = 0;
      }
    }
  }
}
