import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import AuthContext from "../../contexts/AuthContext"



function Footer() {
  
  let data = new Date().getFullYear()
  
  const { usuario,} = useContext(AuthContext)

  let component: ReactNode;
  
  if(usuario.token !== ""){
    component= (
      <div className="flex justify-center bg-gray-900 text-white">
          <div className="container flex flex-col items-center py-3">
            <p className='text-xl font-bold'>Blog Pessoal - Matheus Alves | Copyright:{data} </p>
            <p className='text-lg'>Acesse as Redes Sociais!</p>
            <div className='flex gap-6'>
              <LinkedinLogo size={50} weight='light' />
              <InstagramLogo size={50} weight='light' />
              <FacebookLogo size={50} weight='light' />
            </div>
          </div>
        </div>
    )
  }
  
  return (
    <>
    {component}
    </>
  )
}

export default Footer
