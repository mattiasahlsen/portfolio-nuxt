import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false

library.add(faGithub, faLinkedin, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
