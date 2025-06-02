import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('test render', () => {
        render(
            <Button>
                Test
            </Button>,
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('clear theme', () => {
        render(
            <Button theme={ThemeButton.CLEAR}>
                Test
            </Button>,
        );
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
