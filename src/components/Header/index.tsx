import { Link } from 'react-router-dom';
import { Star as FilledStar } from '@styled-icons/boxicons-solid';

import Search from 'components/Search';
import * as S from './styles';

type HeaderProps = {
	showFav?: boolean;
	showSearch?: boolean;
};

const Header = ({ showFav = false, showSearch = false }: HeaderProps) => {
	return (
		<S.Wrapper>
			<Link to="/">
				<S.Logo>
					Manipulaê <span>Music</span>
				</S.Logo>
			</Link>

			{showSearch && <Search />}

			{showFav && (
				<Link to="/favorites">
					<div>
						<FilledStar size={30} color="#E94560" />
						<span>Favorites</span>
					</div>
				</Link>
			)}
		</S.Wrapper>
	);
};

export default Header;
