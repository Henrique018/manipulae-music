import mapToSongCard from '.';
import mock from './mock';

describe('mapToSongCard()', () => {
	it('should return the correct structure for SongCard ', () => {
		const data = mapToSongCard(mock.tracks);

		expect(data).toStrictEqual([
			{
				id: 908604612,
				title: 'Blinding Lights',
				artistName: 'The Weeknd',
				duration: '3:20',
				albumCover:
					'https://cdns-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/250x250-000000-80-0-0.jpg',
				link: 'https://www.deezer.com/track/908604612'
			}
		]);
	});
});
