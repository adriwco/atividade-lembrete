package Composicao;

public class Professor {
  public String nome;
  public String sobrenome;

  public Professor(String nome, String sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  public void explicar(String assunto) {
    System.out.println("Explicando: " + assunto);
  }
  // getters e setters
}
