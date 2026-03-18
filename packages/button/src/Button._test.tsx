// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Button } from './Button';

// // describe('Button', () => {
//   it('renders children', () => {
//     render(<Button>Click me</Button>);
//     expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
//   });

//   it('applies variant class', () => {
//     render(<Button variant="secondary">Click</Button>);
//     expect(screen.getByRole('button')).toHaveClass('btn--secondary');
//   });

//   it('applies default primary variant class', () => {
//     render(<Button>Click</Button>);
//     expect(screen.getByRole('button')).toHaveClass('btn--primary');
//   });

//   it('applies size class', () => {
//     render(<Button size="lg">Click</Button>);
//     expect(screen.getByRole('button')).toHaveClass('btn--lg');
//   });

//   it('applies default md size class', () => {
//     render(<Button>Click</Button>);
//     expect(screen.getByRole('button')).toHaveClass('btn--md');
//   });

//   it('calls onClick when clicked', async () => {
//     const handleClick = vi.fn();
//     render(<Button onClick={handleClick}>Click</Button>);
//     await userEvent.click(screen.getByRole('button'));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });

//   it('forwards ref to button element', () => {
//     const ref = { current: null };
//     render(<Button ref={ref}>Click</Button>);
//     expect(ref.current).toBeInstanceOf(HTMLButtonElement);
//   });

//   it('merges className with base classes', () => {
//     render(<Button className="custom">Click</Button>);
//     const button = screen.getByRole('button');
//     expect(button).toHaveClass('btn');
//     expect(button).toHaveClass('custom');
//   });

//   it('is disabled when disabled prop is set', () => {
//     render(<Button disabled>Click</Button>);
//     expect(screen.getByRole('button')).toBeDisabled();
//   });

//   it('does not call onClick when disabled', async () => {
//     const handleClick = vi.fn();
//     render(
//       <Button disabled onClick={handleClick}>
//         Click
//       </Button>,
//     );
//     await userEvent.click(screen.getByRole('button'));
//     expect(handleClick).not.toHaveBeenCalled();
//   });
// });
