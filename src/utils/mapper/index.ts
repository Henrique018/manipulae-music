import secsToMins from 'utils/secsToMins';

type ApiDataProps = {
	data: {
		id: number;
		title: string;
		duration: number;
		link: string;
		preview: string;
		artist: {
			name: string;
		};
		album: {
			cover_medium: string;
		};
	}[];
};

const mapToSongCard = (apiData: Partial<ApiDataProps>) => {
	return apiData.data?.map((track) => ({
		id: track.id,
		title: track.title,
		artistName: track.artist.name,
		duration: secsToMins(track.duration),
		albumCover: track.album.cover_medium,
		link: track.link
	}));
};

export default mapToSongCard;
