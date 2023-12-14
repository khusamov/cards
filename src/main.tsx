import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter'
import './index.scss'
import {App} from './App.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'
import {TrainingCardSetModel} from './model/TrainingCardSetModel.ts'
import {version, description} from '../package.json'

console.log(`Программа: ${description}`)
console.log(`Версия программы: ${version}`)
console.log(`Дата сборки: ${BUILD_DATE}`)

const root = ReactDOM.createRoot(document.getElementById('root')!)
const applicationModel = new ApplicationTrainingCardsModel

// Тестовые данные.
for (let i = 0; i < 10; i++) {
	const trainingCardSet = new TrainingCardSetModel
	trainingCardSet.title = 'title' + 1
	applicationModel.pushTrainingCardSet(trainingCardSet)
}

root.render(
	<React.StrictMode>
		<App applicationModel={applicationModel}/>
	</React.StrictMode>
)