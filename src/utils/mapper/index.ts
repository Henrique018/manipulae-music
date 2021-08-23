import secsToMins from 'utils/secsToMins';

export type ApiDataProps = {
	data: [
		{
			id: number;
			title: string;
			link: string;
			duration: number;
			preview: string;
			artist: {
				name: string;
			};
			album: {
				cover_medium: string;
			};
			type: string;
		}
	];
};

const mapToSongCard = (apiData: Partial<ApiDataProps> | undefined) => {
	return (
		apiData &&
		apiData.data?.map((track) => ({
			id: track.id,
			title: track.title,
			artistName: track.artist.name,
			duration: secsToMins(track.duration),
			albumCover: track.album.cover_medium,
			link: track.link
		}))
	);
};

export default mapToSongCard;
