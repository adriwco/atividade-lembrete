package Composicao;

import java.util.ArrayList;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    Aluno aluno1 = new Aluno("Aluno1", "de Oliveira");
    Aluno aluno2 = new Aluno("Aluno2", "da Silva");

    List<Aluno> alunos = new ArrayList<Aluno>();
    alunos.add(aluno1);
    alunos.add(aluno2);

    Professor professor = new Professor(" Descomplica", "da Silva");

    Aula aula = new Aula(professor, alunos);

    aula.acontecer();
  }
}
