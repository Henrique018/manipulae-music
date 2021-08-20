function secsToMins(seconds: number): string {
	// 1 sec == 0.016 min
	const mins = (seconds * 0.016).toFixed(2);

	return mins.replace('.', ':');
}

export default secsToMins;
