import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

const STARS_COUNT = 5;
const onSubmit = jest.fn();

describe('Component: Form', () => {
  it('should render correctly', () => {
    render(
      <Form onSubmit={onSubmit} />
    );

    expect(screen.getByLabelText('Your review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Submit/i})).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(STARS_COUNT);
  });

  it('should submit correct data when user types and selects rating', async () => {
    render(
      <Form onSubmit={onSubmit} />
    );

    const textarea = screen.getByPlaceholderText(/Tell how was your stay/i);
    const submitButton = screen.getByRole('button', {name: /Submit/i});
    const fourStars = screen.getByDisplayValue('4');

    await userEvent.type(textarea, 'This is a great place to stay!');
    await userEvent.click(fourStars);
    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      comment: 'This is a great place to stay!',
      rating: 4,
    });
  });

  it('should update inputs value on user interaction', async () => {
    render(
      <Form onSubmit={onSubmit} />
    );

    const textarea = screen.getByPlaceholderText(/Tell how was your stay/i) as HTMLTextAreaElement;
    const fiveStars = screen.getByDisplayValue('5') as HTMLInputElement;

    expect(textarea.value).toBe('');
    expect(fiveStars.checked).toBe(false);

    await userEvent.type(textarea, 'Hello world');
    await userEvent.click(fiveStars);

    expect(textarea.value).toBe('Hello world');
    expect(fiveStars.checked).toBe(true);
  });
});
