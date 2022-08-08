package Composicao;

import java.util.List;

public class Aula {
  private Professor professor;
  private List<Aluno> alunos;

  public Aula(Professor professor, List<Aluno> alunos) {
    this.professor = professor;
    this.alunos = alunos;
  }

  public void acontecer() {
    for (Aluno aluno : this.alunos) {
      System.out.println("Professor" + this.professor.nome + " explica para " + aluno.nome);
    }
  }
  // getters e setters

}
