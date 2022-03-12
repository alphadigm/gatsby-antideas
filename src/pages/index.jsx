import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import { Container } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
//import mixpanel from 'mixpanel-browser'

const PageContent = () => (
    <Layout>
        <Seo />
        <Parallax>
            <Container sx={{
                minWidth: `100%`,
                minHeight: `99vh`,
                backgroundImage: `url(/laimannung-X2Rm3VAA6vk-unsplash.jpg)`,
                backgroundPosition: `center`,
                backgroundSize: `99%`,
                backgroundBlendMode: `lighten`,
                backgroundAttachment: `fixed`,
                backgroundRepeat: `no-repeat`
            }}>
            <Content sx={{ variant: `texts.bigger`, width: `100%`, align: `center` }}>
                <Themed.p title="Photo by Lai Man Nung - unsplash.com/@laimannung">
                    a n t i d e a s - revolutionary innovations
                </Themed.p>
            </Content>
            </Container>
        </Parallax>
    </Layout>
)

//mixpanel.init('a32526dda925b161ad0a591aff80110f', { debug: true });
//mixpanel.track('Home');

export default PageContent
