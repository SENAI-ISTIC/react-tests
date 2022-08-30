import { Button, ButtonProps } from '@mantine/core';

interface IProps extends ButtonProps{
    isloading?: boolean;
}

function CustomButton(props: IProps){
    return(
        <Button
            data-testid='button'
            disabled={props.disabled || props.isloading}
            {...props}
        >
            {props.isloading ? ('Carregando...') : props.children}
        </Button>
    )
}

export default CustomButton