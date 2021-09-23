import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Page 3</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
