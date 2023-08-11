export const formatDate = (dateStr: string) => {
	const date = new Date(dateStr);
	return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(date);
};
