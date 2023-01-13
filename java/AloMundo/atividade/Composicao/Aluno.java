package Composicao;

public class Aluno {
  public String nome;
  public String sobrenome;

  public Aluno(String nome, String sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  public void fazerExercicio(String exercicio) {
    System.out.println("Fazendo exercicio..." + exercicio);
  }
}
