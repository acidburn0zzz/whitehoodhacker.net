import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Contact" description="Find out how to contact WhiteHoodHacker and how to do it securely." />
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <h1 className="main-reveal-text-short mt-0">Contact</h1>
                                <div className="main-fade-in-animation">
                                    <p>You can send an email to <code class="language-text">hello at whitehoodhacker dot net</code>.</p>
                                    <p>Here is my <a aria-label="PGP key" href="/WhiteHoodHacker.asc">PGP key</a> if you wish to communicate using encryption.</p>
                                    <p>For verification purposes, my Discord tag is <a target="_blank" rel="noopener noreferrer" href="https://discord.com/users/387289660675588098">WhiteHoodHacker#0010</a>, but I normally don't accept requests without mutual servers or friends.</p>
                                    <p>I can also be found on social media @WhiteHoodHacker.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Contact