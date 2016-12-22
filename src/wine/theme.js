import Mozaik          from './Mozaik.css'
import dashboardHeader from './DashboardHeader.css'
import widget          from './Widget.css'
import widgetHeader    from './WidgetHeader.css'
import widgetBody      from './WidgetBody.css'
import widgetLabel     from './WidgetLabel.css'
import widgetList      from './WidgetList.css'


const theme = {
    root: Mozaik.root,
    dashboardHeader,
    widget,
    widgetHeader,
    widgetBody,
    widgetLabel,
    widgetList,
}

export default theme


/*
const wineTheme = {
    colors: {
        background: '#281212',
        overlay:    'rgba(0, 0, 0, .35)',
        text:       'hsl(6, 26%, 67%)',
        textMute:   '#9b645e',
        unknown:    '#7e706d',
        success:    '#50a3b2',
        failure:    '#a31c12',
    },
    settings: {
        shadow: '0 1px 2px rgba(0, 0, 0, 0.75)',
    },
    card: {
        bgColor: 'rgb(69, 23, 23)',
        shadow:  '0 10px 10px rgba(0, 0, 0, 0.25)',
    },
    table: {
        cell: {
            head: {
                overrides: {
                    borderBottom: '1px solid rgb(40, 18, 18)',
                },
            },
        },
    },
    charts: {
        axis: {
            textColor: '#c19995',
            textSize: '1.2vmin',
            tickColor: '#c19995',
        },
        grid: {
            stroke:          '#9b645e',
            strokeDasharray: '1,3',
        },
    },
}


export default wineTheme

 */