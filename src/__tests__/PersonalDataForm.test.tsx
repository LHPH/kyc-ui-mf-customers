import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom'

import  PersonalDataForm  from '@/components/PersonalDataForm';
import { IPersonalDataForm } from '@/interfaces/personalDataForm.interface';

let props: IPersonalDataForm = {
    handleNext: jest.fn()
}

describe('PersonalDataForm',()=>{

    it('PersonalDataForm Render',()=>{

        render(<PersonalDataForm {...props} />);

        //screen.debug();
        
        const firstNameElement = screen.getByRole('textbox',{name: /First Name/i});
        const emailElement = screen.getByRole('textbox',{name: /Email/i});
        const buttonElement = screen.getByRole('button',{name: /Next/i});

        expect(firstNameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
});