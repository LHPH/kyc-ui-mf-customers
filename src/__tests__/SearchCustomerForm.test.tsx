import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom'
import SearchCustomerForm from '@/components/SearchCustomerForm';
import ISearchForm from "@/interfaces/searchCustomerForm.interface";

let props: ISearchForm = {
    handleNext: jest.fn(),
    handleBack: jest.fn()
}

beforeEach(() => {
    jest.resetAllMocks();
});
  
afterEach(() => {
   // cleanup();
});

describe('SearchCustomerForm',()=>{


    it('SearchCustomerForm Render',()=>{

        render(<SearchCustomerForm {...props} />);

        //screen.debug();
        const element = screen.queryByRole('heading',{name: /Search Customer/i});
        expect(element).toBeInTheDocument();
    });

    it('SearchCustomerForm Select RFC Option',()=>{

        render(<SearchCustomerForm {...props} />);

        //screen.debug();

        const select = screen.getByRole('button',{name: /Customer No./i});
        fireEvent.mouseDown(select);

        const listBox = within(screen.getByRole('listbox'));

        fireEvent.click(listBox.getByRole('option',{name: /RFC/i}));

        const element = screen.getByPlaceholderText(/RFC/i);
        expect(element).toBeInTheDocument();
    });


    it('SearchCustomerForm Select Full Name Option',()=>{

        render(<SearchCustomerForm {...props} />);

        //screen.debug();

        const select = screen.getByRole('button',{name: /Customer No./i});
        fireEvent.mouseDown(select);

        const listBox = within(screen.getByRole('listbox'));

        fireEvent.click(listBox.getByRole('option',{name: /Full Name/i}));

        const firstNameElement = screen.getByPlaceholderText(/First Name/i);
        const lastNameElement = screen.getByPlaceholderText(/Last Name/i);
        expect(firstNameElement).toBeInTheDocument();
        expect(lastNameElement).toBeInTheDocument();
    });

});