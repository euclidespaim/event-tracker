import { eventosFiltradoState } from './../seletores/index';
import { useRecoilValue } from 'recoil';


const useListaDeEventos = () => {

    return useRecoilValue(eventosFiltradoState)

}
export default useListaDeEventos;