import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-helper';
import AudioButton from '.';

describe('<AudioButton>', () => {
	render(<AudioButton audioSrc="audio.mp3" />);

	it('should play/pause when user clicks', () => {
		const button = screen.getByRole('button');

		expect(screen.getByLabelText(/listen song preview/i));

		userEvent.click(button);

		expect(screen.getByLabelText(/pause song preview/i));
	});
});
