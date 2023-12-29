import {observer} from 'mobx-react-lite'
import {Box, CssBaseline, CssVarsProvider, ListItemDecorator, Tab, TabList, TabPanel, Tabs} from '@mui/joy'
import {getPageInfoArray} from './functions/getPageInfoArray.tsx'
import {IPageInfo} from './interfaces/IPageInfo.ts'
import {ITrainingApplication} from './model/interfaces/ITrainingApplication.ts'
import './App.scss'

interface IApplicationProps {
	applicationModel: ITrainingApplication
}

const PageTab = ({code, icon, title}: IPageInfo) => (
	<Tab orientation='vertical' value={code}>
		<ListItemDecorator>
			{icon()}
		</ListItemDecorator>
		{title}
	</Tab>
)

const PageTabPanel = ({code, page}: IPageInfo) => (
	page && (
		<TabPanel value={code}>
			{page()}
		</TabPanel>
	)
)

export const App = observer(
	({applicationModel}: IApplicationProps) => {
		const pageInfoArray = getPageInfoArray(applicationModel)
		return (
			<CssVarsProvider>
				<CssBaseline/>
				<Tabs defaultValue='decks' sx={{display: 'flex', height: '100%', flexDirection: 'column'}}>
					<TabList sx={{'--Icon-fontSize': '2.3rem'}}>
						{
							pageInfoArray.map((pageInfo, index) => <PageTab key={index} {...pageInfo}/>)
						}
					</TabList>
					<Box sx={{flex: 1, overflow: 'auto'}}>
						{
							pageInfoArray.map((pageInfo, index) => <PageTabPanel key={index} {...pageInfo}/>)
						}
					</Box>
				</Tabs>
			</CssVarsProvider>
		)
	}
)