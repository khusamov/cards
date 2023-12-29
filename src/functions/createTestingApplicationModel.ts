import {CardDeck} from '../model/CardDeck.ts'
import {Category} from '../model/Category.ts'
import {ITrainingApplication} from '../model/interfaces/ITrainingApplication.ts'
import {TrainingApplication} from '../model/TrainingApplication.ts'
import {TrainingFile} from '../model/TrainingFile.ts'
import {getRandomInteger} from './getRandomInteger.ts'

/**
 * Создать тестовую модель приложения с тестовыми данными для отладки.
 * @return {ITrainingApplication}
 */
export function createTestingApplicationModel(): ITrainingApplication {
	const applicationModel = new TrainingApplication

	// Тестовый файл.
	const trainingFile = new TrainingFile('Тестовый файл')
	applicationModel.pushTrainingFile(trainingFile)

	if (applicationModel.current.trainingFile) {
		const trainingFile = applicationModel.current.trainingFile

		// Тестовые категории.
		for (const title of ['История', 'Геометрия', 'Алгебра']) {
			const category = new Category(title)
			trainingFile.pushCategory(category)
		}

		// Тестовые карточки.
		for (let i = 0; i < 10; i++) {
			const randomCategoryIndex = getRandomInteger(0, trainingFile.categoryArray.length - 1)
			const randomCategory = trainingFile.categoryArray[randomCategoryIndex]
			if (randomCategory) {
				const trainingCardDeck = new CardDeck(`Колода № ${i + 1}`, randomCategory)
				trainingFile.pushCardDeck(trainingCardDeck)
			}
		}
	}

	return applicationModel
}