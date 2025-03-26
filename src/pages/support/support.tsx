import { StyledSupportDiv, StyledSupportP} from "../../styledC/support/support";
import { StyledTitle } from "../../styledC/generic/Text";

function Support () {

    return (
        <>
            <StyledSupportDiv>    
                <StyledTitle>
                    Información de contacto a Soporte    
                </StyledTitle>            
                <StyledSupportP>
                    Necesitas ayuda? Estamos aquí para asistirte.
                </StyledSupportP>
                <StyledSupportP>
                    Si tienes alguna pregunta o problema contáctanos a través de los siguientes canales:
                </StyledSupportP>
                <StyledSupportP>
                    📧 Correo electrónico: gonzalo.cano.rodriguez93@gmail.com.
                </StyledSupportP>
                <StyledSupportP>
                    📞 Teléfono: +34 622226147.
                </StyledSupportP>
                <StyledSupportP>
                    💬 Disponible todos los días para hablar.
                </StyledSupportP>
            </StyledSupportDiv>
        </>
    )
}

export default Support;