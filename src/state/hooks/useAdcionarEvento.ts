import { useSetRecoilState } from 'recoil';
import { IEvento } from './../../interfaces/IEvento';
import { obterId } from '../../utils/util';
import { listaDeEventosState } from '../atom';

const useAdcionarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        const hoje = new Date();
        if (evento.inicio < hoje){
            throw new Error('Evento não pode ser cadastrado com data de início anterior a data de hoje');
        }
        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdcionarEvento;