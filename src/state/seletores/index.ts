import { IEvento } from './../../interfaces/IEvento';
import { filtroDeEventos, listaDeEventosState } from './../atom';
import { selector } from "recoil";


export const eventosFiltradoState = selector({
    key: "eventosFiltradoState",
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
              return true
            } 
            const eHoMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
            return eHoMesmoDia
        })
        return eventos
    }
})

export const eventosAsync = selector({
    key: "eventosAsync",
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos')
        const eventosJson: IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim),
        }))
    }
})