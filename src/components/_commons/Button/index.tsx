import { Button, ButtonProps } from '@mantine/core';

interface IProps extends ButtonProps{
    isLoading?: boolean;
}

function CustomButton(props: IProps){
    return(
        <Button
            data-testid='button'
            disabled={props.disabled || props.isLoading}
            {...props}
        >
            {props.isLoading ? ('Carregando...') : props.children}
        </Button>
    )
}

export default CustomButton