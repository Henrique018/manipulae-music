import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import SongCard, { SongCardProps } from 'components/SongCard';
import * as S from './styles';

type CardListProps = {
	cards: SongCardProps[] | undefined;
};

export const CardList = ({ cards }: CardListProps) => {
	const { favorites } = useSelector((state: RootState) => state.songs);

	return (
		<S.Wrapper>
			{cards
				? cards.map((card) => (
						<SongCard
							key={card.id}
							{...card}
							favorite={favorites.some((fav) => fav.id === card.id)}
						/>
				  ))
				: 'no songs found'}
		</S.Wrapper>
	);
};

export default CardList;
