import React from "react"
import { render } from '@testing-library/react'
import Button from '../../components/_commons/Button'

describe("Testing Button component", ()=> {
    it("be able to render", () => {
        const { getByTestId } = render(
            <Button>
                Acessar
            </Button>
        )
        
        expect(getByTestId('button')).toBeTruthy()
    })
})