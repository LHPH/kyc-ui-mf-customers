import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Review from '@/components/Review';
import IReview from '@/interfaces/reviewPage.interface';


const props: IReview = {

    handleNext: jest.fn(),
    handleBack: jest.fn()
}

describe('Review Page',()=>{

   it('Render Review',()=>{

    render(<Review {...props} />);

    //screen.debug();
    const element = screen.queryByText(/First Name:/i);
    expect(element).toBeInTheDocument();
   })

});