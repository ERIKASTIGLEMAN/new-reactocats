import React, { Component } from 'react'
import { Octocats } from './components/Octocats'

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45rem"
                    height="45rem"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <h3>
                  <a href="#">Octodex</a>
                </h3>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <Octocats
              articleImageLink="https://octodex.github.com/images/Adacat"
              octocatsImage="https://octodex.github.com/images/Adacats.png"
              name="Adacats"
              number="#147"
              author="cameronfoxly"
              authorImg="https://github.com/cameronfoxly.png"
              authorLink="Https://octodex.github.com/images/Adacat"
            />
            <Octocats
              articleImageLink="https://octodex.github.com//octogatos/"
              octocatsImage="https://octodex.github.com//images/Octogatos.png"
              name="Octogatos"
              number="#148"
              author="cameronfoxly"
              authorImg="https://github.com/cameronfoxly.png"
              authorLink="https://github.com/cameronfoxly"
            />
            <Octocats
              articleImageLink="https://octodex.github.com//sentrytocat/"
              octocatsImage="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
              name="Sentrytocat"
              number="#143"
              author="cameronmcefee"
              authorImg="https://github.com/cameronmcefee.png"
              authorLink="https://github.com/cameronmcefee"
            />
            <Octocats
              articleImageLink="https://octodex.github.com/images/hula_loop_octodex03/"
              octocatsImage="https://octodex.github.com/images/hula_loop_octodex03.gif"
              name="Hulatocat"
              number="#147"
              author="cameronmcefee"
              authorImg="https://octodex.github.com/images/hula_loop_octodex03.gif"
              authorLink="https://octodex.github.com/images/hula_loop_octodex03/"
            />
            <Octocats
              articleImageLink="https://octodex.github.com//suftocat/"
              octocatsImage="https://octodex.github.com/images/surftocat.png"
              name="Surftocat"
              number="#140"
              author="cameronfoxly"
              authorImg="https://github.com/cameronfoxly.png"
              authorLink="https://github.com/cameronfoxly"
            />

            <Octocats
              articleImageLink="https://octodex.github.com//scubatocat/"
              octocatsImage="https://octodex.github.com//images/scubatocat.png"
              name="Scubatocat"
              number="#138"
              author="jeejkang"
              authorImg="https://github.com/jeejkang.png"
              authorLink="https://github.com/jeejkang"
            />

            <Octocats
              articleImageLink="https://octodex.github.com//dinotocat/"
              octocatsImage="https://octodex.github.com//images/dinotocat.png"
              name="Dinotocat"
              number="#130"
              author="kimestoesta"
              authorImg="https://github.com/kimestoesta.png"
              authorLink="https://github.com/kimestoesta"
            />

            <Octocats
              articleImageLink="https://octodex.github.com//spidertocats/"
              octocatsImage="https://octodex.github.com//images/spidertocat.png"
              name="Sipdertocat"
              number="#88"
              author="jeejkang"
              authorImg="https://github.com/jeejkang.png"
              authorLink="https://github.com/jeejkang"
            />

            <Octocats
              articleImageLink="https://octodex.github.com//boxertocat/"
              octocatsImage="https://octodex.github.com//images/boxertocat_octodex.jpg"
              name="Boxertocat"
              number="#141"
              author="rubyjazzy"
              authorImg="https://github.com/rubyjazzy.png"
              authorLink="https://github.com/rubyjazzy"
            />
          </section>
        </main>

        <footer>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}
