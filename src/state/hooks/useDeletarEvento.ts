import { listaDeEventosState } from './../atom';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';

const useDeletarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        setListaDeEventos(listaAntiga => [
            ...listaAntiga.filter(e => e.id !== evento.id)
        ])
    }
}

export default useDeletarEvento;