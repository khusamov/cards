import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter'
import './index.scss'
import {App} from './App.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'

const root = ReactDOM.createRoot(document.getElementById('root')!)
const applicationModel = new ApplicationTrainingCardsModel

root.render(
	<React.StrictMode>
		<App applicationModel={applicationModel}/>
	</React.StrictMode>
)