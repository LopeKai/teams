
import { TouchableOpacityProps } from "react-native"

import { MaterialIcons } from '@expo/vector-icons'

import { Container, ButtonIconTypeStyleProps } from "./styles"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
    return (
        <Container {...rest}>
            <MaterialIcons
                name={icon}
                color={type === 'PRIMARY' ? '#00875F' : '#F75A68'}
                size={24}
            />
        </Container>
    )
}