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
.time__clock
  &__outer-circle
    border-color #d3dfe8
    background-color #f1f6f7
    box-shadow 0 0 30px rgba(255, 255, 255, 0.75) inset

  &__inner-circle
    background #c5d2db

  &__indicator
    display none

  &__hand
    background-color #c5d2db
    &--seconds
      background-color #a9dca9

const snowTheme = {
    colors: {
        background: '#ebf0f1',
        text:       '#333',
        textMute:   '#999',
        unknown:    '#d3dfe8',
        success:    '#8ddb8d',
        warning:    '#d1be65',
        failure:    '#e37856',
    },
    fonts: {
        default: `normal normal 400 1.6vmin/3vmin 'Open Sans', sans-serif`,
    },
    settings: {
        shadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
    },
    notifications: {
        bgColor:   '#fff',
        textColor: '#333',
        padding:   '0.8vmin 1.6vmin',
        shadow:    '0 1px 2px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.15)',
        overrides: {},
    },
    card: {
        bgColor: '#fff',
        shadow:  '0 10px 10px rgba(0, 0, 0, 0.15)',
    },
    table: {
        cell: {
            head: {
                overrides: {
                    borderBottom: '1px solid #ddd',
                },
            },
        },
    },
    charts: {
        axis: {
            textColor:      '#777',
            fontSize:       '1.3vmin',
            tickColor:      '#777',
            legendColor:    '#777',
            legendFontSize: '1.3vmin',
        },
        grid: {
            stroke:          '#aaa',
            strokeDasharray: '1,3',
        },
    },
}
*/
