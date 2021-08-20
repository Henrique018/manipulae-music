import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import SongCard, { SongCardProps } from 'components/SongCard';
import * as S from './styles';

type CardListProps = {
	cards: SongCardProps[];
};

export const CardList = ({ cards }: CardListProps) => {
	const { favorites } = useSelector((state: RootState) => state.favorites);

	return (
		<S.Wrapper>
			{cards.map((card) => (
				<SongCard
					key={card.id}
					{...card}
					favorite={favorites.some((favId) => favId === card.id)}
				/>
			))}
		</S.Wrapper>
	);
};

export default CardList;
