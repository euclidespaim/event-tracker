import { eventosAsync } from './seletores/index';
import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default: {}
})
