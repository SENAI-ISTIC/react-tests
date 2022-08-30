import React from "react"
import { render } from '@testing-library/react'
import Button from '../../components/_commons/Button'

describe("Testing Button component", ()=> {
    it("should be able to render", () => {
        const { getByTestId } = render(
            <Button>
                Acessar
            </Button>
        )
        
        expect(getByTestId('button')).toBeTruthy()
    })

    it("should be able to loading", () => {
        const { getByTestId, rerender } = render(
            <Button isloading={true}>
                Acessar
            </Button>
        )
        const button = getByTestId('button')

        expect(button).toBeDisabled()
        expect(button).not.toHaveTextContent('Acessar')
        
        rerender(
            <Button isloading={false}>
                Acessar
            </Button>
        )
        
        expect(button).not.toBeDisabled()
        expect(button).toHaveTextContent('Acessar')
    })
})