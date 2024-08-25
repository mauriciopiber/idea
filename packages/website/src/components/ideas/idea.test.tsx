// __tests__/Idea.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Idea from './idea';

describe('Idea component', () => {
  it('should render the idea text', () => {
    const ideaText = 'This is a test idea';

    // Render the Idea component with props
    render(<Idea concept={{ id: 1, idea: ideaText }} />);

    // Check if the text is rendered correctly
    const paragraphElement = screen.getByText(ideaText);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should have the correct class name', () => {
    const ideaText = 'Check class name';

    // Render the Idea component with props
    render(<Idea concept={{ id: 1, idea: ideaText }} />);

    // Check if the paragraph element has the correct class names
    const paragraphElement = screen.getByText(ideaText);
    expect(paragraphElement).toHaveClass('text-center');
    expect(paragraphElement).toHaveClass('p-2');
  });
});
