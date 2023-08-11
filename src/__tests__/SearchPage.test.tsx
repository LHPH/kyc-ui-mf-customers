import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import SearchPage from '@/app/customers/search/page';

describe('SearchPage',()=>{

    it('SearchPage Render',()=>{

        render(<SearchPage />);

        const element = screen.queryByRole('heading',{name: /Search Customer/i});
        expect(element).toBeInTheDocument();
    });
});