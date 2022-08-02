import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [ ],
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default: {}
})
