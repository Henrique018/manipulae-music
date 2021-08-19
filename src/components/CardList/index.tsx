import SongCard, { SongCardProps } from 'components/SongCard';
import * as S from './styles';

type CardListProps = {
	cards: SongCardProps[];
};

export const CardList = ({ cards }: CardListProps) => {
	return (
		<S.Wrapper>
			{cards.map((card, index) => (
				<SongCard key={index} {...card} data-testid="song-card" />
			))}
		</S.Wrapper>
	);
};

export default CardList;
