import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Loader from '@/components/Loader';
import ILoader from '@/interfaces/loaderModal.interface';

let props : ILoader = {
    show: true,
    subtitle: 'Test'
}
describe('Loader',()=>{

    it('Loader render',()=>{

        render(<Loader {...props} />);

        const element = screen.getByRole('presentation',{hidden: true});
        expect(element).toBeInTheDocument();
    });

    it('Loader not render',()=>{

        const newProps = {...props, show: false};
        render(<Loader {...newProps} />);

        const element = screen.queryByRole('presentation',{hidden: true});
        expect(element).not.toBeInTheDocument();
    });
});
