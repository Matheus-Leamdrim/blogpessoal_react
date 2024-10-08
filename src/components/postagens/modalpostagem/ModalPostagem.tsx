import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-2 hover:bg-white hover:text-indigo-800'>Nova Postagem</button>} modal>
        <div>
          <FormPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;