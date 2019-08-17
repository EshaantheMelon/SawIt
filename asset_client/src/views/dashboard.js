/**
 * Copyright 2017 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This open source repository was modified for use in a Palm Oil Traceabilty Project by Eshaan Menon
 * No credit is taken other than modifications to the Hyperledger Sawtooth Supply Chain repository and Tap the Boat Open Source Project 
 * Modifications include interface developments, applicable changes to functions and utility based on use case
 * More information available in this projects README on GitHub
 * ----------------------------------------------------------------------------
 */
'use strict'

const m = require('mithril')

const Dashboard = {
  view (vnode) {
    return [m(".container",
      m('.header.text-center.mb-4',
        m('h4', 'Welcome To'),
        m('h1.mb-3', 'SawIt'),
        m('h5',
          m('em',
            'Powered by ',
            m('strong', 'Sawtooth Supply Chain')))),
    m('.blurb',
        m('p',
          m('em', 'Play our new game '),
          m('a[href="game.html"]',
            { target: '_self' },
			"here"))))
		]
  }
}

module.exports = Dashboard
