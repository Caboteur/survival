import React, {Component} from "react"
import Exhibition from '../components/exhibition.js'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { observer } from 'mobx-react';
import mobx from "mobx";
import myStore from '../store/store.js'
import get from 'lodash/get'
import Seo from '../components/seo.js'

@observer
class SecondPage extends Component {
  constructor() {
    super();
    this.state={
      datas:""
    }
  }
  componentDidMount(){
      const posts = get(this, 'props.data');

  const tab = []
      posts.allContentfulExpo.edges.map((node)=>{

          if(node.node.tags === myStore.expo){

            tab.push(node)
            console.log()
            this.setState({datas: tab})

          }
      })
  }

  render() {

    return (
      <div>
        <Seo />
        {this.state.datas !="" ?   <Exhibition datas={this.state.datas}/> :   <p></p>}
      </div>
    );
  }
}

export default SecondPage;

  export const pageQuery = graphql`
  query MyQuery {
allContentfulExpo (sort: {fields: [date], order: ASC}) {
  edges {
    node {
      id
      tags
      info {
        info
      }
      photo {
        fluid {
        tracedSVG
      }
        file {
          details {
              image {
                width
                height
              }
            }
            url
        }
      }
       date
    }
  }
}
}

  `
