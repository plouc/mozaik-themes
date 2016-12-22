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
theme-night-blue = {
  // DASHBOARD,
  dashboard-header-txt-color     : #e0c671,
  dashboard-header-font          : unquote("normal normal 400 2.6vmin/5vmin 'Raleway', sans-serif"),

  // NOTIFICATIONS,
  notifications-bg-color         : lighten(#323f53, 5),
  notifications-txt-color        : #e0c671,
  notifications-shadow           : 0 1px 1px rgba(0, 0, 0, 0.85),
}
.time__clock
  box-shadow 0 1px 0 #495b71 inset

  &__outer-circle
    border 0.8vmin solid #495b71
    background-color #1e2430
    box-shadow 0 0 2px rgba(0, 0, 0, 0.5)

  &__inner-circle,
  &__hand
    background-color #e0c671
    box-shadow 0 0 3px rgba(0, 0, 0, 0.5)

  &__brand
    color #495b71

const colors = {
    background: '#1e2430',
    text:       '#eedba5',
    textMute:   '#879db7',
    overlay:    'rgba(0, 0, 0, .35)',
    unknown:    '#495b71',
    success:    '#4ec2b4',
    warning:    '#d1be65',
    failure:    '#de5029',
}

const nightBlueTheme = {
    colors,
    fonts: {
        default: `normal normal 400 1.6vmin/3vmin 'Raleway', sans-serif`,
    },
    settings: {
        shadow: '0 1px 2px rgba(0, 0, 0, 0.75)',
    },
    notifications: {
        bgColor:   colors.background,
        textColor: colors.text,
        padding:   '0.8vmin 1.6vmin',
        shadow:    '0 1px 2px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.15)',
        overrides: {},
    },
    card: {
        bgColor: '#2b3847',
        shadow:  '0 10px 20px rgba(0, 0, 0, 0.35)',
    },
    table: {
        cell: {
            head: {
                overrides: {
                    borderBottom:  '1px solid #212e41',
                    fontWeight:    '600',
                    fontSize:      '1.4vmin',
                    textTransform: 'uppercase',
                },
            },
        },
    },
    charts: {
        axis: {
            textColor:      colors.textMute,
            fontSize:       '1.3vmin',
            tickColor:      colors.textMute,
            legendColor:    colors.textMute,
            legendFontSize: '1.3vmin',
        },
        grid: {
            stroke:          '#596981',
            strokeDasharray: '1,3',
        },
    },
}

 */