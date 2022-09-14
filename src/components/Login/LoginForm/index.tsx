import { useAuth } from '@/core/contexts/auth';
import { PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { RiLoginBoxLine } from 'react-icons/ri';
import Button from "../../_commons/Button"

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { setSession } = useAuth();
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value) => (!value ? 'Preencha o campo' : null),
      password: (value) => (!value ? 'Preencha o campo' : null),
    },
  });

  function handleSubmit(values: LoginFormValues) {
    // TODO: Implementar aqui requisição para autenticar
    setLoading(true)
      setSession({
        user: {
          id: '1',
          name: 'Nome do usuário',
          email: values.email,
        },
        tokens: {
          accessToken: '123',
          refreshToken: '123',
          tokenType: 'Bearer',
          expirateAt: 1234578,
          idToken: null,
        },
      });

      setLoading(false)    
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          name="email"
          label="E-mail"
          data-test-id="email-input"
          data-testid="email-input"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          name="password"
          label="Senha"
          data-test-id="password-input"
          data-testid="password-input"
          {...form.getInputProps('password')}
        />

        <Button
          isloading={loading} 
          leftIcon={<RiLoginBoxLine />} 
          type="submit"
          data-testid="access-button"
        >
          Acessar
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
