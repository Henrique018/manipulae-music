import { Link } from 'react-router-dom';
import { Search } from '@styled-icons/boxicons-regular';
import { Star as FilledStar } from '@styled-icons/boxicons-solid';

import * as S from './styles';

const Header = () => {
	return (
		<S.Wrapper>
			<Link to="/">
				<S.Logo>
					Manipulaê <span>Music</span>
				</S.Logo>
			</Link>

			<S.SearchWrapper>
				<S.Input
					placeholder="Search for an artist, song or podcast"
					type="search"
				/>
				<Search size={34} color="#fff" />
			</S.SearchWrapper>

			<Link to="/favorites">
				<div>
					<FilledStar size={30} color="#E94560" />
					<span>Favorites</span>
				</div>
			</Link>
		</S.Wrapper>
	);
};

export default Header;
