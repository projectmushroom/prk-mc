import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        mobileBreakpoint: 'md' 
    },
    theme: {
        themes: {
            light: {
                primary: '#1C3948',
                secondary: '#71999C',
                accent: '#FDE900',
                error: '#b71c1c',
            },
        },
    },
});
