import {CardDeck} from '../model/CardDeck.ts'
import {Category} from '../model/Category.ts'
import {ITrainingApplication} from '../model/interfaces/ITrainingApplication.ts'
import {TrainingApplication} from '../model/TrainingApplication.ts'
import {TrainingFile} from '../model/TrainingFile.ts'

/**
 * Создать тестовую модель приложения с тестовыми данными для отладки.
 * @return {ITrainingApplication}
 */
export function createTestingApplicationModel(): ITrainingApplication {
	const applicationModel = new TrainingApplication

	// Тестовый файл.
	const trainingFile = new TrainingFile
	applicationModel.pushTrainingFile(trainingFile)

	if (applicationModel.current.trainingFile) {
		// Тестовые категории.
		for (const title of ['История', 'Геометрия', 'Алгебра']) {
			console.log(title)
			const category = new Category
			category.title = title
			applicationModel.current.trainingFile.pushCategory(category)
		}

		// Тестовые карточки.
		for (let i = 0; i < 10; i++) {
			const trainingCardDeck = new CardDeck
			const firstCategory = applicationModel.current.trainingFile.categoryArray[0]
			if (firstCategory) {
				trainingCardDeck.category = firstCategory
			}
			trainingCardDeck.title = 'title' + 1
			applicationModel.current.trainingFile.pushCardDeck(trainingCardDeck)
		}
	}

	return applicationModel
}