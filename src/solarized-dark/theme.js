import Mozaik          from './Mozaik.css'
import dashboardHeader from './DashboardHeader.css'
import widget          from './Widget.css'
import widgetHeader    from './WidgetHeader.css'
import widgetLabel     from './WidgetLabel.css'
import widgetList      from './WidgetList.css'


const theme = {
    root: Mozaik.root,
    dashboardHeader,
    widget,
    widgetHeader,
    widgetLabel,
    widgetList
}

export default theme


/*
.settings {
    background-color: #002b36;
}

const colors = {
    background: '#073642',
    text:       '#839496',
    textMute:   '#495b71',
    overlay:    'rgba(0, 0, 0, .35)',
    cardBg:     '#002b36',
    unknown:    '#495b71',
    success:    '#859900',
    warning:    '#b58900',
    failure:    '#dc322f',
}

const solarizedDarkTheme = {
    notifications: {
        bgColor:   colors.background,
        textColor: colors.text,
        padding:   '0.8vmin 1.6vmin',
        shadow:    '0 1px 3px rgba(0, 0, 0, 0.25)',
        overrides: {},
    },
    card: {
        bgColor: colors.cardBg,
        shadow:  '0 10px 10px rgba(0, 0, 0, 0.25)',
    },
    list: {
        item: {
            padding:   '0.6vmin 2vmin',
            overrides: {},
            meta: {
                overrides: {
                    color: '#586e75',
                },
            },
        },
    },
    table: {
        cell: {
            head: {
                overrides: {
                    fontSize:      '1.4vmin',
                    textTransform: 'uppercase',
                },
            },
        },
    },
    charts: {
        axis: {
            textColor:      '#839496',
            fontSize:       '1.2vmin',
            tickColor:      '#586e75',
            legendColor:    '#839496',
            legendFontSize: '1.2vmin',
        },
        grid: {
            stroke:          '#485c63',
            strokeDasharray: '1,3',
        },
    },
}
 */