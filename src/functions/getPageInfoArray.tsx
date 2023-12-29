import CategoryIcon from '@mui/icons-material/Category'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import DescriptionIcon from '@mui/icons-material/Description'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WidgetsIcon from '@mui/icons-material/Widgets'
import {IPageInfo} from '../interfaces/IPageInfo.ts'
import {ITrainingApplication} from '../model/interfaces/ITrainingApplication.ts'
import {AboutPage} from '../pages/AboutPage.tsx'
import {CardDeckListPage} from '../pages/CardDeckListPage.tsx'

export function getPageInfoArray(applicationModel: ITrainingApplication): IPageInfo[] {
	return (
		[{
			code: 'files',
			title: 'Файлы',
			icon: () => <DescriptionIcon/>
		}, {
			code: 'categories',
			title: 'Категории',
			icon: () => <CategoryIcon/>
		}, {
			code: 'decks',
			title: 'Колоды',
			icon: () => <WidgetsIcon/>,
			page: () => <CardDeckListPage applicationModel={applicationModel}/>
		}, {
			code: 'cards',
			title: 'Карточки',
			icon: () => <DashboardCustomizeIcon/>
		}, {
			code: 'training',
			title: 'Тренировка',
			icon: () => <SportsEsportsIcon/>
		}, {
			code: 'about',
			title: 'О программе',
			icon: () => <HelpCenterIcon/>,
			page: () => <AboutPage/>
		}]
	)
}