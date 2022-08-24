package aplicacaoArvoreBinarias;

class BIntNo {
  Double valor;
  BIntNo esq, dir;

  BIntNo(Double novoValor) {
    valor = novoValor;
  }
}

class ArvoreBinaria {
  BIntNo raiz;

  private BIntNo inserir(BIntNo arvore, Double novoNo) {
    if (arvore == null) {
      return new BIntNo(novoNo);
    } else {
      if (novoNo < arvore.valor) {
        arvore.esq = inserir(arvore.esq, novoNo);
      } else {
        arvore.dir = inserir(arvore.dir, novoNo);
      }
    }
    return arvore;
  }

  public void inserirNo(Double novoValor) {
    raiz = inserir(raiz, novoValor);
  }

  private void exibirEsquerdo(BIntNo arv) {
    if (arv != null) {
      exibirEsquerdo(arv.esq);
      System.out.println(arv.valor);
    }
  }

  private void exibirDireito(BIntNo arv) {
    if (arv != null) {
      exibirDireito(arv.dir);
      System.out.println(arv.valor);
    }
  }

  public void exibirRaiz() {
    System.out.println("raiz " + raiz.valor);
  }

  public void exibirNoEsq() {
    exibirEsquerdo(raiz);
  }

  public void exibirNoDir() {
    exibirDireito(raiz);
  }

  public void exibirNo() {
    exibirNoEsq();
    exibirRaiz();
    exibirNoDir();
  }

  public void imprimePreOrdem() {
    imprimePreOrdem(raiz);
    System.out.println();
  }

  private void imprimePreOrdem(BIntNo no) {
    if (no != null) {
      System.out.print(no.valor + "  ");
      imprimePreOrdem(no.esq);
      imprimePreOrdem(no.dir);
    }
  }

  public void imprimeEmOrdem() {
    imprimeEmOrdem(raiz);
    System.out.println();
  }

  private void imprimeEmOrdem(BIntNo no) {
    if (no != null) {
      imprimeEmOrdem(no.esq);
      System.out.print(no.valor + "  ");
      imprimeEmOrdem(no.dir);
    }
  }

  public void imprimePosOrdem() {
    imprimePosOrdem(raiz);
    System.out.println();
  }

  private void imprimePosOrdem(BIntNo no) {
    if (no != null) {
      imprimePosOrdem(no.esq);
      imprimePosOrdem(no.dir);
      System.out.print(no.valor + "  ");
    }
  }

  public void excluirNo(Double item) {
    try {
      BIntNo tempNo;
      BIntNo pai;
      BIntNo filho, temp;

      tempNo = raiz;
      pai = null;
      filho = raiz;

      while (tempNo != null && tempNo.valor != item) {
        pai = tempNo;
        if (item < tempNo.valor) {
          tempNo = tempNo.esq;
        } else {
          tempNo = tempNo.dir;
        }
      }
      if (tempNo == null) {
        System.out.println("item não localizado!");
      }
      if (pai == null) {
        if (tempNo.dir == null) {
          raiz = tempNo.esq;
        } else {
          if (tempNo.esq == null) {
            raiz = tempNo.dir;
          } else {
            for (temp = tempNo, filho = tempNo.esq; filho.dir != null; temp = filho, filho = filho.dir)
              ;
            if (filho != tempNo.esq) {
              temp.dir = filho.esq;
              filho.esq = raiz.esq;
            }
            filho.dir = raiz.dir;
            raiz = filho;
          }
        }
      } else {
        if (tempNo.dir == null) {
          if (pai.esq == tempNo) {
            pai.esq = tempNo.esq;
          } else {
            pai.dir = tempNo.esq;
          }
        } else {
          for (temp = tempNo, filho = tempNo.esq; filho.dir != null; temp = filho, filho = filho.dir)
            ;
          if (filho != tempNo.esq) {
            temp.dir = filho.esq;
            filho.esq = tempNo.esq;
          }
          filho.dir = tempNo.dir;
          if (pai.esq == tempNo) {
            pai.esq = filho;
          } else {
            pai.dir = filho;
          }

        }
      }
    } catch (NullPointerException erro) {
      // item não encontrado
    }
  }

}
