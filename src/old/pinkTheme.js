/*
@todo include those vars if required
@import url("https://fonts.googleapis.com/css?family=Raleway:200,400,600,800|Montserrat:400,700");
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
*/

const colors = {
    background: '#f1dfdd',
    text:       '#111',
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
    dashboard: {
        header: {
            overrides: {
                //boxShadow: '0 2px 10px 0 rgba(97,45,45,0.55)',
            },
        },
    },
    settings: {
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
    widget: {
        spacing:      '4vmin',
        borderRadius: '5px',
        //bgColor:      '#e6c4bc',
        //shadow:       '0 2px 10px 0 rgba(97,45,45,0.55)',
        header: {
            textColor:    '#111',
            font:         `normal normal 400 1.6vmin 'Montserrat', sans-serif`,
            borderBottom: '1px solid #111',
            overrides:    {
                textTransform: 'uppercase',
                padding: 0,
            },
            subject: {
                overrides: {},
            },
            count: {
                overrides:    {
                    textTransform: 'none',
                    fontWeight:    400,
                },
            },
            icon: {
                size:  '2.2vmin',
                color: '#111',
            },
        },
    },
    list: {
        item: {
            overrides: {},
            meta: {
                overrides: {
                    color: '#879db7',
                },
            },
        },
    },
    label: {
        addon: {},
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


export default nightBlueTheme
