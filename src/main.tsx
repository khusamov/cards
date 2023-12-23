import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter'
import {App} from './App.tsx'
import {createTestingApplicationModel} from './functions/createTestingApplicationModel.ts'
import {version, description} from '../package.json'
import './index.scss'

console.log(`Программа: ${description}`)
console.log(`Версия программы: ${version}`)
console.log(`Дата сборки: ${BUILD_DATE}`)

const root = ReactDOM.createRoot(document.getElementById('root')!)
const applicationModel = createTestingApplicationModel()

root.render(
	<React.StrictMode>
		<App applicationModel={applicationModel}/>
	</React.StrictMode>
)