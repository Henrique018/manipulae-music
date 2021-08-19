import { LinkExternal, Star, Play } from '@styled-icons/boxicons-regular';
import { Star as FilledStar } from '@styled-icons/boxicons-solid';

import * as S from './styles';

export type SongCardProps = {
	title: string;
	artistName: string;
	duration: number;
	albumCover: string;
	link: string;
	favorite?: boolean;
	onFav?: () => void;
};

const SongCard = ({
	title,
	artistName,
	duration,
	albumCover,
	link,
	favorite = false,
	onFav
}: SongCardProps) => {
	return (
		<S.Wrapper>
			<S.Image src={albumCover} alt={`${artistName}'s album cover`} />
			<S.PlayBtn title="Listen the preview">
				<Play size={36} color="#fff" />
			</S.PlayBtn>
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
							<LinkExternal size={32} color="#E94560" />
						</S.DeezerBtn>

						<S.FavoriteBtn onClick={onFav}>
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
