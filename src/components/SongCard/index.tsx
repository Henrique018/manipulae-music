import { useDispatch } from 'react-redux';
import { LinkExternal, Star } from '@styled-icons/boxicons-regular';
import { Star as FilledStar } from '@styled-icons/boxicons-solid';

import { AppDispatch } from 'redux/store';
import { addToFav, removeFromFav } from 'redux/songsSlicer';
import * as S from './styles';
import AudioButton from 'components/AudioButton';

export type SongCardProps = {
	id: number;
	title: string;
	artistName: string;
	duration: string;
	albumCover: string;
	link: string;
	favorite?: boolean;
	preview: string;
};

const SongCard = ({
	id,
	title,
	artistName,
	duration,
	albumCover,
	link,
	favorite = false,
	preview
}: SongCardProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const onFav = (id: number) => {
		if (favorite) {
			dispatch(removeFromFav({ id }));
		} else {
			dispatch(
				addToFav({
					id,
					title,
					artistName,
					albumCover,
					duration,
					link,
					favorite: true,
					preview
				})
			);
		}
	};

	return (
		<S.Wrapper>
			<S.Image src={albumCover} alt={`${artistName}'s album cover`} />
			<AudioButton audioSrc={preview} />
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Info>
					<div>
						<S.ArtistName>{artistName}</S.ArtistName>
						<S.Duration>{duration}</S.Duration>
					</div>
					<S.Buttons>
						<S.DeezerBtn
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							title="Listen on Deezer"
						>
							<LinkExternal size={31} color="#E94560" />
						</S.DeezerBtn>

						<S.FavoriteBtn onClick={() => onFav(id)}>
							{favorite ? (
								<FilledStar
									size={32}
									color="#E94560"
									aria-label="Remove from favorites"
									title="Remove from favorites"
								/>
							) : (
								<Star
									size={32}
									color="#E94560"
									aria-label="Add to favorites"
									title="Add to favorites"
								/>
							)}
						</S.FavoriteBtn>
					</S.Buttons>
				</S.Info>
			</S.Content>
		</S.Wrapper>
	);
};

export default SongCard;
