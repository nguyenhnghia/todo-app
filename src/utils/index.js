export const generateID = () => {
	return `id_${Math.floor(Math.random() * 9052000)}_${Date.now()}`;
};

export const arrGetAllExceptID = (arr, targetId) => {
	return arr.filter((item) => item !== targetId);
};
