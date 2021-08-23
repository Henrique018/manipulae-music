import { useState } from 'react';
import { Play, Pause } from '@styled-icons/boxicons-regular';

import * as S from './styles';

type AudioButtonProps = {
	audioSrc: string;
};

const AudioButton = ({ audioSrc }: AudioButtonProps) => {
	const [audio] = useState(new Audio(audioSrc));
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const handleAudioPlay = () => {
		setIsPlaying(!isPlaying);
		!isPlaying ? audio.play() : audio.pause();
	};

	return (
		<S.AudioBtn type="button" onClick={handleAudioPlay}>
			{isPlaying ? (
				<Pause
					size={36}
					color="#fff"
					aria-label="pause song preview"
					title="pause song preview"
				/>
			) : (
				<Play
					size={36}
					color="#fff"
					aria-label="listen song preview"
					title="listen song preview"
				/>
			)}
		</S.AudioBtn>
	);
};

export default AudioButton;
