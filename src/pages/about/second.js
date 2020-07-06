import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'

const SecondPage = () => (
  <Layout>
    <h1>多機能なページのときには、jsxを足せばいい</h1>
    <p>
        このページはjsxで生成している
        <br />htmlのコピペでいいけど、クリティカルレンダリングがはいるか検証する必要あり。
    </p>
  </Layout>
)

export default SecondPage