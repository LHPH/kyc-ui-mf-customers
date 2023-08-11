import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom'
import AddressDataForm from '@/components/AddressDataFrom';
import { IAddressDataForm } from '@/interfaces/addressDataForm.interface';


let props : IAddressDataForm = {
    handleNext: jest.fn(),
    handleBack: jest.fn()
}

describe('AddressDataForm',()=>{

    it('AddressDataForm Render',()=>{

        render(<AddressDataForm {...props}/>);

        //screen.debug();
        
        const streetElement = screen.getByRole('textbox',{name: 'Street'});
        const postalCodeElement = screen.getByRole('textbox',{name: 'Postal Code'});
        const buttonElement = screen.getByRole('button',{name: /Next/i});

        expect(streetElement).toBeInTheDocument();
        expect(postalCodeElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
})