/**
 * Случайное целое число из диапазона.
 * @link https://learnjs.ru/lessons/math-random/#5
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function getRandomInteger(min: number, max: number): number {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}