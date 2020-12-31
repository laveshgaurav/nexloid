import {Component} from "react";
import { Helmet } from 'react-helmet';

class PageHelmet extends Component {
  render(){

    let { title, author, description, twTitle, twUrl, twDescription, twImage, ogTitle, ogType, ogUrl, ogImage, ogDescription, jsonLDSchema } = this.props;

    return(
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        {/* twitter cards */}
        <meta name="twitter:title" content={twTitle}/>
        <meta name="twitter:url" content={twUrl}/>
        <meta name="twitter:description" content={twDescription}/>
        <meta name="twitter:image" content={twImage}/>
        <meta name="twitter:card" content='summary_large_image'/>
        {/* facebook meta */}
        <meta name="og:title" content={ogTitle}/>
        <meta name="og:type" content={ogType}/>
        <meta name="og:url" content={ogUrl}/>
        <meta name="og:image" content={ogImage}/>
        <meta name="og:site_name" content="nexloid"/>
        <meta name="og:description" content={ogDescription}/>
        <script className='structured-data-list' type="application/ld+json">
          {jsonLDSchema?jsonLDSchema:''}
        </script>
      </Helmet>
    )
  }
}

export default PageHelmet;