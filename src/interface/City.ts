interface Regiao {
  id: number,
  sigla: string,
  nome: string
}

interface UF {
  id: number,
  sigla: string,
  nome: string,
  regiao: Regiao
}

interface Mesorregiao {
  id: number,
  nome: string,
  UF: UF
}

interface Microrregiao {
  id: number,
  nome: string,
  mesorregiao: Mesorregiao
}


export interface City {
  id: number,
  nome: string,
  microregiao: Microrregiao
}