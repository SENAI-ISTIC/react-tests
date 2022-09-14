import LoginForm from "../../components/Login/LoginForm"
import { fireEvent, render, waitFor } from "@testing-library/react"

const mockSetSession = jest.fn()

jest.mock('../../core/contexts/auth', () => {
    return {
        useAuth: () => ({
            setSession: mockSetSession
        })
    }
})

describe('Login Page', ()=>{
    it('should be able to login', async () => {
        const { getByTestId } = render(<LoginForm />)

        const emailInput = getByTestId('email-input')
        const passwordInput = getByTestId('password-input')
        const buttonElement = getByTestId('access-button')

        fireEvent.change(emailInput, { target: {value: 'istic@senaisp.com.br'}})
        fireEvent.change(passwordInput, { target: {value: 'ISTIC@123'}})

        fireEvent.click(buttonElement)

        await waitFor(() => {
            expect(mockSetSession).toHaveBeenCalled()
        })
    })
})