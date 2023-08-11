import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import RegisterForm from '@/app/customers/register/page';

describe('Register Page',()=>{

    it('RegisterPage Render',()=>{

        render(<RegisterForm />);

        const firstNameElement = screen.getByRole('textbox',{name: /First Name/i});

        expect(firstNameElement).toBeInTheDocument();
    });
});