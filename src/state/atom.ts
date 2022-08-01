import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2022-08-01T09:00"),
      fim: new Date("2022-08-01T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2022-08-02T09:00"),
      fim: new Date("2022-08-02T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
