import { BlueVersion } from "../../styledC/version/versionWarning";
import { BlackScreen } from "../../styledC/generic/Screens";
import { CloseChatButton } from "../../styledC/shop/Chat";

interface trial {
    closeWindow: () => void;
  } 

const VersionWarning: React.FC<trial> = ({closeWindow}) => {
  return(
        <BlackScreen>
            <CloseChatButton onClick={closeWindow} src='X.png'/>            
            <BlueVersion>
                ¡Bienvenido a mi aplicación! Esta es mi primera versión de la aplicacion y en
                este recuadro puedes ver un resumen de lo que por ahora funciona y lo que no.
                Por ahora, tienes acceso al login y a tu perfil además de poder crear tu usuario;
                prueba un poco con las distintas opciones para ver que tienes disponible en terminos
                de ventanas y rutas si te apetece pero por ahora el chat y los minijuegos no funcionan.
                Existen muchas cosas que implementar todavía, podrás revisar estas cosas en mi Linkedin.
                ¡Conecta conmigo si quieres hablar! O también puedes mandarme un correo                
            </BlueVersion>
            <BlueVersion>
                Linkedin: <a>https://www.linkedin.com/in/gonza-cano/</a>
                Correo: gonzalo.cano.rodriguez93@gmail.com
            </BlueVersion>
        </BlackScreen>
    )
}

export default VersionWarning;