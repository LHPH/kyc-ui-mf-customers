import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import CustomerListResult from '@/components/CustomerListResult';
import { ICustomerListResult } from '@/interfaces/customerListResult.interfaces';

let props: ICustomerListResult = {
    handleBack: jest.fn()
}

describe('CustomerListResult',()=>{

    it('CustomerListResult render',()=>{

        render(<CustomerListResult {...props}/>);

        //screen.debug();

        const element = screen.getByRole('grid');
        expect(element).toBeInTheDocument();
    });
});
