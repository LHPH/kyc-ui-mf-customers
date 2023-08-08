import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Success from '@/components/Success';
import { ISuccess } from "@/interfaces/successPage.interface";
import { OperationType } from '@/components/enums/operationCustomerType.enum';

let props: ISuccess = {
    operation: OperationType.REGISTRATION
}

describe('Success Page',()=>{

    it('Success Page Render',()=>{

        render(<Success {...props} />);

    //screen.debug();
    const element = screen.queryByRole('heading',{name: /Success/i});
    expect(element).toBeInTheDocument();
    });
});